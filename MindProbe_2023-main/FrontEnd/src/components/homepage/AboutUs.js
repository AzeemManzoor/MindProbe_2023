import React from 'react';
import {Button,Col, Row } from "react-bootstrap";
import '../homepage/home.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBCardText,
    MDBCardLink
  } from 'mdb-react-ui-kit';

function Home4() {

    return (
<div className='land3' >
<Row>

<Col md={6} className='blc' >
                <h2 style={{ paddingTop: 50 }} className="heading">
                About US
                </h2>
                <h1 style={{ paddingBottom: 15 }} className="heading">
                
                MIND PROBE
                </h1>
                {/* <div style={{ padding: 10 }}>
                <h> <b> At MIND PROBE, we believe in unlocking the power of personality to transform lives and experiences. Our system  is designed to provide you with deep insights into your unique personality traits, helping you gain a better understanding of yourself and others around you. With our cutting-edge personality prediction system, you can explore different dimensions of your personality, uncover hidden strengths, and discover areas for personal growth. Join our community of individuals who are on a journey of self-discovery and personal growth. Explore your unique personality, unlock your full potential, and make meaningful connections with others who share similar traits. Discover the power of personality insights with our designed system and embark on a trans formative journey towards self-awareness and personal success.
                        Start your journey with MIND PROBE  today!
             </b> </h></div> */}
       <Row>
        <div id='st' >
       <MDBCard className='about' style={{backgroundColor:'lightgrey'}} >
      <MDBCardBody>
        <MDBCardText>
        At MIND PROBE, we believe in unlocking the power of personality to transform lives and experiences. Join our community of individuals who are on a journey of self-discovery and personal growth. Explore your unique personality, unlock your full potential, and make meaningful connections with others who share similar traits. Discover the power of personality insights with our designed system and embark on a trans formative journey towards self-awareness and personal success.
                  <span> Start your journey with MIND PROBE today!</span>
 </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </div>
        
        </Row>         
               


    </Col>





              <Col id='col3' className='blc2' md={6} style={{  }}>
              <img id='img2' className="img2"
                  src={require("../../Assets/img1.png")}
                  alt="add pic"
                />
              </Col>
  
 </Row>
    


 



     </div>      
    );
  }
  
  export default Home4;