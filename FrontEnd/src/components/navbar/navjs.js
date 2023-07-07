import React from 'react';
import navcss from '../navbar/navcss.css'

const Navbar = () => {
  return (
    <nav class="navbar">

    <div class="logo"> <a id='mp' href='/'> MindProbe</a></div>
    
    <ul class="nav-links">

      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

      <div class="menu">

        <li><a href="/">Home</a></li>
        <li><a href="/">Assessment</a></li>
        <li><a href="/">Report</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contactUs">Contact Us</a></li>
        <li><a href="/FAQ's">FAQ's</a></li>

       

      
      </div>
    </ul>
  </nav>
  );
};

export default Navbar;
