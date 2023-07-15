# from flask import Flask
# from pymongo import MongoClient
# import pickle
# import numpy as np
# from sklearn.feature_extraction.text import CountVectorizer as CV

# app = Flask(__name__)
# client = MongoClient("mongodb://localhost:27017/mydatabase")
# db = client.get_database('mydatabase')
# records = db.answers
# types_collection = db.types

# @app.route('/api/model', methods=['POST'])
# def run_machine_learning():
#     # Load the saved model
#     with open('model.pkl', 'rb') as f:
#         model = pickle.load(f)

#     # Loop through combined answers and apply the model
#     combined_answers = {}
#     for record in records.find():
#         user_id = record['userId']
#         answers = record['answers']
#         if user_id in combined_answers:
#             combined_answers[user_id].extend(answers)
#         else:
#             combined_answers[user_id] = answers

#     for user_id, answers in combined_answers.items():
#         entered_data = CV.transform(combined_answers).toarray()
#         output = model.predict(np.array([np.sum(entered_data, axis=0)]))
#         personality_type = output[0]

#         types_collection.update_one(
#             {'userId': user_id},
#             {'$set': {'PERSONALITY_TYPE': personality_type}},
#             upsert=True
#         )
        
#     return()


# if __name__ == '__main__':
#     app.run(port=5000,debug=True)


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
    records = db.answers
    types_collection = db.types

    combined_answers = {}

    for record in records.find():
        user_id = record['userId']
        answers = record['answers']
        if user_id in combined_answers:
            combined_answers[user_id].extend(answers)
        else:
            combined_answers[user_id] = answers

    for user_id, answers in combined_answers.items():
        # Convert current user's answers to array using the fitted CountVectorizer
        entered_data = cv.transform(answers).toarray()
        output = model.predict(np.array([np.sum(entered_data, axis=0)]))
        personality_type = output[0]

        types_collection.update_one(
            {'userId': user_id},
            {'$set': {'PERSONALITY_TYPE': personality_type}},
            upsert=True
        )
        
    return 'Machine learning process completed.'


if __name__ == '__main__':
    app.run(port=5000, debug=True)

