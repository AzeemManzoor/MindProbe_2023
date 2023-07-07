import React from 'react';

import {Button, Col, Row } from "react-bootstrap";
import '../homepage/home.css'


import Home2 from './Land1.js';
import Home3 from './Land2.js';
import Home4 from './AboutUs.js';
import Team from './team.js';


function Home() {
  
    return (
<div>
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
                  <a href="/login" >
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
      
    <Home2/>
    <Home3/>
    <Team/>
    <Home4/>
      </div>
    );
  }
  
  export default Home;