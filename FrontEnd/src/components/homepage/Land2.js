import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import {Row } from "react-bootstrap";

import './Land2.css'; // Import the CSS file for styling

const Home3 = () => {
  const [reviews, setReviews] = useState([]);
  const [showAllReviews, setShowAllReviews] = useState(false);

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

  // Function to toggle the display of all reviews
  const btn = () => {
    window.location.href='/User-reviews';

  };


    return (
<div
//  className='test'
  >
<Row
//  className='yup'
  >
<div
//  className='head3'
 >
                <h3 style={{ paddingTop: 50 }} className="heading">
                Testimonials
                </h3>
                <h8 style={{ paddingBottom: 15 }} className="heading">
                
                <b> See what our users have to say


                </b>
                </h8>

</div>
</Row>
<Row>
<div className="reviews-list">
      {reviews.slice(0, showAllReviews ? reviews.length : 3).map((review) => (
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
</Row>

              <Row className='revrow' >

      {reviews.length > 3 && !showAllReviews && (
        <div>
        <button onClick={btn}
        className="see-more" >
          SEE MORE
        </button>
        </div>
      )}

              </Row>

    {/* </div> */}



















     </div>      
    );
  }
  
  export default Home3;