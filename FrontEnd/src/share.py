from flask_cors import CORS
from flask import Flask, request, jsonify
from pymongo import MongoClient



app = Flask(__name__)
CORS(app)
# Simulated in-memory database for demonstration
client = MongoClient("mongodb://localhost:27017/mydatabase")
db = client.get_database('mydatabase')
types_collection = db.types
shares_collection = db.shares



@app.route('/checkSharedData', methods=['POST'])
def check_shared_data():
    data = request.get_json()
    user_id = data.get('userId')

    # Check if user data exists in the shares_collection
    user_data = shares_collection.find_one({'userId': user_id})

    if user_data:
        return jsonify(shared=True)
    else:
        return jsonify(shared=False)






@app.route('/transferData', methods=['POST'])
def transfer_data():
    data = request.get_json()
    user_id = data.get('userId')

    # Find user data in the types_collection based on userId
    user_data = types_collection.find_one({'userId': user_id})

    if user_data:
        # Check if user data already exists in shares_collection
        existing_data = shares_collection.find_one({'userId': user_id})

        if existing_data:
            # Update the existing document in shares_collection
            shares_collection.update_one({'userId': user_id}, {'$set': user_data})
            return jsonify(message='Data updated successfully'), 200
        else:
            # Insert user data into shares_collection since it doesn't exist
            shares_collection.insert_one(user_data)
            return jsonify(message='Data transferred successfully'), 200
    else:
        return jsonify(message='User data not found'), 404
    # if user_data:
    #     # Insert user data into the shares_collection
    #     shares_collection.insert_one(user_data)
    #     return jsonify(message='Data transferred successfully'), 200
    # else:
    #     return jsonify(message='User data not found'), 404
    
    
    
@app.route('/fetchData', methods=['GET'])
def fetch_data():
    data_list = []  # To store fetched data
    
    # Iterate over each document in the types_collection
    for document in shares_collection.find():
        # Convert ObjectId to its hexadecimal string representation
        document['_id'] = str(document['_id'])
        data_list.append(document)
    
    return jsonify(data_list), 200



@app.route('/deleteData', methods=['POST'])
def remove_data():
    data = request.get_json()
    user_id = data.get('userId')

    # Delete user data from the shares_collection based on userId
    result = shares_collection.delete_many({'userId': user_id})

    if result.deleted_count > 0:
        return jsonify(removed=True)
    else:
        return jsonify(removed=False)




if __name__ == '__main__':
    app.run(port=5005, debug=True)










