import React,{useState} from 'react';
import {Col, Row } from "react-bootstrap";
import '../homepage/home.css'
import '../homepage/team.css'

function FlipCard({ name, role,role1,role2, imageSource }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Col md={4} id='align'> 
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="image" src={imageSource} alt="" />
          </div>
          <div className="flip-card-back">
            <div className="content">
              <h3>{name}</h3>
              <p>{role}</p>
              <p className='role1' >{role1}</p>
              <p>{role2}</p>
              <div className="social-links">
                <a className="social-link" href="https://www.facebook.com">Facebook</a>
                <a className="social-link" href="https://www.github.com">LinkedIn</a>
                <a className="social-link" href="https://www.github.com">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

function Team() {


 
    return (
<div className='team' >
<Row className='yup' >
<div className='head3'>
                <h3 style={{ paddingTop: 50 }} className="heading">
                OUR TEAM
                </h3>
                <h8 style={{ paddingBottom: 15 }} className="heading">
                
                <b> People Behind MINDPROBE
                </b>
                </h8>

</div>
</Row>


<Row className='person'>
      <FlipCard
        name="MUAZ IJAZ"
        role="MERN Developer"
        role1="Machine learning Engineer"
        imageSource={require('../../Assets/Muaz.jpeg')}
        role2='Portfolio'
        
      />

      <FlipCard
        name="AZEEM MANZOR"
        role="MERN Developer"
        role1="Machine learning Engineer"
        imageSource={require('../../Assets/Azeem.jpeg')}
        role2='Portfolio'
      />
      <FlipCard
        name="SARMAD WAHEED"
        role="MERN Developer"
        role1="Machine learning Engineer"
        imageSource={require('../../Assets/Sarmad.jpeg')}
        role2='Portfolio'
      />
    </Row>

     </div>      
    );
  }
  
  export default Team;