
# from flask import Flask, render_template, jsonify, Response
# from flask_socketio import SocketIO, emit
# from pymongo import MongoClient
# import cv2
# from flask_cors import CORS

# import threading
# from deepface import DeepFace
# from mtcnn.mtcnn import MTCNN
# import time
# import base64

# app = Flask(__name__)
# CORS(app)
# socketio = SocketIO(app, cors_allowed_origins='*')

# # MongoDB setup
# client = MongoClient('mongodb://localhost:27017/')
# db = client['mydatabase']
# # change
# collection = db['answers']

# # Initialize MTCNN face detector
# mtcnn_detector = MTCNN()

# # Function to perform emotion analysis on a face region
# def analyze_emotion(face_region, emotions, index, lock):
#     try:
#         # Perform emotion analysis on the face region
#         results = DeepFace.analyze(face_region, actions=['emotion'], enforce_detection=False)
#         with lock:
#             emotion = results[0]['dominant_emotion']
#             emotions.append(emotion)
#             print(f"Face {index + 1} - Emotion: {emotion}")
#     except Exception as e:
#         print(f"Error analyzing emotion: {e}")
#         pass

# @app.route('/')
# def index():
#     return render_template('index.html')

# def process_video():
#     cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)

#     if not cap.isOpened():
#         error_message = "Cannot access the webcam. Make sure it is connected and not in use by another application."
#         socketio.emit('webcam_error', {'message': error_message})
#         return

#     # Frame resizing factor (adjust this for better performance)
#     resize_factor = 0.5

#     # Define the duration (in seconds) for video processing
#     video_duration = 60  # 1 minute

#     # Define the interval (in frames) to skip for face detection and emotion analysis
#     skip_frames = 3

#     start_time = time.time()
#     emotions = []

#     frame_count = 0

#     while time.time() - start_time <= video_duration:
#         ret, frame = cap.read()

#         if frame_count % skip_frames == 0:
#             # Resize the frame for faster processing
#             frame_resized = cv2.resize(frame, None, fx=resize_factor, fy=resize_factor)

#             # Use MTCNN to detect faces in the frame
#             faces = mtcnn_detector.detect_faces(frame_resized)

#             # Use threading to process emotion analysis in the background
#             threads = []
#             for i, face in enumerate(faces):
#                 x, y, w, h = face['box']
#                 # Convert face coordinates to the original frame size
#                 x, y, w, h = int(x/resize_factor), int(y/resize_factor), int(w/resize_factor), int(h/resize_factor)
#                 face_region = frame[y:y+h, x:x+w]

#                 # Start a thread for emotion analysis on the current face region
#                 thread = threading.Thread(target=analyze_emotion, args=(face_region, emotions, i, threading.Lock()))
#                 thread.start()
#                 threads.append(thread)

#             # Wait for all threads to finish before moving to the next frame
#             for thread in threads:
#                 thread.join()

#         frame_count += 1

#         # Convert frame to base64 for streaming to frontend
#         _, buffer = cv2.imencode('.jpg', frame)
#         frame_base64 = base64.b64encode(buffer).decode('utf-8')

#         # Emit the frame to frontend using SocketIO
#         socketio.emit('frame', {'image_data': frame_base64})

#     cap.release()

#     # Calculate the average emotion from all collected emotions
#     if emotions:
#         average_emotion = max(set(emotions), key=emotions.count)
#         print(f"\nAverage Emotion: {average_emotion}")
#     else:
#         print("\nNo faces detected.")


#     for record in collection.find():
#         user_id = record['userId']
#         collection.update_one(
#             {'userId': user_id},
#             {'$set': {
#         'average_emotion': average_emotion,
#         'all_emotions': emotions}},
#             upsert=True
#         )

# def generate_video_feed():
#     # Placeholder generator function for video feed
#     # It's not required for this implementation, as frames are sent via SocketIO
#     pass

# @app.route('/analyze_webcam')
# def analyze_webcam():
#     # Start processing video from the webcam in a separate thread
#     threading.Thread(target=process_video).start()
#     return jsonify(message="Emotion analysis started.")

