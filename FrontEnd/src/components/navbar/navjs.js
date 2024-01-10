import React,{useState,useRef} from 'react';
import navcss from '../navbar/navcss.css'
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import {useEffect} from 'react';
import { useNavbar } from './NavbarContext';



const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();


  const handleButtonClick = (event) => {
    event.preventDefault(); // Prevents the default anchor tag behavior

    if (isAuthenticated) {
      // Redirect to the ASSESSMENT page if the user is logged in
      window.location.href = '/pre-assessment';
    } else {
      // Redirect to the login page if the user is not logged in
      loginWithRedirect();
    }
  };


const { navbarItems,  addNavbarItem } = useNavbar();
useEffect(() => {
  const fetchData = async () => {
    if (isAuthenticated && user && user.email) {
      // console.log('Logged-in userId:', user.name);
// console.log(user.picture)
      try {
        const response = await axios.get('http://localhost:4000/personalityTypes');
        // console.log('API Response:', response.data);

        const matchingUser = response.data.find((data) => data.userId === user.email
        
        );
        if (matchingUser) {
          addNavbarItem(matchingUser.PERSONALITY_TYPE);
        } else {
          console.log('Personality type not found for the logged-in user.');
        }
      } catch (error) {
        console.log('Error fetching personality type:', error);
      }
    }
  };

  fetchData();
}, [isAuthenticated, user, addNavbarItem]);








return (
    <nav class="navbar">

    <div class="logo"> <a id='mp' href='/'> MindProbe</a></div>
    <div class="navbar-container">
    <ul class="nav-links">

      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

      <div class="menu">

        <li className='list1 txt'><a href="/">Home</a></li>
        <li className='list2'><button  onClick={handleButtonClick} id='click' >Assessment</button></li>
        {navbarItems.includes('REPORT') && <a href="/Assessment/report" > <li className='list3'>Report</li></a>}
        {navbarItems.includes('INSIGHTS') && <a href="/insights" > <li className='list4'>Insights</li></a>} 
<div class="dropdown">
        <li class="dropdown-button list1">Contact</li>
        <div class="dropdown-menu">
        <div class="dropdown-menu-item"><a href="/contactUs">ContactUs</a></div>
        <div class="dropdown-menu-item"><a href="/about">AboutUs</a></div>
        </div>
</div>





    {isAuthenticated && (
  <div>
        <li className='flist txt'><a href="/Community">Community</a></li> 
 </div>
)}




{ isAuthenticated ? (      
<li className='txt'><a href="/FAQ's">FAQ's</a></li>
          ) : (            
<li className='list7 txt'><a href="/FAQ's">FAQ's</a></li>
          )}


<div className='gapi'>
{isAuthenticated && (
<text 
  className='usersname'
  > 
Welcome <span className='user'>{user.name} </span>
</text>
)}
</div>




{isAuthenticated && (
  <div className='image' >
 <a href="/profile"><img className='picture' src={user.picture} ></img></a> 
 </div>
)}


          { isAuthenticated ? (
            
            <li>
<button  className='loginBtn'
onClick={() => logout({logoutParams: { returnTo: window.location.origin } })}
>
Sign Out
</button>
  </li>

          ) : (            
<li>
<button className='loginBtn' onClick={() => loginWithRedirect()} >Sign In</button>      
        </li>
          )}
      </div>
    </ul>
    </div>  

  </nav>
  );
};

export default Navbar;
