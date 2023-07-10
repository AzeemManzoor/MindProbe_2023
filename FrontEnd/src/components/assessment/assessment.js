import React, { useState }from 'react';
import questions from '../../question.json';
import{
Row,
Col,

} from "react-bootstrap";

import assessment from '../assessment/assessment.css'
const selectRandomQuestions = (data, count) => {
  const shuffledData = [...data];
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }
  return shuffledData.slice(0, count);
};

const firstTenQuestions = questions.slice(0, 20);
const shuffledQuestions = selectRandomQuestions(firstTenQuestions, 6);

console.log(shuffledQuestions);



const Assessment = () => {
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
<Row>
<div className='newHead ' >
<h2>SECTION A</h2>
{/* <h4>By MindProbe</h4> */}
</div>
</Row>



<div className='qa'>
  {shuffledQuestions.map((question) => (
    <div key={question.id}>
      <Row>
        <h5 className='qs'> {question.question}</h5>
      </Row>
      <Row className='ta'>
        <div>
          <label className='label'>Your Answer</label>
          <form action="/store" method="POST">
          <textarea  id="textareaValue" name="textareaValue" required
            className='area'
            placeholder="Answer"
          ></textarea>
          <div className='ac'>
            <input type='submit' className='ac-btn' value='Submit' />
              {/* Submit */}
            {/* </input > */}
                        {/* <input type='submit' className='ac-btn' value="Submit"><input/> */}

          </div>
          </form>
        </div>
      </Row>


    </div>
  ))}


<Row>
  <div  className="btn-div">
<a href='/Assessment/Page2'> <button  type="submit" className="ac-btn2"
            // onClick={handleSubmit} 
            >Continue to Next Page</button></a>
</div>

</Row>
</div>




































    </div>
  )
}

export default Assessment