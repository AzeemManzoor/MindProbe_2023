import React from 'react';
import {Col, Row } from "react-bootstrap";
import contacttt from "./about.css"

const AboutSection = () => {
  return (
<div>


    <section className="about-section">
      <div className="container">
      
        <div className="row">
          {/* Content Column */}
         
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="inner-column">
              <div className="sec-title">
              <h1 className='mindh2' >About Us</h1>
                <h2 className='mindh2' >MIND PROBE</h2>
              </div>
              <div className="text">
              At MIND PROBE, we believe in unlocking the power of personality to transform lives and experiences. Join our community of individuals who are on a journey of self-discovery and personal growth. Explore your unique personality, unlock your full potential, and make meaningful connections with others who share similar traits. Discover the power of personality insights with our designed system and embark on a trans formative journey towards self-awareness and personal success.
                             </div>
              <div className="text"><b>
              Start your journey with MIND PROBE today!  </b>            </div>
              <div className="btn-box">
                <a href="/contactUs" className="theme-btn btn-style-one">Contact Us</a>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column wow fadeInLeft">
              {/* <div className="author-desc">
                <h2>Rahul Kumar Yadav</h2>
                <span>Web Developer</span>
              </div> */}
              <figure className="image-1">
                <a href="" className="lightbox-image" data-fancybox="images">
                  <img src={require('../../Assets/POSTER.jpg')}  alt="" />
                </a>
              </figure>
            </div>
          </div>


        </div>



        {/* <div className="sec-title">
          <span className="title">Our Future Goal</span>
          <h2>We want to lead in innovation & Technology</h2>
        </div>
        <div className="text">
          We work on UI/UX and functionality as well so that a plugin comes with proper structure & stunning looks which suits your web app & website.
        </div> */}

      </div>
    </section>
    </div>
  );
};

export default AboutSection;
