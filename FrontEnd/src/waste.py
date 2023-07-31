# from pymongo import MongoClient
# import cv2

# import threading
# from deepface import DeepFace
# from mtcnn.mtcnn import MTCNN
# import time
# import base64

# # MongoDB setup
# client = MongoClient('mongodb://localhost:27017/')
# db = client['mydatabase']
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

# def process_video():
#     cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)

#     if not cap.isOpened():
#         print("Cannot access the webcam. Make sure it is connected and not in use by another application.")
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
#         cv2.imshow("Webcam Feed", frame)
#         # Convert frame to base64 for streaming to frontend (not required here)
#         _, buffer = cv2.imencode('.jpg', frame)
#         frame_base64 = base64.b64encode(buffer).decode('utf-8')

#     cap.release()
#     # Calculate the average emotion from all collected emotions
#     if emotions:
#         average_emotion = max(set(emotions), key=emotions.count)
#         print(f"\nAverage Emotion: {average_emotion}")
#     else:
#         print("\nNo faces detected.")

#     # Update the MongoDB collection with the average emotion (not required here)
#     for record in collection.find():
#         user_id = record['userId']
#         collection.update_one(
#             {'userId': user_id},
#             {'$set': {
#                 'average_emotion': average_emotion,
#                 'all_emotions': emotions}},
#             upsert=True
#         )

# # Call the process_video function to start emotion analysis
# if __name__ == '__main__':
#     process_video()














import cv2
import threading
from deepface import DeepFace
from mtcnn.mtcnn import MTCNN
import time

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

def process_video():
    cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)

    if not cap.isOpened():
        print("Cannot access the webcam. Make sure it is connected and not in use by another application.")
        return

    # Frame resizing factor (adjust this for smoother display)
    resize_factor = 0.1  # Keep the original size (no resizing)

    # Define the duration (in seconds) for video processing
    video_duration = 60  # 1 minute

    # Define the interval (in frames) to skip for face detection and emotion analysis
    skip_frames = 60  # Skip fewer frames for smoother display

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

        # Display the frame with cv2.imshow()
        cv2.imshow("Webcam Feed", frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):  # Press 'q' to exit the loop
            break

    cap.release()
    cv2.destroyAllWindows()

    # Calculate the average emotion from all collected emotions
    if emotions:
        average_emotion = max(set(emotions), key=emotions.count)
        print(f"\nAverage Emotion: {average_emotion}")
        print(f"\nALL Emotions: {emotions}")
        
        
        
    else:
        print("\nNo faces detected.")

# Call the process_video function to start emotion analysis
if __name__ == '__main__':
    process_video()
