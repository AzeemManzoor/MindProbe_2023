import React from 'react';
import {Button, Col, Row } from "react-bootstrap";
import '../homepage/team.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Team = () => {
  return (
    <div>

<Row className='yup' >
                <h3 style={{ paddingTop: 50 }} className="heading">
                OUR TEAM
                </h3>
                <h8 style={{ paddingBottom: 15 }} className="heading">
                
                <b> People Behind MINDPROBE
                </b>
                </h8>

</Row>

<div  className="mainz" >

    <div className="main1">




      <div className="profile-card">
        <div className="img">
        <img src={require('../../Assets/Muaz.jpg')} alt="Muaz" />
        </div>
        <div className="caption">
          <h3>Chaudhry Muaz</h3>
          <p>Sr Web Developer</p>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=100076438240158"><i className="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/chaudhry-muaz-ijaz-30b8a0203/"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/muazz056"><i className="fab fa-github"></i></a>
            <a href="https://chaudhry-muaz-portfolio.netlify.app"><i className="fas fa-globe"></i></a>
          </div>
        </div>
      </div>




      <div className="profile-card">
        <div className="img">
        <img src={require('../../Assets/Azeem.jpg')} alt="Muaz" />        
         </div>
        <div className="caption">
          <h3>Azeem Manzoor</h3>
          <p>Front End Developer</p>
          <div className="social-links">
          <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href=""><i className="fas fa-globe"></i></a>
          </div>
        </div>
      </div>



      
      <div className="profile-card">
        <div className="img">
        <img src={require('../../Assets/Sarmad.jpg')} alt="Muaz" />       
        </div>
        <div className="caption">
          <h3>Sarmad Waheed</h3>
          <p>Front End Developer</p>
          <div className="social-links">
          <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fas fa-globe"></i></a>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

  );
};

export default Team;
