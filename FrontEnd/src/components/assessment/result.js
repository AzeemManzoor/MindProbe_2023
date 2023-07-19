import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import {Button, Col, Row } from "react-bootstrap";
import assessment from '../assessment/assessment.css';


import { useNavbar } from '../navbar/NavbarContext';





const Result = () => {
  const { user, isAuthenticated } = useAuth0();
  const [personalityType, setPersonalityType] = useState('');

  const { addNavbarItem } = useNavbar();




  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated && user && user.name) {
        console.log('Logged-in userId:', user.name); // Log the logged-in user's userId

        try {
          const response = await axios.get('http://localhost:4000/personalityTypes');
          console.log('API Response:', response.data);

          const matchingUser = response.data.find(data => data.userId === user.name);
          if (matchingUser) {
            setPersonalityType(matchingUser.PERSONALITY_TYPE);

            addNavbarItem('REPORT');




          } else {
            console.log('Personality type not found for the logged-in user.');
          }
        } catch (error) {
          console.log('Error fetching personality type:', error);
        }
      }
    };

    fetchData();
  }, [isAuthenticated, user     , addNavbarItem]);



  return (
    <div className='res'>
      <Row className='res1' >
      <h1>Your Personality Type</h1>
      <h1 className='type' >{personalityType}</h1>
      </Row>


<Row>

<Col md={6} >

{personalityType === "ENFJ" && (
  <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
  src={require('../../Assets/ENFJ.png')} style={{width:"500px" , height:"750px"}} ></img>      )}

    
{personalityType === "ESFP" && (
  <img className=''
  src={require('../../Assets/ESFP.png')} style={{width:"500px" , height:"750px"}} ></img>      )}

{personalityType === "ENTJ" && (
  <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
  src={require('../../Assets/entj.png')} style={{width:"500px" , height:"750px"}} ></img>      )}


  {personalityType === "ENTP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ENTP.png')} style={{width:"500px" , height:"750px"}} ></img>      )}


{personalityType === "ESFJ" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ESFJ.png')} style={{width:"500px" , height:"750px"}} ></img>      )}


{personalityType === "ENFP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ENFP.png')} style={{width:"500px" , height:"750px"}} ></img>      )}



{personalityType === "ESTJ" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ESTJ.png')} style={{width:"500px" , height:"750px"}} ></img>      )}



{personalityType === "ESTP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ESTP.png')} style={{width:"500px" , height:"750px"}} ></img>      )}


{personalityType === "INFJ" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/INFJ.png')} style={{width:"500px" , height:"750px"}} ></img>      )}


{personalityType === "INFP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/INFP.png')} style={{width:"500px" , height:"750px"}} ></img>      )}


{personalityType === "INTJ" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/INTJ.png')} style={{width:"500px" , height:"750px"}} ></img>      )}



{personalityType === "INTP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/INTP.png')} style={{width:"500px" , height:"750px"}} ></img>      )}



{personalityType === "ISFJ" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ISFJ.png')} style={{width:"500px" , height:"750px"}} ></img>      )}


{personalityType === "ISFP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ISFP.png')} style={{width:"500px" , height:"750px"}} ></img>      )}


{personalityType === "ISTJ" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ISTJ.png')} style={{width:"500px" , height:"750px"}} ></img>      )}

{personalityType === "ISTP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ISTP.png')} style={{width:"500px" , height:"750px"}} ></img>      )}

</Col>

<Col md={6} >


{/* {personalityType === "ENFJ" && (
  <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
  src={require('../../Assets/ENFJ.png')} style={{width:"500px" , height:"750px"}} ></img>      )}

    
{personalityType === "ESFP" && (
  <img className=''
  src={require('../../Assets/ESFP.png')} style={{width:"500px" , height:"750px"}} ></img>      )}

{personalityType === "ENTJ" && (
  <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
  src={require('../../Assets/ENTJ.png')} style={{width:"500px" , height:"750px"}} ></img>      )}


  {personalityType === "ENTP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ENTP.png')} style={{width:"500px" , height:"750px"}} ></img>      )}


{personalityType === "ESFJ" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ESFJ.png')} style={{width:"500px" , height:"750px"}} ></img>      )}


{personalityType === "ENFP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ENFP.png')} style={{width:"500px" , height:"750px"}} ></img>      )}



{personalityType === "ESTJ" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ESTJ.png')} style={{width:"500px" , height:"750px"}} ></img>      )}



{personalityType === "ESTP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ESTP.png')} style={{width:"500px" , height:"750px"}} ></img>      )}


{personalityType === "INFJ" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/INFJ.png')} style={{width:"500px" , height:"750px"}} ></img>      )}


{personalityType === "INFP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/INFP.png')} style={{width:"500px" , height:"750px"}} ></img>      )}


{personalityType === "INTJ" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/INTJ.png')} style={{width:"500px" , height:"750px"}} ></img>      )}



{personalityType === "INTP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/INTP.png')} style={{width:"500px" , height:"750px"}} ></img>      )}



{personalityType === "ISFJ" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ISFJ.png')} style={{width:"500px" , height:"750px"}} ></img>      )}


{personalityType === "ISFP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ISFP.png')} style={{width:"500px" , height:"750px"}} ></img>      )}


{personalityType === "ISTJ" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ISTJ.png')} style={{width:"500px" , height:"750px"}} ></img>      )}

{personalityType === "ISTP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ISTP.png')} style={{width:"500px" , height:"750px"}} ></img>      )} */}









<h1>DETAILS HERE</h1>












</Col>





















</Row>


    </div>
  );
};



export default Result;


