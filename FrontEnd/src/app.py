
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
#     records = db.answers
#     types_collection = db.types

#     combined_answers = {}

#     for record in records.find():
#         user_id = record['userId']
#         answers = record['answers']
#         if user_id in combined_answers:
#             combined_answers[user_id].extend(answers)
#         else:
#             combined_answers[user_id] = answers

#     for user_id, answers in combined_answers.items():
#         # Convert current user's answers to array using the fitted CountVectorizer
#         entered_data = cv.transform(answers).toarray()
#         output = model.predict(np.array([np.sum(entered_data, axis=0)]))
#         personality_type = output[0]

#         types_collection.update_one(
#             {'userId': user_id},
#             {'$set': {'PERSONALITY_TYPE': personality_type}},
#             upsert=True
#         )
#     print(combined_answers)
    
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

    all_answers = []

    for record in answers_collection.find():
        answers = record['answers']
        all_answers.extend(answers)
    
    # Retrieve the latest 30 answers
    latest_answers = all_answers[-30:]
    
    # Convert latest answers to array using the fitted CountVectorizer
    entered_data = cv.transform(latest_answers).toarray()
    output = model.predict(np.array([np.sum(entered_data, axis=0)]))
    personality_type = output[0]
    
    
    # Update all users' personality type in the types_collection
    for record in answers_collection.find():
        user_id = record['userId']
        types_collection.update_one(
            {'userId': user_id},
            {'$set': {'PERSONALITY_TYPE': personality_type}},
            upsert=True
        )

    print(latest_answers)
    print("Personality Type:", personality_type)
    
    return 'Machine learning process completed.'

if __name__ == '__main__':
    app.run(port=5000, debug=True)





