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

function Home2() {

    return (
<div className='land1' >
<Row>
<div className='head3'>
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
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>AI-Powered Analysis</MDBCardTitle>
        <MDBCardText>
        Our AI analyzes your responses and predicts your personality.        </MDBCardText>
        <MDBCardLink href='#'>Learn More <h id ='st1'>→</h></MDBCardLink>
      </MDBCardBody>
    </MDBCard>

    
</Col>



<Col md={5}>

<div className='crd2' >
<MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Video Interview</MDBCardTitle>
        <MDBCardText>
        A video interview to understand your personality better.
        </MDBCardText>
        <MDBCardLink href='#'>Learn More <h id ='st1'>→</h></MDBCardLink>
      </MDBCardBody>
    </MDBCard>
    

</div>
</Col>
    </Row>


<Row  id='r4'>


<MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Detailed Report</MDBCardTitle>
        <MDBCardText>
        Get a comprehensive report of your personality.
        </MDBCardText>
        <MDBCardLink href='#'>Learn More <h id ='st1'>→</h></MDBCardLink>
      </MDBCardBody>
    </MDBCard>

</Row>

    <Button className='btn2' >
                        Try Now

                </Button>



     </div>      
    );
  }
  
  export default Home2;