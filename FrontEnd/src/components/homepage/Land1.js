import React from 'react';
import {Button,Col, Row } from "react-bootstrap";
import '../homepage/home.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardLink
  } from 'mdb-react-ui-kit';
  import { useAuth0 } from '@auth0/auth0-react';

function Home2() {
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
<div className='land1' >
<Row className='yup' >
<div >
                <h3 style={{ paddingTop: 50 }} className="heading">
                OUR FEATURES
                </h3>
                <h8 style={{ paddingBottom: 15 }} className="heading">
                
                <b> Explore the unique features of MINDPROBE
                </b>
                </h8>

</div>
</Row>
 
    <Row id='r3' >

<Col md={5} >
    <MDBCard className='blog_card' >
      <MDBCardBody>
        <MDBCardTitle>AI-Powered Analysis</MDBCardTitle>
        <MDBCardText>
        Our AI analyzes your responses and predicts your personality.        </MDBCardText>
        <MDBCardLink href='/blog/Ai-powered-analysis'>Learn More <h id ='st1'>→</h></MDBCardLink>
      </MDBCardBody>
    </MDBCard>

    
</Col>



<Col md={5}>

<div className='crd2' >
<MDBCard className='blog_card' >
      <MDBCardBody>
        <MDBCardTitle>Video Interview</MDBCardTitle>
        <MDBCardText>
        A video interview to understand your personality better.
        </MDBCardText>
        <MDBCardLink href='blog/Video-interview'>Learn More <h id ='st1'>→</h></MDBCardLink>
      </MDBCardBody>
    </MDBCard>
    

</div>
</Col>
    </Row>


<Row  id='r4'>


<MDBCard className='blog_card33' >
      <MDBCardBody>
        <MDBCardTitle>Detailed Report</MDBCardTitle>
        <MDBCardText>
        Get a comprehensive report of your personality.
        </MDBCardText>
        <MDBCardLink href='/blog/Detailed-report'>Learn More <h id ='st1'>→</h></MDBCardLink>
      </MDBCardBody>
    </MDBCard>

</Row>

   <Button className='btn2'  onClick={handleButtonClick}  >
                        Try Now

                </Button>



     </div>      
    );
  }
  
  export default Home2;