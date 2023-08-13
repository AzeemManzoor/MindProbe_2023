import React from 'react';
import {Button, Col, Row } from "react-bootstrap";
import '../homepage/home.css'

import Home2 from './Land1.js';
import Home3 from './Land2.js';
import Home4 from './AboutUs.js';
import Team from './team.js';
import video from '../../Assets/video.mp4'
import { useAuth0 } from '@auth0/auth0-react';
import VideoPlayer from "react-video-js-player"

function Home() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const handleButtonClick = () => {
    if (isAuthenticated) {
      // Redirect to the ASSESSMENT page if the user is logged in
      window.location.href = '/pre-assessment';
    } else {
      // Redirect to the login page if the user is not logged in
      loginWithRedirect();
    }
  };

    return (
<div>
      <section className='sec1' >
         <grid fluid className="home-section" id="home">
          <grid className="home-content"> 
            <Row>
              <Col md={6} className="home-header">
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
                  
                <Button className='btn1'  onClick={handleButtonClick} >  GET STARTED</Button>

                
</div>
<div><h id='head2' ><b>Get your Personality Report now!</b> </h>
</div>
</div>
              </Col>
              
              <Col md={6} style={{  }}>
             <div className='col2'>
                 <div>
      <video className='videohome'
         src={video} 
        //  src={require('../../Assets/video.mp4')}
         controls 
         muted
         preload="none"
         playsInline
         poster=''

        />

    </div>
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