# if __name__ == '__main__':
#     socketio.run(app, debug=True)

































from flask import Flask, render_template, jsonify, Response
from flask_socketio import SocketIO, emit
from pymongo import MongoClient
import cv2
from flask_cors import CORS

import threading
from deepface import DeepFace
from mtcnn.mtcnn import MTCNN
import time
import base64

app2 = Flask(__name__)
CORS(app2)
socketio = SocketIO(app2, cors_allowed_origins='*')

# MongoDB setup
client = MongoClient('mongodb://localhost:27017/')
db = client['mydatabase']
# change
collection = db['answers']

# Initialize MTCNN face detector
mtcnn_detector = MTCNN()

# Function to perform emotion analysis on a face region
def analyze_emotion(face_region, emotions, index, lock):
    try:
        # Perform emotion analysis on the face region
        results = DeepFace.analyze(face_region, actions=['emotion'], enforce_detection=False)
        with lock:
            emotion = results[0]['dominant_emotion']
            emotions.append(emotion)
            print(f"Face {index + 1} - Emotion: {emotion}")
    except Exception as e:
        print(f"Error analyzing emotion: {e}")
        pass

@app2.route('/')
def index():
    return render_template('index.html')

def process_video():
    cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)

    if not cap.isOpened():
        error_message = "Cannot access the webcam. Make sure it is connected and not in use by another application."
        socketio.emit('webcam_error', {'message': error_message})
        return

    # Frame resizing factor (adjust this for better performance)
    resize_factor = 0.5

    # Define the duration (in seconds) for video processing
    video_duration = 60  # 1 minute

    # Define the interval (in frames) to skip for face detection and emotion analysis
    skip_frames = 3

    start_time = time.time()
    emotions = []

    frame_count = 0

    while time.time() - start_time <= video_duration:
        ret, frame = cap.read()

        if frame_count % skip_frames == 0:
            # Resize the frame for faster processing
            frame_resized = cv2.resize(frame, None, fx=resize_factor, fy=resize_factor)

            # Use MTCNN to detect faces in the frame
            faces = mtcnn_detector.detect_faces(frame_resized)

            # Use threading to process emotion analysis in the background
            threads = []
            for i, face in enumerate(faces):
                x, y, w, h = face['box']
                # Convert face coordinates to the original frame size
                x, y, w, h = int(x/resize_factor), int(y/resize_factor), int(w/resize_factor), int(h/resize_factor)
                face_region = frame[y:y+h, x:x+w]

                # Start a thread for emotion analysis on the current face region
                thread = threading.Thread(target=analyze_emotion, args=(face_region, emotions, i, threading.Lock()))
                thread.start()
                threads.append(thread)

            # Wait for all threads to finish before moving to the next frame
            for thread in threads:
                thread.join()

        frame_count += 1

        # Convert frame to base64 for streaming to frontend
        _, buffer = cv2.imencode('.jpg', frame)
        frame_base64 = base64.b64encode(buffer).decode('utf-8')

        # Emit the frame to frontend using SocketIO
        socketio.emit('frame', {'image_data': frame_base64})

    cap.release()

    # Calculate the average emotion from all collected emotions
    if emotions:
        average_emotion = max(set(emotions), key=emotions.count)
        print(f"\nAverage Emotion: {average_emotion}")
    else:
        print("\nNo faces detected.")


    for record in collection.find():
        user_id = record['userId']
        collection.update_one(
            {'userId': user_id},
            {'$set': {
        'average_emotion': average_emotion,
        'all_emotions': emotions}},
            upsert=True
        )

def generate_video_feed():
    # Placeholder generator function for video feed
    # It's not required for this implementation, as frames are sent via SocketIO
    pass

@app2.route('/analyze_webcam')
def analyze_webcam():
    # Start processing video from the webcam in a separate thread
    threading.Thread(target=process_video).start()
    return jsonify(message="Emotion analysis started.")

if __name__ == '__main__':
    socketio.run(app2,port=5001, debug=True)

