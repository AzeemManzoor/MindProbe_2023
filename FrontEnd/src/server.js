const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for the data
const dataSchema = new Schema({
  textareaValue: String,
});

const Data = mongoose.model('Data', dataSchema);

// Enable JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle POST request to store data
app.post('/store', async (req, res) => {
  try {
    // Create a new data object
    const newData = new Data({
      textareaValue: req.body.textareaValue,
    });

    // Save the data to the database
    await newData.save();

    res.status(200).send('Data stored successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error storing data');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});