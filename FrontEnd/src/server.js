const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');

    // Define a route to handle answer submission
    app.post('/answer', (req, res) => {
      const { answers } = req.body;

      // Save the answers to the database
      const Answer = mongoose.model('Answer', { answers: [String] });

      const newAnswer = new Answer({ answers });

      newAnswer.save()
        .then(() => {
          res.status(200).json({ message: 'Answers saved successfully' });
        })
        .catch((error) => {
          res.status(500).json({ error: 'Failed to save answers' });
        });
    });

     // Start the server
     app.listen(4000, () => {
      console.log('Server listening on port 4000');
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });
