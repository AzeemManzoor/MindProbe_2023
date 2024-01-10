import React from 'react';
import { 
    MDBFooter,
    MDBContainer,
    MDBIcon, MDBRow, MDBCol, 
    MDBBtn} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
       <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon color='secondary' icon='gem' className='me-3' />
              MindProbe
            </h6>
            <p>
            At MIND PROBE, we believe in unlocking the power of personality to transform lives and experiences.
            Start your journey with MIND PROBE  today!
            </p>
          </MDBCol>

          <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
            <p>
              <a href='' className='text-reset'>
                Assessment
              </a>
            </p>
            <p>
              <a href='' className='text-reset'>
                Report
              </a>
            </p>
            <p>
              <a href='' className='text-reset'>
                Insights
              </a>
            </p>
          
          </MDBCol>

          <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Socials</h6>
            <p>
              <a href='' className='text-reset'>
                facebook
              </a>
            </p>
            <p>
              <a href='' className='text-reset'>
                Instagram
              </a>
            </p>
            <p>
              <a href='' className='text-reset'>
                Twitter
              </a>
            </p>
            <p>
              <a href='' className='text-reset'>
                Github
              </a>
            </p>
          </MDBCol>

          <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon color='secondary' icon='home' className='me-2' />
              Model town, Lahore
            </p>
            <p>
              <MDBIcon color='secondary' icon='envelope' className='me-3' />mindprobepredict@gmail
            </p>
            <p>
              <MDBIcon color='secondary' icon='phone' className='me-3' /> +92 0000000000
            </p>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
      <div className='text-center text-dark p-3' style={{ backgroundColor: '#009688' }}>
        © 2024 Copyright:
        <a className='text-dark' href='https://mindprobe.com/'>
          MindProbe.com
        </a>
      </div>
    </MDBFooter>
  );
}
