
# perfect for 1st time user

# from flask import Flask, request, jsonify
# from pymongo import MongoClient
# import pickle
# from flask_cors import CORS
# import numpy as np
# from sklearn.feature_extraction.text import CountVectorizer

# app = Flask(__name__)
# CORS(app)

# @app.route('/api/model', methods=['POST'])
# def run_machine_learning():
#     # Load the saved model
#     with open('model.pkl', 'rb') as f:
#         model = pickle.load(f)

#     with open('vectorizer.pkl', 'rb') as f:
#         cv = pickle.load(f)

#     client = MongoClient("mongodb://localhost:27017/mydatabase")
#     db = client.get_database('mydatabase')
#     answers_collection = db.answers
#     types_collection = db.types

#     # Get all unique user_ids present in the answers_collection
#     all_user_ids = answers_collection.distinct('userId')
    
#     for user_id in all_user_ids:
#         # Find all records with the same user_id in the answers_collection
#         user_records = answers_collection.find({'userId': user_id})

#         # Aggregate emotions and latest 30 answers from all records with the same user_id
#         all_answers = []
#         all_emotions = []
#         Name = ""
#         Picture = ""
#         for record in user_records:
#             answers = record.get('answers', [])
#             emotions = record.get('all_emotions', [])
#             # Consider only the latest 30 answers
#             latest_answers = answers[-30:]
#             all_answers.extend(latest_answers)
#             all_emotions.extend(emotions)

#             # Get Name and Picture from the last record with the same user_id
#             Name = record.get('Name')
#             Picture = record.get('Picture')

#         # Remove the last empty emotion (if any)
#         if all_emotions and all_emotions[-1] == '':
#             all_emotions.pop()

#         # Calculate the average emotion for the user
#         if all_emotions:
#             average_emotion = max(set(all_emotions), key=all_emotions.count)
#         else:
#             average_emotion = 'Interview Pending'  # Or any default value if no emotions are available

#         # Perform the machine learning part using the combined latest 30 answers
#         entered_data = cv.transform(all_answers).toarray()
#         output = model.predict(np.array([np.sum(entered_data, axis=0)]))
#         personality_type = output[0]

#         # Update the user's data in the types_collection using $set operator
#         types_collection.update_one(
#             {'userId': user_id},
#             {
#                 '$set': {
#                     'PERSONALITY_TYPE': personality_type,
#                     'average_emotion': average_emotion,
#                     'all_emotions': all_emotions,
#                     'Name': Name,
#                     'Picture': Picture,
#                 }
#             },
#             upsert=True
#         )

#         print("User ID:", user_id)
#         print("Latest 30 Answers:", all_answers)
#         print("Personality Type:", personality_type)
#         print("All Emotions (Except Last One):", all_emotions)
#         print("Average Emotion:", average_emotion)

#     return 'Machine learning process completed.'

# if __name__ == '__main__':
#     app.run(port=5000, debug=True)












































# from flask import Flask, request, jsonify
# from pymongo import MongoClient
# import pickle
# from flask_cors import CORS
# import numpy as np
# from sklearn.feature_extraction.text import CountVectorizer

# app = Flask(__name__)
# CORS(app)

# @app.route('/api/model', methods=['POST'])
# def run_machine_learning():
#     # Load the saved model
#     with open('model.pkl', 'rb') as f:
#         model = pickle.load(f)

#     with open('vectorizer.pkl', 'rb') as f:
#         cv = pickle.load(f)

#     client = MongoClient("mongodb://localhost:27017/mydatabase")
#     db = client.get_database('mydatabase')
#     answers_collection = db.answers
#     types_collection = db.types

#     # Get all unique user_ids present in the answers_collection
#     all_user_ids = answers_collection.distinct('userId')
    
#     for user_id in all_user_ids:
#         # Find all records with the same user_id in the answers_collection
#         user_records = answers_collection.find({'userId': user_id})

#         # Aggregate emotions and last 30 answers from all records with the same user_id
#         all_answers = []
#         all_emotions = []
#         Name = ""
#         Picture = ""
#         for record in user_records:
#             # Consider only the last 30 answers
#             answers = record.get('answers', [])[-30:]
#             emotions = record.get('all_emotions', [])
#             all_answers.extend(answers)
#             all_emotions.extend(emotions)

#             # Get Name and Picture from the last record with the same user_id
#             Name = record.get('Name')
#             Picture = record.get('Picture')

