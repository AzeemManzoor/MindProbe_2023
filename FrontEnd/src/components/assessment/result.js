




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const Result = () => {
  const { user, isAuthenticated } = useAuth0();
  const [personalityType, setPersonalityType] = useState('');

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
          } else {
            console.log('Personality type not found for the logged-in user.');
          }
        } catch (error) {
          console.log('Error fetching personality type:', error);
        }
      }
    };

    fetchData();
  }, [isAuthenticated, user]);

  // const handleShowResult = () => {
  //   if (isAuthenticated) {
  //     console.log('Personality Type:', personalityType);
  //   } else {
  //     console.log('User not authenticated.');
  //   }
  // };

  return (
    <div>
      <h1>Personality Type is: {personalityType}</h1>
      {/* <button onClick={handleShowResult}>SHOW RESULT</button> */}







      <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
       src={require('../../Assets/entj.png')} style={{width:"500px" , height:"750px"}} ></img>

    </div>
  );
};



export default Result;


