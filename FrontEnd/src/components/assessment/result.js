import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const Result = () => {
  
  const { user, isAuthenticated } = useAuth0();
  const [personalityType, setPersonalityType] = useState('');

  const fetchPersonalityType = async () => {
    try {
      const response = await axios.get('http://localhost:4000/result', {
        params: { userId: user.sub },
      });
      setPersonalityType(response.data.personalityType);
    } catch (error) {
      console.error('Failed to fetch personality type', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchPersonalityType();
    }
  }, [isAuthenticated, user]);

  return (
    <div>
      <h1>Personality Type is: {personalityType}</h1>

      <button onClick={fetchPersonalityType}>SHOW RESULT</button>
    </div>
  );
};

export default Result;
