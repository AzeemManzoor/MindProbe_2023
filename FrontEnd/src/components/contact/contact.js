import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'; 

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'process.env.service_l9mwuil';
    const templateID = 'process.env.template_7vd0cdi';
    const userID = 'process.env.BaQpd23w3Sd6itBoQ';

    emailjs
      .sendForm('service_l9mwuil',  'template_7vd0cdi', form.current, 'BaQpd23w3Sd6itBoQ')
      .then((result) => {
        console.log(result.text);
        // Reset the form values
        form.current.reset();
        alert('Your response has been sent.');
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='secc2'>
      <div className='container2'>
        <div className='text'>Contact us Form</div>
        <form ref={form} onSubmit={sendEmail}>
          <div className='form-row'>
            <div className='input-data'>
              <input type='text' required name='fname' id='fname' />
              <div className='underline'></div>
              <label htmlFor='fname'>First Name</label>
            </div>
            <div className='input-data'>
              <input type='text' required name='sname' id='sname' />
              <div className='underline'></div>
              <label htmlFor='sname'>Last Name</label>
            </div>
          </div>

          <div className='form-row'>
            <div className='input-data'>
              <input type='text' required name='email' id='email' />
              <div className='underline'></div>
              <label htmlFor='email'>Email Address</label>
            </div>
            <div className='input-data'>
              <input type='text' required name='nickname' id='nickname' />
              <div className='underline'></div>
              <label htmlFor='nickname'>Nick Name</label>
            </div>
          </div>

          <div className='form-row'>
            <div className='input-data textarea'>
              <textarea rows='8' cols='80' required name='message'></textarea>
              <br />
              <div className="underline"></div>
              <label htmlFor='message'>Write your message</label>
              <br />
              <div className="form-row submit-btn" id="subm">
                <div className='input-data'>
                  <div className='inner'></div>
                  <input id='btn' type='submit' value='Submit' />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
