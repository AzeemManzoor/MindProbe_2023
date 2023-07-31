
import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react'; // Import the useAuth0 hook




const EmotionDetection = () => {
  const canvasRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const [is1MinuteOver, setIs1MinuteOver] = useState(false);

  useEffect(() => {
    // Function to start the emotion analysis on the Flask server
    const startEmotionAnalysis = async () => {
      try {
        await fetch('http://localhost:5001/analyze_webcam');
        // After 1 minute, set is1MinuteOver to true
        setTimeout(() => {
          setIs1MinuteOver(true);
        }, 60000);
      } catch (error) {
        console.error(error);
      }
    };

    // Start the emotion analysis as soon as the component is mounted
    startEmotionAnalysis();

    // Connect to the Flask server using SocketIO
    const socket = io('http://localhost:5001');

    // Listen for frames sent by the Flask server
    socket.on('frame', data => {
      if (isVideoVisible && !is1MinuteOver) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = `data:image/jpeg;base64,${data.image_data}`;
        img.onload = () => {
          // Draw the image onto the canvas
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
      }
    });

    // Listen for any webcam access errors from the Flask server
    socket.on('webcam_error', data => {
      console.error('Webcam Error:', data.message);
      // Handle the webcam error on the frontend if needed
    });

    // Clean up the socket connection and stop the video stream after 1 minute
    const cleanupSocket = () => {
      socket.disconnect();
      setIsVideoVisible(false);
    };

    // Call the cleanup function after 1 minute
    setTimeout(cleanupSocket, 60000);
  }, [isVideoVisible, is1MinuteOver]);



// change
  const { user } = useAuth0(); 

  useEffect(() => {
    // Fetch the user ID from the server
    axios
      .get('http://localhost:4000/userId', {
        params: { username: user?.name }, // Pass the username as a query parameter
      })
      .then((response) => {
        const userId = response.data.userId;
        // Save the user ID in session storage
        sessionStorage.setItem('userId', userId);
      })
      .catch((error) => {
        console.error('Failed to fetch user ID', error);
      });
  }, [user]);

  const runMachineLearning = async () => {
    try {
      // Make a POST request to the Flask API endpoint
      const response = await axios.post('http://localhost:5000/api/model');
      console.log('Machine learning process completed!');
      console.log(response.data); // Log the response data

      // Process the response data or update the UI accordingly
      if (response.status === 200) {
        // Redirect to Page3
        window.location.href = '/Assessment/report';
        // '/Assessment/report';
      } else {
        // Handle error (e.g., show error message)
      }
    } catch (error) {
      console.error('Error executing machine learning process:', error);
      // Handle the error and display an error message
    }
  };




  return (
    <div>
      <h1>Video Interview</h1>
      {isVideoVisible ? (
        <div>
          {/* <h2>Backend Webcam</h2> */}
          <canvas ref={canvasRef} width="640" height="480" />
        </div>
      ) : (
        <div>
        <h1>Your analysis has been saved  </h1>
        <button  
onClick={ runMachineLearning}
 className='ac-btn3'
>Continue to Report Page</button>
</div>
      )}
    </div>
  );
};

export default EmotionDetection;




































































































