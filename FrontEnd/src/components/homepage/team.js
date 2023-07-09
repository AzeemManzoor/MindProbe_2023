import React from 'react';
import {Col, Row } from "react-bootstrap";
import '../homepage/home.css'
import {
    MDBCardImage,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
  
  } from 'mdb-react-ui-kit';

function Team() {

    return (
<div className='team' >
<Row>
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

<Col md={4} > 
<MDBCard >
      <MDBCardBody>
      <MDBCardImage className='cir1' src={require('../../Assets/Muaz.jpeg')} position='top' alt='...' />
        <MDBCardTitle>Ch Muaz Ijaz</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
</Col>

<Col md={4} > 
<MDBCard>
      <MDBCardBody>
      <MDBCardImage className='cir1'  src={require("../../Assets/Azeem.jpeg")} position='top' alt='...' />

        <MDBCardTitle>Azeem Manzoor</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>


</Col>


<Col md={4} > 
<MDBCard>
      <MDBCardBody>
      <MDBCardImage className='cir1'  src={require("../../Assets/Sarmad.jpeg")} position='top' alt='...' />

        <MDBCardTitle>Sarmad Waheed</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
</Col>
  </Row>

    {/* <Button className='btn2' >
                        Try Now

                </Button> */}



     </div>      
    );
  }
  
  export default Team;