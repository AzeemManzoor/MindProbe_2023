import React from 'react'
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

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








  return (
    <div>


<Row>
  <h2>Do you want to use our Video Interview Feature?</h2>
</Row>




<Row>

<a  href='/Video-assessment' ><button  
 className='ac-btn3'
>Go to Video Analysis Page</button></a>

</Row>

<Row>

<button  
onClick={ runMachineLearning}
 className='ac-btn3'
>Continue to Report Page</button>

</Row>















    </div>
  )
}

export default Video