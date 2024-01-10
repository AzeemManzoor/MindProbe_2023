const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 10000;

app.use(cors());
app.use(express.json());

// mongoose.connect('mongodb+srv://MindPROBE:muazijaz0336048@cluster0.vb4xrck.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});


const reviewSchema = new mongoose.Schema({
  userId: String,
  Name: String,
  stars: Number,
  review: String,
  Picture:String,
});

const Review = mongoose.model('Review', reviewSchema);

app.post('/reviews', async (req, res) => {
  const { stars, review, userId, Name,Picture } = req.body;

  try {
    // Find an existing review by userId
    const existingReview = await Review.findOne({ userId });

    // If an existing review is found, update it
    if (existingReview) {
      existingReview.stars = stars;
      existingReview.review = review;
      await existingReview.save();
      res.status(200).json(existingReview);
    } else {
      // If no existing review is found, create a new one
      const newReview = new Review({
        stars,
        review,
        userId,
        Name,
Picture,
      });

      await newReview.save();
      res.status(201).json(newReview);
    }
  } catch (error) {
    console.error('Error updating/replacing review:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
