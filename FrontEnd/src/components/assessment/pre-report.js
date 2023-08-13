import React from 'react'
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import assessment from '../assessment/assessment.css';

const   Video = () => {

  const runMachineLearning = async () => {
    try {
      // Make a POST request to the Flask API endpoint
      const response = await axios.post('http://localhost:5000/api/model');
      console.log('Machine learning process completed!');
      console.log(response.data); // Log the response data

      // Process the response data or update the UI accordingly
      if (response.status === 200) {
        // Redirect to Page3
        window.location.href = '/Assessment/report';
        // '/Assessment/report';
      } else {
        // Handle error (e.g., show error message)
      }
    } catch (error) {
      console.error('Error executing machine learning process:', error);
      // Handle the error and display an error message
    }
  };


  const analysis = async () => {

    window.location.href = '/Video-assessment';

  };


  return (
    <div>

<Row className='row2'>
  <Col md={4} className='col'>
    <div className='card   card1' style={{ width: '18rem' }}>
      <img
        src='https://www.16personalities.com/static/images/test-header-2.svg'
        className='card-img-top1'
        alt='...'
      />
      <div className='card-body'>
        <p className='card-text'>
          Be yourself and answer honestly to find out your personality type.
        </p>
      </div>
    </div>
  </Col>

  <Col className='col' md={4}>
    <div className='card   card1' style={{ width: '18rem' }}>
      <img
        src='https://www.16personalities.com/static/images/academy/explorers/icons/theory.svg'
        className='card-img-top1'
        alt='...'
      />
      <div className='card-body'>
        <p className='card-text'>
          Learn how your personality type influences many areas of your life.
        </p>
      </div>
    </div>
  </Col>

  <Col className='col' md={4}>
    <div className='card   card1' style={{ width: '18rem' }}>
      <img
        src='https://www.16personalities.com/static/images/academy/analysts/exercise.svg'
        className='card-img-top1'
        alt='...'
      />
      <div className='card-body'>
        <p className='card-text'>
          Grow into the person you want to be with your optional Premium Guides.
        </p>
      </div>
    </div>
  </Col>
</Row>


<Row className='r1' >
  <h2>Do you want to use our Video Interview Feature?</h2>
</Row>




<Row  className='buttonA' >

<button  
onClick={analysis}
 className='ac-btn4'
>Go to Video Interview Page </button>

</Row>

<Row   className='buttonB'    >

<button  
onClick={ runMachineLearning}
 className='ac-btn4'
>Continue to Report Page</button>

</Row>














    </div>
  )
}

export default Video