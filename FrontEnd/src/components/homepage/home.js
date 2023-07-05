import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

import {Button, Col, Row } from "react-bootstrap";
import '../homepage/home.css'
function Home() {
  
    return (

      <section className='sec1' >
         <grid fluid className="home-section" id="home">
          <grid className="home-content"> 
            <Row>
              <Col md={7} className="home-header">
                <div>
                <h2 style={{ paddingTop: 50 }} className="heading">
                WELCOME TO
                </h2>
                <h1 style={{ paddingBottom: 15 }} className="heading">
                
                MIND PROBE
                </h1>
                <div style={{ padding: 10 }}>
                <h> We believe in unlocking the power of personality to transform lives and experiences. Our system  is designed to provide you with deep insights into your unique personality traits, helping you gain a better understanding of yourself and others around you
                </h></div>
                <div>
                  <a to='/register' >
                <Button className='btn1'  >  GET STARTED</Button>
                </a>
                
</div>
<div><h id='head2' ><b>Get your Personality Report now!</b> </h>
</div>
</div>
              </Col>
              
              <Col md={5} style={{  }}>
             <div id='col2'>
              <img id='img' className="img1"
                  src={require("../../Assets/img1.png")}
                  alt="add pic"
                />
                </div> 
              </Col>
  
            </Row>
           </grid>
  
  
        </grid> 
      </section>
    );
  }
  
  export default Home;