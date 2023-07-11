
// import React, { useState,useEffect } from 'react';
// import axios from 'axios';
// import questions from '../../question.json';
// import {
//   Row,
//   Col,
// } from 'react-bootstrap';

// import assessment from '../assessment/assessment.css';

// const selectRandomQuestions = (data, count) => {
//   const shuffledData = [...data];
//   for (let i = shuffledData.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
//   }
//   return shuffledData.slice(0, count);
// };

// const firstTenQuestions = questions.slice(21, 40);
// const shuffledQuestions = selectRandomQuestions(firstTenQuestions, 6);

// console.log(shuffledQuestions);

// const Test2 = () => {
//   const [answers, setAnswers] = useState([]);
//   const [userId, setUserId] = useState('');

//   useEffect(() => {
//     // Check if user ID exists in session storage
//     const storedUserId = sessionStorage.getItem('userId');
//     if (storedUserId) {
//       setUserId(storedUserId);
//     } else {
//       // Fetch user ID from the server
//       axios
//         .get('http://localhost:4000/userId')
//         .then((response) => {
//           const generatedUserId = response.data.userId;
//           setUserId(generatedUserId);
//           // Store user ID in session storage
//           sessionStorage.setItem('userId', generatedUserId);
//         })
//         .catch((error) => {
//           console.error('Failed to generate user ID', error);
//         });
//     }
//   }, []);







//   const handleSubmit = async () => {
//     const emptyFields = shuffledQuestions.filter((_, index) => !answers[index]);

//     if (emptyFields.length > 0) {
//       alert('Please fill in all the fields.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:4000/answer', { answers });

//       if (response.status === 200) {
//         // Handle success (e.g., show success message, redirect, etc.)
//       } else {
//         // Handle error (e.g., show error message)
//       }
//     } catch (error) {
//       // Handle error (e.g., show error message)
//     }
//   };

//   return (
//     <div className='main'>
//       <Row>
//         <div className='headT'>
//           <h1>Free Personality Test</h1>
//           <h4>By MindProbe</h4>
//         </div>
//       </Row>

//       <Row className='row2'>
//         <Col md={4} className='col'>
//           <div className='card   card1' style={{ width: '18rem' }}>
//             <img src="https://www.16personalities.com/static/images/test-header-2.svg" className="card-img-top1" alt="..." />
//             <div className="card-body">
//               <p className="card-text">
//                 Be yourself and answer honestly to find out your personality type.
//               </p>
//             </div>
//           </div>
//         </Col>

//         <Col className='col' md={4}>
//           <div className="card   card1" style={{ width: '18rem' }}>
//             <img src="https://www.16personalities.com/static/images/academy/explorers/icons/theory.svg" className="card-img-top1" alt="..." />
//             <div className="card-body">
//               <p className="card-text">
//                 Learn how your personality type influences many areas of your life.
//               </p>
//             </div>
//           </div>
//         </Col>

//         <Col className='col' md={4}>
//           <div className="card   card1" style={{ width: '18rem' }}>
//             <img src="https://www.16personalities.com/static/images/academy/analysts/exercise.svg" className="card-img-top1" alt="..." />
//             <div className="card-body">
//               <p className="card-text">
//                 Grow into the person you want to be with your optional Premium Guides.
//               </p>
//             </div>
//           </div>
//         </Col>
//       </Row>

//       <Row>
//         <div className='newHead '>
//           <h2>SECTION A</h2>
//           {/* <h4>By MindProbe</h4> */}
//         </div>
//       </Row>

//       <div className='qa'>
//       <form  id="myForm">
//         {shuffledQuestions.map((question, index) => (
//           <div key={question.id}>
//             <Row>
//               <h5 className='qs'> {question.question}</h5>
//             </Row>
//             <Row className='ta'>
//               <div>
//                 <label className='label'>Your Answer</label>
//                 <textarea
//                   id={`textareaValue${index}`}
//                   required
//                   className='area'
//                   placeholder='Answer'
//                   onChange={(e) => {
//                     const updatedAnswers = [...answers];
//                     updatedAnswers[index] = e.target.value;
//                     setAnswers(updatedAnswers);
//                   }}
//                 ></textarea>
               
//                </div>
              
//                </Row>
               
//           </div>
// ))}
//         <input
//                       id='submitButton'
//                       value=' Submit'
//                       type='submit'
//                       className='ac-btn'
//                       onClick={handleSubmit}
//                       />
//                       {/* SUBMIT
//                       <button/> */}
//                       </form>
//       </div>
//       <Row>
//         <div className="btn-div">
//         <a href='/Assessment/Page3'> <button  type="submit" className="ac-btn2"
//             // onClick={handleSubmit} 
//             >Continue to Next Page</button></a>
//         </div>
//       </Row>
//     </div>
//   );
// };

// export default Test2;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import questions from '../../question.json';
// import { Row, Col } from 'react-bootstrap';

// import assessment from '../assessment/assessment.css';

// const selectRandomQuestions = (data, count) => {
//   const shuffledData = [...data];
//   for (let i = shuffledData.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
//   }
//   return shuffledData.slice(0, count);
// };

// const firstTenQuestions = questions.slice(21, 40);
// const shuffledQuestions = selectRandomQuestions(firstTenQuestions, 6);

// console.log(shuffledQuestions);

