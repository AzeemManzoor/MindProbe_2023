import React, { useState } from 'react';

const ReviewForm = ({ onReviewSubmit }) => {
  const [review, setReview] = useState('');
  const [stars, setStars] = useState(0);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleStarsChange = (e) => {
    setStars(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onReviewSubmit({ review, stars });
    setReview('');
    setStars(0);
  };

  return (
    <div>
      <h2>Add Your Review</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Review:
          <input type="text" value={review} onChange={handleReviewChange} />
        </label>
        <label>
          Stars:
          <input type="number" min="1" max="5" value={stars} onChange={handleStarsChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
