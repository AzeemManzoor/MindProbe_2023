import React from 'react'
import { useState } from 'react';

import{
Row,
Col,

} from "react-bootstrap";
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import faq from '../faq/faq.css'

// import { Accordion,Card } from "react-bootstrap";

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  return (
<div className='faq' >
    <Row>


    <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
            <h1 style={{color: '#5469d4'}} >Frequently Asked Questions</h1>
          </div>


    </Row>
    <div className='accf' >
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button  
            className={`accordion-button ${activeAccordion === 0 ? '' : 'collapsed'}`}
            type="button"
            onClick={() => toggleAccordion(0)}
            aria-expanded={activeAccordion === 0 ? 'true' : 'false'}
            aria-controls="flush-collapseOne"
          >
            How does the personality prediction test work?
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className={`accordion-collapse collapse ${activeAccordion === 0 ? 'show' : ''}`}
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
          The personality prediction test uses a series of carefully designed questions to analyze various aspects of your personality and provide predictions based on established psychological theories.          
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className={`accordion-button ${activeAccordion === 1 ? '' : 'collapsed'}`}
            type="button"
            onClick={() => toggleAccordion(1)}
            aria-expanded={activeAccordion === 1 ? 'true' : 'false'}
            aria-controls="flush-collapseTwo"
          >
            Is the personality prediction test based on scientific research?
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className={`accordion-collapse collapse ${activeAccordion === 1 ? 'show' : ''}`}
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
          Yes, the personality prediction test is based on scientific research and validated psychometric principles.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className={`accordion-button ${activeAccordion === 2 ? '' : 'collapsed'}`}
            type="button"
            onClick={() => toggleAccordion(2)}
            aria-expanded={activeAccordion === 2 ? 'true' : 'false'}
            aria-controls="flush-collapseThree"
          >
          Can I trust the accuracy of the personality predictions?

          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className={`accordion-collapse collapse ${activeAccordion === 2 ? 'show' : ''}`}
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
          While the predictions are based on data-driven algorithms, it's important to remember that they are estimations and should be interpreted with an open mind.
          </div>
        </div>
      </div>


      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className={`accordion-button ${activeAccordion === 3 ? '' : 'collapsed'}`}
            type="button"
            onClick={() => toggleAccordion(3)}
            aria-expanded={activeAccordion === 3 ? 'true' : 'false'}
            aria-controls="flush-collapseOne"
          >
            How long does it take to complete the personality prediction test?

          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className={`accordion-collapse collapse ${activeAccordion === 3 ? 'show' : ''}`}
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
          The time to complete the personality prediction test varies, actually depends upon yourself, but it typically takes around 10-15 minutes.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className={`accordion-button ${activeAccordion === 4 ? '' : 'collapsed'}`}
            type="button"
            onClick={() => toggleAccordion(4)}
            aria-expanded={activeAccordion === 4 ? 'true' : 'false'}
            aria-controls="flush-collapseOne"
          >
           What kind of information is required to take the personality prediction test?

          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className={`accordion-collapse collapse ${activeAccordion === 4 ? 'show' : ''}`}
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
          The test requires you to answer questions about your, interests behavior, preferences, attitudes and little bit personal information.
          </div>
        </div>
      </div>






      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className={`accordion-button ${activeAccordion === 5 ? '' : 'collapsed'}`}
            type="button"
            onClick={() => toggleAccordion(5)}
            aria-expanded={activeAccordion === 5 ? 'true' : 'false'}
            aria-controls="flush-collapseOne"
          >
          Can I retake the personality prediction test multiple times?


          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className={`accordion-collapse collapse ${activeAccordion === 5 ? 'show' : ''}`}
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
          Yes, you can retake the personality prediction test if you wish to obtain different predictions or reassess your personality traits.
          </div>
        </div>
      </div>






      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className={`accordion-button ${activeAccordion === 6 ? '' : 'collapsed'}`}
            type="button"
            onClick={() => toggleAccordion(6)}
            aria-expanded={activeAccordion === 6 ? 'true' : 'false'}
            aria-controls="flush-collapseOne"
          >
            Will my personal information be kept confidential?
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className={`accordion-collapse collapse ${activeAccordion === 6 ? 'show' : ''}`}
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
          We prioritize the privacy and confidentiality of our users. Your personal information is securely stored and not shared with any third parties.
          </div>
        </div>
      </div>



      <div className="accordion-item">
        <h2  className="accordion-header" id="flush-headingTwo">
          <button
             className={`accordion-button ${activeAccordion === 10 ? '' : 'collapsed'}`}
            type="button"
            onClick={() => toggleAccordion(10)}
            aria-expanded={activeAccordion === 10 ? 'true' : 'false'}
            aria-controls="flush-collapseTwo"
          >
How does the video analysis feature work?
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className={`accordion-collapse collapse ${activeAccordion === 10 ? 'show' : ''}`}
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body"  >
          Our video analysis feature utilizes advanced technology to analyze facial expressions, emotions, and motion gestures.It then provides insights into your emotional expressions and body language based on the analysis.          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className={`accordion-button ${activeAccordion === 7 ? '' : 'collapsed'}`}
            type="button"
            onClick={() => toggleAccordion(7)}
            aria-expanded={activeAccordion === 7 ? 'true' : 'false'}
            aria-controls="flush-collapseOne"
          >
          How can I register an account on the website?

          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className={`accordion-collapse collapse ${activeAccordion === 7 ? 'show' : ''}`}
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
          To register an account, simply click on the "Get Started" button on our website and follow the instructions to create your account.
          </div>
        </div>
      </div>





      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className={`accordion-button ${activeAccordion === 8 ? '' : 'collapsed'}`}
            type="button"
            onClick={() => toggleAccordion(8)}
            aria-expanded={activeAccordion === 8 ? 'true' : 'false'}
            aria-controls="flush-collapseOne"
          >
How can I contact the support team if I have any questions or issues?
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className={`accordion-collapse collapse ${activeAccordion === 8 ? 'show' : ''}`}
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
          If you have any questions, concerns, or need assistance, you can reach out to our support team through the ContactUs form provided on our website and Navbar. We'll be happy to assist you.          </div>
        </div>
      </div>



      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className={`accordion-button ${activeAccordion === 9 ? '' : 'collapsed'}`}
            type="button"
            onClick={() => toggleAccordion(9)}
            aria-expanded={activeAccordion === 9 ? 'true' : 'false'}
            aria-controls="flush-collapseOne"
          >
What are the Aims and benifits of MindProbe?
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className={`accordion-collapse collapse ${activeAccordion === 9 ? 'show' : ''}`}
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
          MindProbe allows you to explore your unique personality, unlock your full potential, save and access your test results, track your progress, and receive personalized recommendations.        </div>
      </div>


















    </div>


    </div>


    </div>
    </div>
  );
};


export default Faq

