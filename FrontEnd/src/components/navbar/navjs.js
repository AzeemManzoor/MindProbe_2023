import React from 'react';
import navcss from '../navbar/navcss.css'

const Navbar = () => {
  return (
    <nav class="navbar">

    <div class="logo">MindProbe</div>
    
    <ul class="nav-links">

      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

      <div class="menu">

        <li><a href="/">Home</a></li>
        <li><a href="/">Assessment</a></li>
        <li><a href="/">Report</a></li>
        <li><a href="/">Help Section</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Contact Us</a></li>
       

      
      </div>
    </ul>
  </nav>
  );
};

export default Navbar;
