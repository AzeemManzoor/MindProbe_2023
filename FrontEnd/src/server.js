
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors'); // Import the cors package
// const session = require('express-session'); // Import the session package

// const app = express();

// // Middleware to parse JSON request body
// app.use(express.json());
// app.use(cors());
// const corsOptions = {
//   origin: 'http://localhost:3000', // Set the allowed origin
//   methods: ['GET', 'POST'], // Set the allowed HTTP methods
//   allowedHeaders: ['Content-Type'], // Set the allowed headers
// };
// app.use(cors(corsOptions));
// app.use(
//   session({
//     secret: 'User',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }, // Set secure to true if using HTTPS
//   })
// );

// // Define the Answer model outside the route handler
// const Answer = mongoose.model('Answer', { userId: String, answers: [String] });

// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');

//     // Define a route to handle answer submission
//     app.post('/answer', (req, res) => {
//       const { answers } = req.body;
//        // Retrieve the user ID from the session
//       const userId = req.session.userId;
//       // Save the answers to the database
//       const newAnswer = new Answer({ userId,  answers });

//       newAnswer.save()
//         .then(() => {
//           res.status(200).json({ message: 'Answers saved successfully' });
//         })
//         .catch((error) => {
//           res.status(500).json({ error: 'Failed to save answers' });
//         });
//     });

//     // Generate and send the user ID
//      // Implement a function to generate a unique user ID
// app.get('/user', (req, res) => {
//   const userId = generateUserId();
//   res.json({ userId });
// });

//      // Start the server
//      app.listen(4000, () => {
//       console.log('Server listening on port 4000');
//     });
//   })
//   .catch((error) => {
//     console.log('Error connecting to MongoDB', error);
//   });







const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package
const session = require('express-session'); // Import the session package

const app = express();

// Middleware to parse JSON request body
app.use(express.json());
app.use(cors());
const corsOptions = {
  origin: 'http://localhost:3000', // Set the allowed origin
  methods: ['GET', 'POST'], // Set the allowed HTTP methods
  allowedHeaders: ['Content-Type'], // Set the allowed headers
};
app.use(cors(corsOptions));
app.use(
  session({
    secret: 'User',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set secure to true if using HTTPS
  })
);

// Define the Answer model outside the route handler
const Answer = mongoose.model('Answer', { userId: String, answers: [String] });

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');

    // Define a route to handle answer submission
    app.post('/answer', (req, res) => {
      const { answers } = req.body;
      // Retrieve the user ID from the session
      const userId = req.session.userId;
      // Save the answers to the database
      const newAnswer = new Answer({ userId, answers });

      newAnswer
        .save()
        .then(() => {
          res.status(200).json({ message: 'Answers saved successfully' });
        })
        .catch((error) => {
          res.status(500).json({ error: 'Failed to save answers' });
        });
    });

    // Generate and send the user ID
    // Implement a function to generate a unique user ID
    const generateUserId = () => {
      // Logic to generate a unique user ID
      // ...
      return 'some-generated-id';
    };

    app.get('/userId', (req, res) => {
      const userId = generateUserId();
      req.session.userId = userId; // Store the user ID in the session
      res.json({ userId });
    });

    // Start the server
    app.listen(4000, () => {
      console.log('Server listening on port 4000');
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });

