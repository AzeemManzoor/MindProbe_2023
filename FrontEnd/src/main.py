import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.linear_model import LogisticRegression
from pymongo import MongoClient
import pickle
from sklearn.model_selection import train_test_split

# Read the dataset
data = pd.read_csv("dataset.csv")
# data = data.drop(['Unnamed: 2', 'Unnamed: 3', 'Unnamed: 4'], axis=1)
# data
# data = data.sample(frac=1).reset_index(drop=True)
# data

# Drop the columns if they exist


data.info()    #dataset do not contain any null value
data.isnull().sum()           # returns the number of missing values in the data set.
data["type"].value_counts()


x = data["posts"]
y = data["type"]

data=x
target=y

# Transform text data to numerical representation
CV = CountVectorizer()
X = CV.fit_transform(x)

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)

# Train the Logistic Regression model
model = LogisticRegression()
model.fit(X_train, y_train)
pred = model.predict(X_test)
# model_acc = accuracy_score(y_test, pred) * 100

# Save the trained model
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)


with open('vectorizer.pkl', 'wb') as f:
    pickle.dump(CountVectorizer, f)
    
