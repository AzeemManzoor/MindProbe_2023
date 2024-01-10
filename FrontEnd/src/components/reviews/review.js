import React, { useState } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { useAuth0 } from '@auth0/auth0-react'; 
import reviews from './reviews.css'
import { Row, Col } from 'react-bootstrap';

const ReviewForm = ({}) => {
  const [stars, setStars] = useState(0);
  const [review, setReview] = useState('');
  const { user,isAuthenticated } = useAuth0();



  const handleRatingChange = (newRating) => {
    setStars(newRating);
  };

  const handleSubmit = async () => {
    if (isAuthenticated && user && user.email) {
    try {
      await axios.post('http://localhost:10000/reviews', {
        stars,
        review,
        userId: user?.email, 
        Name: user.name,
        Picture: user.picture,
      });

      window.location.href = '/';

    } catch (error) {
      console.error('Error submitting review:', error);
    }
  }
  };

  return (
    <div>
      <h2>Leave a Review</h2>
      <div>
      <StarRatings
        rating={stars}
        starRatedColor="gold"
        changeRating={handleRatingChange}
        numberOfStars={5}
        name='rating'
      />
      </div>
      <div>
      <textarea
        placeholder="Write your review here..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      </div>
      <div>
      <button className='btn-sub' onClick={handleSubmit}>Submit Review</button>
      </div>
    </div>
  );
};

export default ReviewForm;
