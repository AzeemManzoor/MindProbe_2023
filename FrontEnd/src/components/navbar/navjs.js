import React,{useState} from 'react';
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

<<<<<<< HEAD
        <li className='list1 txt'><a href="/">Home</a></li>
        <li className='list2'><button  onClick={handleButtonClick} id='click' >Assessment</button></li>
        {navbarItems.includes('REPORT') && <a href="/Assessment/report" > <li className='list3'>Report</li></a>}
        {navbarItems.includes('INSIGHTS') && <a href="/insights" > <li className='list4'>Insights</li></a>}        
        <li className='list5 txt'><a href="/about">AboutUs</a></li>
        <li className='list6 txt'><a href="/contactUs">ContactUs</a></li>
        <li className='list7 txt'><a href="/FAQ's">FAQ's</a></li>
=======
        <li><a href="/">Home</a></li>
        <li><button  onClick={handleButtonClick} id='click' >Assessment</button></li>
        {navbarItems.includes('REPORT') && <a href="/Assessment/report" > <li>Report</li></a>}
        <li><a href="/about">AboutUs</a></li>
        <li><a href="/contactUs">ContactUs</a></li>
        <li><a href="/FAQ's">FAQ's</a></li>
        <li><a href="/userprofile">UserProfile</a></li>
<li></li>
>>>>>>> 650696d460f1451c6f6d3ca3b728aca8bf50097b
{isAuthenticated && (
  <div>
<text className='list8' > 
Welcome <span className='user'>{user.name} </span>
</text>

 </div>
)}

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
    </div>  

  </nav>
  );
};

export default Navbar;
