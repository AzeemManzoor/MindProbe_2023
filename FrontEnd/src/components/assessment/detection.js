
import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react'; // Import the useAuth0 hook
import video from '../../Assets/interview.mp4'
import {Button, Col, Row } from "react-bootstrap";




const EmotionDetection = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [muted, setMuted] = useState(true);
  const [buttonVisible, setButtonVisible] = useState(true);
  const videoRef = useRef(null);



  const [isPopupOpen, setIsPopupOpen] = useState(true); // Set to true initially

  const closePopup = () => {
    setIsPopupOpen(false);
  };


  
  // You can also use useEffect to automatically close the popup after a certain time
  // useEffect(() => {
  //   // const timeout = setTimeout(() => {
  //     closePopup();
  //   // }, 5000); // Close the popup after 5 seconds (adjust as needed)

  //   // return () => clearTimeout(timeout);
  // }, []);





    // Function to start the emotion analysis on the Flask server
    const startEmotionAnalysis = async () => {
      setMuted(false);
      if (videoRef.current) {
        videoRef.current.play();
      }
      setButtonVisible(false); // Hide the button
      try {
        await fetch('http://localhost:5001/analyze_webcam');
                // After 1 minute, hide the video and show the H1 tag
                // setTimeout(() => {
                //   setShowVideo(false);
                // }, 60000); // 1 minute in milliseconds
      } catch (error) {
        console.error(error);
      }
    };
    // startEmotionAnalysis();
  




  useEffect(() => {
    // Set a timeout to hide the video after 1 minute
    const timeout = setTimeout(() => {
      setShowVideo(false);
    }, 60000); // 1 minute in milliseconds

    // Clear the timeout if the component is unmounted before the 1 minute
    return () => clearTimeout(timeout);
  }, []);




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

{isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Instructions</h2>

            <p>Click the Start interview button to start</p>
            <p>Only start when you are ready</p>
            <p>Please sit in the bright room</p>
            <p>Face towards the front camera</p>
            <p>Don't refresh the page when you start the interview</p>
            <p>There is no option to pause the interview</p>

  
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}








      
      <h2 className='videoh1' >Video Interview</h2>
      
      {showVideo ? (

        <div>

        <video className='videoz' id='video'
        src={video}
        // controls
        muted={muted}
        ref={videoRef}
        />

<div>
{buttonVisible && <button className='ac-btn3' onClick={ startEmotionAnalysis }>Start Interview</button>}
</div>



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

/*DETECTION ENDS */ 





/* INSIGHTS STARTS */ 

// likely best PDF

// const targetRef = useRef(null);

// const handlePdfDownload = async () => {
//   const content = targetRef.current;

//   // Get the full width and height of the content element
//   const contentWidth = content.offsetWidth;
//   const contentHeight = content.offsetHeight;

//   // Create a canvas with the full width and height
//   const canvas = document.createElement('canvas');
//   canvas.width = contentWidth;
//   canvas.height = contentHeight;

//   const scale = 1;
//   const canvasContext = canvas.getContext('2d');
//   await html2canvas(content, { canvas, scale });

//   const imgData = canvas.toDataURL('image/jpeg');

//   const pdf = new jsPDF({
//     orientation: 'portrait',
//     unit: 'px',
//     format: [contentWidth, contentHeight],
//   });

//   pdf.addImage(imgData, 'JPEG', 0, 0, contentWidth, contentHeight);

//   pdf.save('Personality_report.pdf');
// };











// LIKELY BEST SNAP




// const divRef = useRef(null);

//   const handlePdfDownload = () => {
//     const divElement = divRef.current;

//     // Set the fixed width for the captured image
//     const fixedWidth = 1300;

//     // Adjust the width of the content for capturing
//     divElement.style.width = `${fixedWidth}px`;

//     html2canvas(divElement).then((canvas) => {
//       // Reset the width of the content
//       divElement.style.width = '';

//       const screenshotUrl = canvas.toDataURL('image/png');
//       const link = document.createElement('a');
//       link.download = 'screenshot.png';
//       link.href = screenshotUrl;
//       link.click();
//     });
//   };









const divRef = useRef(null);
const handlePdfDownload = () => {
  const divElement = divRef.current;

  // Set the fixed width for the captured image
  const fixedWidth = 1300;

  // Selectors for elements to exclude from capturing
  const elementsToExclude = ['.exclude-image', '#element-id-to-exclude'];

  // Hide the excluded elements temporarily
  elementsToExclude.forEach(selector => {
    const excludedElements = divElement.querySelectorAll(selector);
    excludedElements.forEach(element => element.style.display = 'none');
  });

  // Adjust the width of the content for capturing
  divElement.style.width = `${fixedWidth}px`;

  html2canvas(divElement).then((canvas) => {
    // Reset the width of the content
    divElement.style.width = '';

    // Restore the visibility of excluded elements
    elementsToExclude.forEach(selector => {
      const excludedElements = divElement.querySelectorAll(selector);
      excludedElements.forEach(element => element.style.display = '');
    });

    const screenshotUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'Personality_report.png';
    link.href = screenshotUrl;
    link.click();
  });
};



























































// ENFP

{personalityType === "ENFP" && (
  <div
   style={{width:"500px" , height:"650px" }}>   

  <h4 className='info1'>  
  Extroverted  
  </h4>
  <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className=' progress exclude-image'  />
  <h6 className='info' >
  This character trait denotes that the individual derives the majority of their energy from the environment, other people, and activities. ENFPs typically have an outgoing personality and love connecting with people.
    </h6>
    <h4 className='info1'>    
    Intuitive
  </h4>
  <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress exclude-image'  />
    <h6 className='info' >
ENFPs gravitate towards patterns, possibilities, and abstract concepts. They are creative and frequently delve into the underlying significance of things that happen to them.
    </h6>
  <h4 className='info1'>    
  Feeling 
  </h4>
  <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
  <h6 className='info' >
ENFPs base their decisions on their moral principles, their capacity for empathy, and their awareness of other people's feelings. They value peaceful relationships and are sympathetic.
    </h6>
  <h4 className='info1'>   
  Perceiving  
  </h4> 
  <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
  <h6 className='info' >
The perceiving element denotes a tendency for adaptation and flexibility. ENFPs frequently relish spontaneity and could favor maintaining a range of possibilities.
  </h6>
  </div>    
  )}





















