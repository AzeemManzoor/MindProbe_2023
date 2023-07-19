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

const Answer = mongoose.model('Answer', { userId: String, answers: [String], PERSONALITY_TYPE: String });

const Type = mongoose.model('Type', { PERSONALITY_TYPE: String });

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');

  app.post('/answer', (req, res) => {
    const { userId, answers } = req.body;
    const newAnswer = new Answer({ userId, answers });

    newAnswer.save()
      .then(() => {
        res.status(200).json({ message: 'Answers saved successfully' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to save answers' });
      });
  });

  app.get('/userId', (req, res) => {
    const { username } = req.query;
    if (req.session.userId) {
      res.json({ userId: req.session.userId });
    } else {
      const userId = generateUserId(username);
      req.session.userId = userId;
      res.json({ userId });
    }
  });

app.get('/personalityTypes', (req, res) => {
  Type.find({}, 'userId PERSONALITY_TYPE')
    .then((types) => {
      res.json(types);
    })
    .catch((error) => {
      console.error('Failed to fetch personality types', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});


  const generateUserId = (username) => {
    return username;
  };

  app.listen(4000, () => {
    console.log('Server listening on port 4000');
  });
}).catch((error) => {
  console.log('Error connecting to MongoDB', error);
});