// const Test2 = () => {
//   const [answers, setAnswers] = useState([]);
//   const { userId } = useParams();

//   useEffect(() => {
//     const storedUserId = sessionStorage.getItem('userId');
//     if (storedUserId) {
//       setAnswers(storedUserId);
//     } else {
//       axios
//         .get('http://localhost:4000/userId')
//         .then((response) => {
//           const generatedUserId = response.data.userId;
//           setAnswers(generatedUserId);
//           sessionStorage.setItem('userId', generatedUserId);
//         })
//         .catch((error) => {
//           console.error('Failed to generate user ID', error);
//         });
//     }
//   }, []);

//   const handleSubmit = async () => {
//     const emptyFields = shuffledQuestions.filter((_, index) => !answers[index]);

//     if (emptyFields.length > 0) {
//       alert('Please fill in all the fields.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:4000/answer', {
//         userId,
//         answers,
//       });

//       if (response.status === 200) {
//         // Handle success (e.g., show success message, redirect, etc.)
//       } else {
//         // Handle error (e.g., show error message)
//       }
//     } catch (error) {
//       // Handle error (e.g., show error message)
//     }
//   };

//   return (
//     <div className='main'>
//       <Row>
//         <div className='headT'>
//           <h1>Free Personality Test</h1>
//           <h4>By MindProbe</h4>
//         </div>
//       </Row>

//       <Row className='row2'>
//         <Col md={4} className='col'>
//           <div className='card   card1' style={{ width: '18rem' }}>
//             <img
//               src='https://www.16personalities.com/static/images/test-header-2.svg'
//               className='card-img-top1'
//               alt='...'
//             />
//             <div className='card-body'>
//               <p className='card-text'>
//                 Be yourself and answer honestly to find out your personality type.
//               </p>
//             </div>
//           </div>
//         </Col>

//         <Col className='col' md={4}>
//           <div className='card   card1' style={{ width: '18rem' }}>
//             <img
//               src='https://www.16personalities.com/static/images/academy/explorers/icons/theory.svg'
//               className='card-img-top1'
//               alt='...'
//             />
//             <div className='card-body'>
//               <p className='card-text'>
//                 Learn how your personality type influences many areas of your life.
//               </p>
//             </div>
//           </div>
//         </Col>

//         <Col className='col' md={4}>
//           <div className='card   card1' style={{ width: '18rem' }}>
//             <img
//               src='https://www.16personalities.com/static/images/academy/analysts/exercise.svg'
//               className='card-img-top1'
//               alt='...'
//             />
//             <div className='card-body'>
//               <p className='card-text'>
//                 Grow into the person you want to be with your optional Premium Guides.
//               </p>
//             </div>
//           </div>
//         </Col>
//       </Row>

//       <Row>
//         <div className='newHead '>
//           <h2>SECTION A</h2>
//         </div>
//       </Row>

//       <div className='qa'>
//         <form id='myForm'>
//           {shuffledQuestions.map((question, index) => (
//             <div key={question.id}>
//               <Row>
//                 <h5 className='qs'>{question.question}</h5>
//               </Row>
//               <Row className='ta'>
//                 <div>
//                   <label className='label'>Your Answer</label>
//                   <textarea
//                     id={`textareaValue${index}`}
//                     required
//                     className='area'
//                     placeholder='Answer'
//                     onChange={(e) => {
//                       const updatedAnswers = [...answers];
//                       updatedAnswers[index] = e.target.value;
//                       setAnswers(updatedAnswers);
//                     }}
//                   ></textarea>
//                 </div>
//               </Row>
//             </div>
//           ))}
//           <input
//             id='submitButton'
//             value='Submit'
//             type='submit'
//             className='ac-btn'
//             onClick={handleSubmit}
//           />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Test2;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import questions from '../../question.json';
import { Row, Col } from 'react-bootstrap';

import assessment from '../assessment/assessment.css';

const selectRandomQuestions = (data, count) => {
  const shuffledData = [...data];
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }
  return shuffledData.slice(0, count);
};

const firstTenQuestions = questions.slice(21, 40);
const shuffledQuestions = selectRandomQuestions(firstTenQuestions, 6);

console.log(shuffledQuestions);

const Test2 = () => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // Fetch the user ID from the server
    axios
      .get('http://localhost:4000/userId')
      .then((response) => {
        const userId = response.data.userId;
        // Save the user ID in session storage
        sessionStorage.setItem('userId', userId);
      })
      .catch((error) => {
        console.error('Failed to fetch user ID', error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emptyFields = shuffledQuestions.filter((_, index) => !answers[index]);

    if (emptyFields.length > 0) {
      alert('Please fill in all the fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/answer', {
        userId: sessionStorage.getItem('userId'),
        answers,
      });

      if (response.status === 200) {
        // Redirect to Test3 page
        window.location.href = '/Assessment/Page3';
      } else {
        // Handle error (e.g., show error message)
      }
    } catch (error) {
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className='main'>
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
          <h2>SECTION A</h2>
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
                    required
                    className='area'
                    placeholder='Answer'
                    onChange={(e) => {
                      const updatedAnswers = [...answers];
                      updatedAnswers[index] = e.target.value;
                      setAnswers(updatedAnswers);
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
    </div>
  );
};

export default Test2;
