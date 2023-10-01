import React, { useState, useEffect } from 'react';
import axios from 'axios';
import questions from '../../question.json';
import { Row, Col } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react'; // Import the useAuth0 hook
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import assessment from '../assessment/assessment.css';

const selectRandomQuestions = (data, count) => {
  const shuffledData = [...data];
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }
  return shuffledData.slice(0, count);
};

const secondTenQuestions = questions.slice(80, 100);
const shuffledQuestions = selectRandomQuestions(secondTenQuestions, 6);

console.log(shuffledQuestions);



const Test5 = () => {
  const [answers, setAnswers] = useState([]);
  const { user } = useAuth0(); // Get the authenticated user information from useAuth0

  useEffect(() => {
    // Fetch the user ID from the server
    axios
      .get('http://localhost:4000/userId', {
        params: { username: user?.email }, // Pass the username as a query parameter
      })
      .then((response) => {
        const userId = response.data.userId;
        // Save the user ID in session storage
        sessionStorage.setItem('userId', userId);
      })
      .catch((error) => {
        console.error('Failed to fetch user ID', error);
      });
  }, [user]);



  const handleSubmit = async (e) => {
    e.preventDefault();

    const emptyFields = shuffledQuestions.filter((_, index) => !answers[index]);

    if (emptyFields.length > 0) {
      toast.warn('Please fill in all the fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/answer', {
        userId: sessionStorage.getItem('userId'),
        Name: sessionStorage.getItem('Name'),
        Picture:sessionStorage.getItem('Picture'),
        answers,
      });

      if (response.status === 200) {
        // Redirect to Page3
        // window.location.href = '/Assessment/Page5';
        toast.success('Congratulations! You have completed the assessment. Now click on the Submission Button.');
        setIsDisabled(true);


      } else {
        // Handle error (e.g., show error message)
      }
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

 
  const [text, setText] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const Change = (event) => {
    setText(event.target.value);
  };



  return (
    <div className='main'>
      <ToastContainer />
<Row>
  <div className='headT'>
    <h1>Free Personality Test</h1>
    <h4>By MindProbe</h4>
  </div>
</Row>

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

<Row>
  <div className='newHead '>
    <h2>SECTION E</h2>
  </div>
</Row>

<div className='qa'>
  <form id='myForm'>
    {shuffledQuestions.map((question, index) => (
      <div key={question.id}>
        <Row>
          <h5 className='qs'>{question.question}</h5>
        </Row>
        <Row className='ta'>
          <div>
            <label className='label'>Your Answer</label>
            <textarea
              id={`textareaValue${index}`}
              disabled={isDisabled}
              required
              className='area'
              placeholder='Answer'
              onChange={(e) => {
                const updatedAnswers = [...answers];
                updatedAnswers[index] = e.target.value;
                setAnswers(updatedAnswers);
                setText(e.target.value);
              }}
            ></textarea>
          </div>
        </Row>
      </div>
    ))}
    <input
      id='submitButton'
      value='Submit'
      type='submit'
      className='ac-btn'
      onClick={handleSubmit}
    />
  </form>
</div>


<div  className="btn-div">
<a href='/pre-report' > <button  type="submit" className="ac-btn2"
>Submission</button></a>
</div> 
</div>
  );
};

export default Test5;
