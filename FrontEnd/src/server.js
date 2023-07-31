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

const Answer = mongoose.model('Answer', { userId: String, answers: [String], PERSONALITY_TYPE: String ,
  average_emotion: String , all_emotions:[String]});

const Type = mongoose.model('Type', { PERSONALITY_TYPE: String ,average_emotion: String , all_emotions:[String]  });

// NEW COLLECTION
// const Emotion = mongoose.model('Emotion', { userId: String,  emotions: String  });
// NEW COLLECTION


mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
// change
app.post('/answer', (req, res) => {
  const {  userId, answers,all_emotions,average_emotions } = req.body;
  const newAnswer = new Answer({ userId, answers,all_emotions,average_emotions });


  // app.post('/answer', (req, res) => {
  //   const { userId, answers } = req.body;
  //   const newAnswer = new Answer({ userId, answers });

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


// app.get('/emotions', (req, res) => {
//   Type.find({}, 'userId all_emotions average_emotion')
//     .then((types) => {
//       res.json(types);
//     })
//     .catch((error) => {
//       console.error('Failed to fetch Emotion', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     });
// });


app.get('/emotions', (req, res) => {
  const { userId } = req.query;

  Type.findOne({ userId }, 'all_emotions average_emotion')
    .then((emotions) => {
      if (!emotions) {
        console.log('Emotions not found for the logged-in user.');
        res.status(404).json({ error: 'Emotions not found' });
        return;
      }

      res.json(emotions);
    })
    .catch((error) => {
      console.error('Failed to fetch emotions', error);
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




