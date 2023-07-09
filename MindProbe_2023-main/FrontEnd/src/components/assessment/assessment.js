import React, { useState } from 'react';
import questions from '../../question.json';


import{
Row,
Col,

} from "react-bootstrap";

import assessment from '../assessment/assessment.css'
import { useHref } from 'react-router-dom';


const selectRandomQuestions = (data, count) => {
  const shuffledData = [...data];
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }
  return shuffledData.slice(0, count);
};

const randomlySelectedQuestions = selectRandomQuestions(questions, 30);



const Assessment = () => {
  const [loremIpsum, setLoremIpsum] = useState('');

  const autoExpand = (event) => {
    // Add your logic for auto expanding the textarea here
  };

  return (
    <div  className='main'  >
<Row>
<div className='headT' >
<h1>Free Personality Test</h1>
<h4>By MindProbe</h4>
</div>
</Row>

<Row className='row2' >

<Col md={4} className='col' >
<div className="card   card1"  style={{ width: '18rem' }}>
      <img src="https://www.16personalities.com/static/images/test-header-2.svg" className="card-img-top1" alt="..." />
      <div className="card-body">
        <p className="card-text">
        Be yourself and answer honestly to find out your personality type.        </p>
      </div>
    </div>

</Col>


<Col className='col' md={4} >

<div className="card   card1" style={{ width: '18rem' }}>
      <img src="https://www.16personalities.com/static/images/academy/explorers/icons/theory.svg" className="card-img-top1" alt="..." />
      <div className="card-body">
        <p className="card-text">
        Learn how your personality type influences many areas of your life.        </p>
      </div>
    </div>

</Col>

<Col className='col' md={4} >

<div className="card   card1" style={{ width: '18rem' }}>
      <img src="https://www.16personalities.com/static/images/academy/analysts/exercise.svg" className="card-img-top1" alt="..." />
      <div className="card-body">
        <p className="card-text">
        Grow into the person you want to be with your optional Premium Guides.        </p>
      </div>
    </div>

</Col>
</Row>

<div className='qa'>
  {questions.map((question) => (
    <div key={question.id}>
      <Row>
        <h2 className='qs'>{question.question}</h2>
      </Row>
      <Row className='ta'>
        <div>
          <label className='label'>Your Answer</label>
          <textarea
            className='area'
            onKeyUp={autoExpand}
            placeholder="Answer"
          ></textarea>
          <div className='ac'>
            <button type='submit' className='ac-btn'>
              Submit
            </button>
          </div>
        </div>
      </Row>
    </div>
  ))}
</div>




































    </div>
  )
}

export default Assessment