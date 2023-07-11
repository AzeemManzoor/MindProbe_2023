




const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: 'User',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

const Answer = mongoose.model('Answer', { userId: String, answers: [String] });

mongoose
  .connect('mongodb://127.0.0.1:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');

    app.post('/answer', (req, res) => {
      const { userId, answers } = req.body;
      const newAnswer = new Answer({ userId, answers });

      newAnswer
        .save()
        .then(() => {
          res.status(200).json({                                                                    essage: 'Answers saved successfully' });
        })
        .catch((error) => {
          res.status(500).json({ error: 'Failed to save answers' });
        });
    });

    app.get('/userId', (req, res) => {
      const { username } = req.query;
      // Check if user ID already exists in the session
      if (req.session.userId) {
        res.json({ userId: req.session.userId });
      } else {
        // Generate and store the user ID in the session based on the username
        const userId = generateUserId(username);
        req.session.userId = userId;
        res.json({ userId });
      }
    });

    // Function to generate a unique user ID based on the username
    const generateUserId = (username) => {
      // Logic to generate a unique user ID based on the username
      // ...
      return username;
    };

    app.listen(4000, () => {
      console.log('Server listening on port 4000');
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });
