# from flask import Flask
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

#     all_answers = []

#     for record in answers_collection.find():
#         answers = record['answers']
#         all_answers.extend(answers)
    
#     # Retrieve the latest 30 answers
#     latest_answers = all_answers[-30:]
    
#     # Convert latest answers to array using the fitted CountVectorizer
#     entered_data = cv.transform(latest_answers).toarray()
#     output = model.predict(np.array([np.sum(entered_data, axis=0)]))
#     personality_type = output[0]
    
    
#     # Update all users' personality type in the types_collection
#     for record in answers_collection.find():
#         user_id = record['userId']

        
#         types_collection.update_one(
#             {'userId': user_id},
       
#             {'$set': {'PERSONALITY_TYPE': personality_type,

#             }},
#             upsert=True
#         )

#     print(latest_answers)
#     print("Personality Type:", personality_type)
    
#     return 'Machine learning process completed.'

# if __name__ == '__main__':
#     app.run(port=5000, debug=True)






# from flask import Flask
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
    
#     all_answers = []

#     for record in answers_collection.find():
#         answers = record['answers']
#         all_answers.extend(answers)
    
#     # Retrieve the latest 30 answers
#     latest_answers = all_answers[-30:]
    
#     for user_id in all_user_ids:
#         # Find all records with the same user_id in the answers_collection
#         all_user_records = answers_collection.find({'userId': user_id})

#         # Aggregate emotions from all records with the same user_id
#         all_emotions = []
#         for record in all_user_records:
#             average_emotion = record.get('average_emotion','nope')
                                      
                                         
#             record_all_emotions = record.get('all_emotions',[''] )
                                            
                                            
#             all_emotions.extend(record_all_emotions)

#             # Perform the machine learning part using the record's answers
#             answers = record['answers']
#             entered_data = cv.transform(latest_answers).toarray()
#             output = model.predict(np.array([np.sum(entered_data, axis=0)]))
#             personality_type = output[0]

#         # Update the user's data in the types_collection using $set operator
#         types_collection.update_one(
#             {'userId': user_id},
#             {
#                 '$set': {
#                     'PERSONALITY_TYPE': personality_type,
#                     'average_emotion': average_emotion,
#                     'all_emotions': all_emotions,
#                 }
#             },
#             upsert=True  # Set upsert=True to insert if the document doesn't exist
#         )

#         print("User ID:", user_id)
#         print("All Emotions:", all_emotions)
#         print("Average Emotion",average_emotion)
#         print(latest_answers)
#         print("Personality Type:", personality_type)
        
#     return 'Machine learning process completed.'

# if __name__ == '__main__':
#     app.run(port=5000, debug=True)




from flask import Flask
from pymongo import MongoClient
import pickle
from flask_cors import CORS
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer

app = Flask(__name__)
CORS(app)

@app.route('/api/model', methods=['POST'])
def run_machine_learning():
    # Load the saved model
    with open('model.pkl', 'rb') as f:
        model = pickle.load(f)

    with open('vectorizer.pkl', 'rb') as f:
        cv = pickle.load(f)

    client = MongoClient("mongodb://localhost:27017/mydatabase")
    db = client.get_database('mydatabase')
    answers_collection = db.answers
    types_collection = db.types

    # Get all unique user_ids present in the answers_collection
    all_user_ids = answers_collection.distinct('userId')
    
    all_answers = []

    for record in answers_collection.find():
        answers = record['answers']
        all_answers.extend(answers)
    
    # Retrieve the latest 30 answers
    latest_answers = all_answers[-30:]
    
    for user_id in all_user_ids:
        # Find all records with the same user_id in the answers_collection
        all_user_records = answers_collection.find({'userId': user_id})

        # Aggregate emotions from all records with the same user_id
        all_emotions = []
        for record in all_user_records:
            # Get the average_emotion and all_emotions from each individual record
            average_emotion = record.get('average_emotion', 'nope')
            record_all_emotions = record.get('all_emotions', [])  # Initialize as an empty list, not ['']
            all_emotions.extend(record_all_emotions)

        # Remove the last empty emotion (if any)
        if all_emotions and all_emotions[-1] == '':
            all_emotions.pop()

        # Calculate the average emotion for the user
        if all_emotions:
            average_emotion = max(set(all_emotions), key=all_emotions.count)
        else:
            average_emotion = 'no_emotion_data'  # Or any default value if no emotions are available

        # Perform the machine learning part using the latest_answers
        entered_data = cv.transform(latest_answers).toarray()
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
                }
            },
            upsert=True  # Set upsert=True to insert if the document doesn't exist
        )

        print("User ID:", user_id)
        print("All Emotions (Except Last One):", all_emotions)
        print("Average Emotion:", average_emotion)
        print(latest_answers)
        print("Personality Type:", personality_type)
        
    return 'Machine learning process completed.'

if __name__ == '__main__':
    app.run(port=5000, debug=True)




























