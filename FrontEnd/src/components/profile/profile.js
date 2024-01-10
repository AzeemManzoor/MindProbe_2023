import React from 'react'
import profile from '../profile/profile.css'
import { useAuth0, User,isAuthenticated } from '@auth0/auth0-react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [personalityType, setPersonalityType] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated && user && user.email) {
        try {
          const response = await axios.get('http://localhost:4000/personalityTypes');
          const matchingUser = response.data.find(data => data.userId === user.email);
          if (matchingUser) {
            setPersonalityType(matchingUser.PERSONALITY_TYPE);

          } else {
            // console.log('Personality type not found for the logged-in user.');
          }
        } catch (error) {
          // console.log('Error fetching personality type:', error);
        }
      }
    };
    fetchData();
  }, [isAuthenticated, user ]);





const [allEmotions, setAllEmotions] = useState([]);
const [averageEmotion, setAverageEmotion] = useState('');

useEffect(() => {
  const fetchData = async () => {
    if (isAuthenticated && user && user.email) {
      try {
        const response = await axios.get('http://localhost:4000/emotions', {
          params: {
            userId: user.email
          }
        });
        const matchingUser = response.data;
        if (matchingUser) {
          setAllEmotions(matchingUser.all_emotions); // Adjusted property name
          setAverageEmotion(matchingUser.average_emotion); // Adjusted property name
        } else {
          console.log('Emotions not found for the logged-in user.');
        }
      } catch (error) {
        console.log('Error fetching Emotions:', error);
      }
    }
  };

  fetchData();
}, [isAuthenticated, user]);


  return (
    <div className='centered-card ' >
        
     
<div
//  className='hero1' 
>

{isAuthenticated && (
  <div>


<img 
 className='main-image'
  src={user.picture} ></img>

<div
className='user-name' 
>{user.name} 
</div>

<div
className='user-email' 
>{user.email} 
</div>


{isAuthenticated && personalityType && (
          <div>

<h5>{personalityType}</h5>
          </div>


)}


{isAuthenticated && personalityType==='' && (
          <div>

<h6>Assessment Pending</h6>
<a href='/Assessment' > <button>Go to Assessment Page </button></a>


          </div>


)}


        {isAuthenticated && averageEmotion==='Interview Pending' && (
  <div>


<h6>{averageEmotion}</h6>
<a href='/Video-assessment' > <button>Go to Interview Page </button></a>

 </div>
)}
 </div>
)}

</div>




        {/* {isAuthenticated && personalityType==='' && (
          <div>

<a href='/Assessment' > <button>Go to Assessment Page </button></a>


          </div>


)}


        {isAuthenticated && averageEmotion==='Interview Pending' && (
  <div>


<h5>{averageEmotion}</h5>
<a href='/Video-assessment' > <button>Go to Interview Page </button></a>

 </div>
)} */}






















    </div>
  )
}

export default Profile