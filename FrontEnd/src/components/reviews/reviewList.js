import React from 'react';

const ReviewsList = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>Stars: {review.stars}</strong><br />
            {review.review}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsList;
