import React from 'react';
import Footer from '../footer/footer'
import  Navbar from '../navbar/navjs'


function Login() {
  return (
    <div id="log">
                <Navbar/>

      <form action="/login" method="post">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value="muaxijaz@gmail.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value="12345"
          />
        </div>
        <input type="submit" className="btn btn-info" value="Login" />
      </form>
      <link rel="stylesheet" href="./stylesheets/homepage.css" />
      <Footer/>

    </div>
  );
}

export default Login;
