import React,{useState} from 'react';
import {Col, Row } from "react-bootstrap";
import '../homepage/home.css'
import '../homepage/team.css'



function Team() {


    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleCardClick = () => {
      setIsFlipped(!isFlipped);
    };
  
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

  <Row className='person' >

<Col md={4} id='align'> 
<div >
<div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}  id='cir1' >
      <div className="flip-card-inner ">
        <div className="flip-card-front">
          <img className="image"  src={require('../../Assets/Muaz.jpeg')} alt=""/>
        </div>
        <div className="flip-card-back">
          <div className="content">
            <h3>MUAZ IJAZ</h3>
            <p>MERN Developer</p>
            <div className="social-links">
              <a className="social-link" href="https://www.facebook.com">Facebook</a>
              <a className="social-link" href="https://www.github.com">LinkedIn</a>
              <a className="social-link" href="https://www.github.com">GitHub</a>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</Col>

<Col md={4} id='align' > 

<div className= {`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="image"  src={require('../../Assets/Azeem.jpeg')} alt="" />
        </div>
        <div className="flip-card-back">
          <div className="content">
            <h3>AZEEM MANZOR</h3>
            <p>MERN Developer</p>
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


<Col md={4} id='align' > 
 <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="image"  src={require('../../Assets/Sarmad.jpeg')} alt=""/>
        </div>
        <div className="flip-card-back">
          <div className="content">
            <h3>SARMAD WAHEED</h3>
            <p>MERN Developer</p>
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
  </Row>


     </div>      
    );
  }
  
  export default Team;