#         # Remove the last empty emotion (if any)
#         if all_emotions and all_emotions[-1] == '':
#             all_emotions.pop()

#         # Calculate the average emotion for the user
#         if all_emotions:
#             average_emotion = max(set(all_emotions), key=all_emotions.count)
#         else:
#             average_emotion = 'Interview Pending'  # Or any default value if no emotions are available

#         # Perform the machine learning part using the combined last 30 answers
#         latest_30_answers = all_answers[-30:]  # Consider only the last 30 answers
#         entered_data = cv.transform(latest_30_answers).toarray()
#         output = model.predict(np.array([np.sum(entered_data, axis=0)]))
#         personality_type = output[0]

#         # Update the user's data in the types_collection using $set operator
#         types_collection.update_one(
#             {'userId': user_id},
#             {
#                 '$set': {
#                     'PERSONALITY_TYPE': personality_type,
#                     'average_emotion': average_emotion,
#                     'all_emotions': all_emotions,
#                     'Name': Name,
#                     'Picture': Picture,
#                 }
#             },
#             upsert=True
#         )

#         print("User ID:", user_id)
#         print("All existed answers:", all_answers)

#         print("Latest 30 Answers:", latest_30_answers)
#         print("Personality Type:", personality_type)
#         print("All Emotions (Except Last One):", all_emotions)
#         print("Average Emotion:", average_emotion)

#     return 'Machine learning process completed.'

# if __name__ == '__main__':
#     app.run(port=5000, debug=True)































from flask import Flask, request, jsonify
from pymongo import MongoClient
import pickle
from flask_cors import CORS
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer

app = Flask(__name__)
CORS(app)

@app.route('/api/model/<string:user_id>', methods=['POST'])
def run_machine_learning(user_id):
    # Load the saved model
    with open('model.pkl', 'rb') as f:
        model = pickle.load(f)

    with open('vectorizer.pkl', 'rb') as f:
        cv = pickle.load(f)

    # uri = "mongodb+srv://MindPROBE:muazijaz0336048@cluster0.vb4xrck.mongodb.net/mydatabase?retryWrites=true&w=majority"
    # client = MongoClient(uri)   
    # db = client.get_database('test')
    client = MongoClient("mongodb://localhost:27017/mydatabase")
    db = client.get_database('mydatabase')
    answers_collection = db.answers
    types_collection = db.types

    # Find all records with the specified user_id in the answers_collection
    user_records = answers_collection.find({'userId': user_id})

    # Aggregate emotions and last 30 answers from all records with the specified user_id
    all_answers = []
    all_emotions = []
    Name = ""
    Picture = ""
    for record in user_records:
        # Consider only the last 30 answers
        answers = record.get('answers', [])[-30:]
        emotions = record.get('all_emotions', [])
        all_answers.extend(answers)
        all_emotions.extend(emotions)

        # Get Name and Picture from the last record with the specified user_id
        Name = record.get('Name')
        Picture = record.get('Picture')

    # Remove the last empty emotion (if any)
    if all_emotions and all_emotions[-1] == '':
        all_emotions.pop()

    # Calculate the average emotion for the user
    if all_emotions:
        average_emotion = max(set(all_emotions), key=all_emotions.count)
    else:
        average_emotion = 'Interview Pending'  # Or any default value if no emotions are available

    # Perform the machine learning part using the combined last 30 answers
    latest_30_answers = all_answers[-30:]  # Consider only the last 30 answers
    entered_data = cv.transform(latest_30_answers).toarray()
    output = model.predict(np.array([np.sum(entered_data, axis=0)]))
    personality_type = output[0]

    # Update the user's data in the types_collection using $set operator
    types_collection.update_one(
        {'userId': user_id},
        {
            '$set': {
                'PERSONALITY_TYPE': personality_type,
                'average_emotion': average_emotion,
                'all_emotions': all_emotions,
                'Name': Name,
                'Picture': Picture,
            }
        },
        upsert=True
    )

    print("User ID:", user_id)
    print("All existed answers:", all_answers)
    print("Latest 30 Answers:", latest_30_answers)
    print("Personality Type:", personality_type)
    print("All Emotions (Except Last One):", all_emotions)
    print("Average Emotion:", average_emotion)

    return 'Machine learning process completed.'

if __name__ == '__main__':
    app.run(port=5000, debug=True)
