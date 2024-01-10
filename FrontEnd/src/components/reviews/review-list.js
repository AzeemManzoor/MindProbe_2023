import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import {Row } from "react-bootstrap";

import './ReviewsList.css'; 

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:10000/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      {/* <Row> */}
<h2 className="reviews-head">User reviews</h2>
{/* </Row> */}
    <div className="reviews-list">

      {reviews.map((review) => (
        <div className="review-card" key={review._id}>
          <div className="user-info">
            <img src={review.Picture} alt="User" className="user-photo" />
            <div className="user-details">
              <p className="user-name">{review.Name}</p>
              <p className="user-id">{review.userId}</p>
              <div className="rating">
                <StarRatings
                  size={10}
                  rating={review.stars}
                  starRatedColor="gold"
                  numberOfStars={5}
                  name='rating'
                  isSelectable={false}
                />
              </div>
              {/* <div className="comment-heading">Comment</div> */}
              <p className="review-text comment-heading">{review.review}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ReviewsList;

