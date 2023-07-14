import React from 'react';
import navcss from '../navbar/navcss.css'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  // const { isAuthenticated } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();


  const handleButtonClick = (event) => {
    event.preventDefault(); // Prevents the default anchor tag behavior

    if (isAuthenticated) {
      // Redirect to the ASSESSMENT page if the user is logged in
      window.location.href = '/Assessment';
    } else {
      // Redirect to the login page if the user is not logged in
      loginWithRedirect();
    }
  };






  return (
    <nav class="navbar">

    <div class="logo"> <a id='mp' href='/'> MindProbe</a></div>
    
    <ul class="nav-links">

      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

      <div class="menu">

        <li><a href="/">Home</a></li>

        <li><button  onClick={handleButtonClick} id='click' >Assessment</button></li>



        {/* <li><a href="/">Report</a></li> */}
        <li><a href="/about">About Us</a></li>
        <li><a href="/contactUs">Contact Us</a></li>
        <li><a href="/FAQ's">FAQ's</a></li>

       

{isAuthenticated && (
<text> 
Welcome <span className='user'>{user.name} </span>
</text>
)}
          { isAuthenticated ? (
            
            <li>

<button  className='loginBtn'
onClick={() => {logout({ logoutParams: { returnTo: window.location.origin } })  }}
>
Log Out
</button>
  </li>

          ) : (
                  
<li>
<button className='loginBtn' onClick={() => loginWithRedirect()} >Log In</button>
        
        </li>
         

          )}
        

       
       

      
      </div>
    </ul>
  </nav>
  );
};

export default Navbar;
