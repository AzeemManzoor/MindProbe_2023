import React from 'react';
import Navbar from '../footer/footer.js'
import Footer from '../navbar/navjs.js';
function RegisterForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div id="reg">
        <Navbar/>
      <form id="mail" action="/register" method="post" name="mail" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" className="form-control" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password" />
        </div>

        <input type="submit" className="btn btn-info" value="Register" onClick={handleSubmit} />
      </form>
      <script src="/stylesheets/validate.js"></script>
      <link rel="stylesheet" href="./stylesheets/homepage.css" />
      <Footer/>

    </div>
  );
}

export default RegisterForm;
