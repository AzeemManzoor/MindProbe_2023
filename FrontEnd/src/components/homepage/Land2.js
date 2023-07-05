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

function Home3() {

    return (
<div className='test' >
<Row>
<div className='head3'>
                <h3 style={{ paddingTop: 50 }} className="heading">
                Testimonials
                </h3>
                <h8 style={{ paddingBottom: 15 }} className="heading">
                
                <b> See what our users have to say


                </b>
                </h8>

</div>
</Row>
 
    <Row id='r3' >

<Col md={5} >
    <MDBCard>
      <MDBCardBody>
      <MDBCardImage className='crdimg1' src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
        <MDBCardTitle>Shebi YT</MDBCardTitle>
        <MDBCardText>
        AHAHAHAHAHA ......AHAHAHHA KI B**D MAAR LAII XDXD        </MDBCardText>
        <MDBCardLink href='#'>Learn More <h id ='st1'>→</h></MDBCardLink>
      </MDBCardBody>
    </MDBCard>

    
</Col>



<Col md={5}>

<div className='crd2' >

<MDBCard>
      <MDBCardBody>
      <MDBCardImage className='crdimg1' src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
        <MDBCardTitle>Shebi YT</MDBCardTitle>
        <MDBCardText>
        AHAHAHAHAHA ......AHAHAHHA KI B**D MAAR LAII XDXD        </MDBCardText>
        <MDBCardLink href='#'>Learn More <h id ='st1'>→</h></MDBCardLink>
      </MDBCardBody>
    </MDBCard>

</div>
</Col>
    </Row>


<Row  id='r3'>

<Col md={5} >
    <MDBCard>
      <MDBCardBody>
      <MDBCardImage className='crdimg1' src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
        <MDBCardTitle>Shebi YT</MDBCardTitle>
        <MDBCardText>
        AHAHAHAHAHA ......AHAHAHHA KI B**D MAAR LAII XDXD        </MDBCardText>
        <MDBCardLink href='#'>Learn More <h id ='st1'>→</h></MDBCardLink>
      </MDBCardBody>
    </MDBCard>

    
</Col>



<Col md={5}>

<div className='crd2' >

<MDBCard>
      <MDBCardBody>
      <MDBCardImage className='crdimg1' src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
        <MDBCardTitle>Shebi YT</MDBCardTitle>
        <MDBCardText>
        AHAHAHAHAHA ......AHAHAHHA KI B**D MAAR LAII XDXD        </MDBCardText>
        <MDBCardLink href='#'>Learn More <h id ='st1'>→</h></MDBCardLink>
      </MDBCardBody>
    </MDBCard>

</div>
</Col>
    

</Row>
<Row className='mo' >
    <Button className='btn3' >
                        Try Now

                </Button>


                </Row>
     </div>      
    );
  }
  
  export default Home3;