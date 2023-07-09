import React from 'react';
import reg from './reg.css'
function SignUpForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };
  return (
    <div className="container1">
      <div className='secc'>
      <div className="card">
        <div className="card-image">
          <h2 className="card-heading">
            Get started
            <small>Let us create your account</small>
          </h2>
        </div>
        <form action="/register" method="post" name="mail" onSubmit={handleSubmit} id="stripe-login" className="card-form">
          <div className="input">
            <input type="text" className="input-field" required />
            <label className="input-label">Full name</label>
          </div>
          <div className="input">
            <input type="text" className="input-field"  required />
            <label className="input-label">Email</label>
          </div>
          <div className="input" id='input2' >
            <input type="password" className="input-field" id='input-field2' required />
            <span className="Eicon"></span>
            <label className="input-label">Password</label>
          </div>
          <div className="action">
            <button  type="submit" className="action-button" 
            // onClick={handleSubmit} 
            >Get started</button>
          </div>
        </form>
        <div className="card-info">
          <p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default SignUpForm;
