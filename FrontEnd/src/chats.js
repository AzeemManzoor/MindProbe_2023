
// const express = require('express');
// const http = require('http');
// const { Server } = require('socket.io');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const session = require('express-session');
// require('dotenv').config();

// const app = express();
// app.use(express.json());
// app.use(cors());
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: 'http://localhost:3000', // Frontend URL
//     methods: ['GET', 'POST'],
//     credentials: true
//   }
// });

// app.use(
//   session({
//     secret: 'User',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false },
//   })
// );

// mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');

//   const Message = mongoose.model('Message', {
//     user: String,
//     text: String,
//     picture: String, // Fix: Define picture as String in Mongoose schema
//   });

//   const PORT = process.env.PORT || 9000;

//   io.on('connection', (socket) => {
//     console.log('User connected');

//     // Listen for new messages from clients
//     socket.on('message', async (message) => {
//       try {
//         // Create a new message document based on the received data
//         const newMessage = new Message({
//           user: message.user,
//           text: message.text,
//           picture: message.picture // Fix: Correct variable name
//         });

//         // Save the new message to the database
//         await newMessage.save();

//         // Emit the message to all connected clients
//         io.emit('message', newMessage);
//       } catch (error) {
//         console.error('Error saving message:', error);
//       }
//     });

//     socket.on('disconnect', () => {
//       console.log('User disconnected');
//     });
//   });

//   app.get('/messages', async (req, res) => {
//     try {
//       // Fetch messages from the database
//       const messages = await Message.find();
//       res.json(messages);
//     } catch (error) {
//       console.error('Error fetching messages:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

//   server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// }).catch((error) => {
//   console.log('Error connecting to MongoDB', error);
// });




const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

app.use(
  session({
    secret: 'User',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');

  const Message = mongoose.model('Message', {
    user: String,
    text: String,
    picture: String,
    createdAt: { type: Date, default: Date.now } 
  });

  async function deleteOldMessages() {
    try {
      await Message.deleteMany({}); 
      console.log('All messages deleted successfully');
    } catch (error) {
      console.error('Error deleting messages:', error);
    }
  }
  

  // Schedule the function to run every miliseconds Now(15 minutes) (7 days = 604800000)
  setTimeout(deleteOldMessages, 900000);

  const PORT = process.env.PORT || 9000;

  io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('message', async (message) => {
      try {
        const newMessage = new Message({
          user: message.user,
          text: message.text,
          picture: message.picture
        });

        await newMessage.save();
        io.emit('message', newMessage);
      } catch (error) {
        console.error('Error saving message:', error);
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  app.get('/messages', async (req, res) => {
    try {
      const messages = await Message.find();
      res.json(messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.log('Error connecting to MongoDB', error);
});
