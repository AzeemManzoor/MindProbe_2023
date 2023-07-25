
import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
const EmotionDetection = () => {
  const canvasRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const [is1MinuteOver, setIs1MinuteOver] = useState(false);

  useEffect(() => {
    // Function to start the emotion analysis on the Flask server
    const startEmotionAnalysis = async () => {
      try {
        await fetch('http://localhost:5000/analyze_webcam');
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
    const socket = io('http://localhost:5000');

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

  return (
    <div>
      <h1>Video Interview</h1>
      {isVideoVisible ? (
        <div>
          <h2>Backend Webcam</h2>
          <canvas ref={canvasRef} width="640" height="480" />
        </div>
      ) : (
        <h1>Your data has been saved to the Database </h1>
      )}
    </div>
  );
};

export default EmotionDetection;




































































































