from collections import Counter
from flask import Flask, render_template, jsonify, request
import time
from flask_socketio import SocketIO
from flask_cors import CORS
from pymongo import MongoClient
from mtcnn.mtcnn import MTCNN
from deepface import DeepFace
import base64
import threading
import cv2

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins='*')

# MongoDB setup
client = MongoClient('mongodb://localhost:27017/')
db = client['mydatabase']
collection = db['answers']

# Initialize MTCNN face detector
mtcnn_detector = MTCNN()

# Lock for database updates
db_update_lock = threading.Lock()

def analyze_emotion(face_region, emotions, index, lock):
    try:
        results = DeepFace.analyze(face_region, actions=['emotion'], enforce_detection=False)
        emotion = results[0]['dominant_emotion']
        with lock:
            emotions.append(emotion)
            print(f"Face {index + 1} - Emotion: {emotion}")
    except Exception as e:
        print(f"Error analyzing emotion: {e}")

def process_video(stop_event, user_id):
    cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)

    if not cap.isOpened():
        error_message = "Cannot access the webcam. Make sure it is connected and not in use by another application."
        socketio.emit('webcam_error', {'message': error_message})
        return

    resize_factor = 0.5
    video_duration = 60
    skip_frames = 3
    start_time = time.time()
    emotions=[]
    frame_count = 0  # Initialize frame_count

    while time.time() - start_time <= video_duration and not stop_event.is_set():
        ret, frame = cap.read()

        if frame_count % skip_frames == 0:
            frame_resized = cv2.resize(frame, None, fx=resize_factor, fy=resize_factor)
            faces = mtcnn_detector.detect_faces(frame_resized)

            threads = []
            for i, face in enumerate(faces):
                x, y, w, h = face['box']
                x, y, w, h = int(x/resize_factor), int(y/resize_factor), int(w/resize_factor), int(h/resize_factor)
                face_region = frame[y:y+h, x:x+w]
                thread = threading.Thread(target=analyze_emotion, args=(face_region, emotions, i, threading.Lock()))
                thread.start()
                threads.append(thread)

            for thread in threads:
                thread.join()

        frame_count += 1

        # Convert frame to base64 for streaming to frontend
        _, buffer = cv2.imencode('.jpg', frame)
        frame_base64 = base64.b64encode(buffer).decode('utf-8')
        socketio.emit('frame', {'image_data': frame_base64})

    cap.release()
    
    unique_emotions=[]
    average_emotion=""
    print(user_id)
    with db_update_lock:
        if emotions:
            unique_emotions = set(emotions)   
            unique_emotions_list=list(unique_emotions)
            average_emotion = max(set(emotions), key=emotions.count)                     
            print(f"\nEmotions: {emotions}")
            print(f"\nUnique Emotions: {[unique_emotions]}")
            print(f"\nAverage Emotions: {average_emotion}")

        else:
            average_emotion = None

        # Update the database with userId, emotions, unique_emotions, and average_emotion
        collection.update_one(
            {'userId': user_id},
            {'$set': {
                # all emotions
                # 'emotions': emotions,
                
                # unique emotions
                'all_emotions': unique_emotions_list, 
                'average_emotion': average_emotion}},
            upsert=True
        )


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/analyze_webcam', methods=['GET'])
def analyze_webcam():
    global stop_event

    # Get userId (email) from the request headers
    user_id = request.headers.get('UserId')

    if not user_id:
        return jsonify(message="UserId not provided in headers."), 400

    # Reset the stop_event before starting new threads
    stop_event = threading.Event()

    threading.Thread(target=process_video, args=(stop_event, user_id)).start()
    return jsonify(message="Emotion analysis started.")

@app.route('/stop_analysis', methods=['POST'])
def stop_analysis():
    global stop_event
    stop_event.set()  # Set the stop_event to stop video analysis
    return jsonify(message="Emotion analysis stopped.")

if __name__ == '__main__':
    socketio.run(app, port=5007, debug=True)