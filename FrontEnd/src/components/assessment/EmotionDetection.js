
// import React, { useEffect, useRef, useState } from 'react';
// import io from 'socket.io-client';
// import axios from 'axios';
// import { useAuth0 } from '@auth0/auth0-react'; // Import the useAuth0 hook
// import video from '../../Assets/interview.mp4'
// import {Button, Col, Row } from "react-bootstrap";

// const EmotionDetection = () => {
//   const [showVideo, setShowVideo] = useState(true);
//   const [muted, setMuted] = useState(true);
//   const [buttonVisible, setButtonVisible] = useState(true);
//   const videoRef = useRef(null);
//   const [isPopupOpen, setIsPopupOpen] = useState(true); // Set to true initially

//   const closePopup = () => {
//     setIsPopupOpen(false);
//   };

//     // Function to start the emotion analysis on the Flask server
//     const startEmotionAnalysis = async () => {
//       setMuted(false);
//       if (videoRef.current) {
//         videoRef.current.play();
//       }
//       setButtonVisible(false); // Hide the button
//       try {
//         await fetch('http://localhost:5001/analyze_webcam');
//                 // After 1 minute, hide the video and show the H1 tag
//                 // setTimeout(() => {
//                 //   setShowVideo(false);
//                 // }, 60000); // 1 minute in milliseconds
//       } catch (error) {
//         console.error(error);
//       }
//           /* remove video after time */
//           const timeout = setTimeout(() => {
//             setShowVideo(false);
//           }, 60000); // 1 minute in milliseconds
//           // Clear the timeout if the component is unmounted before the 1 minute
//           return () => clearTimeout(timeout);
//     };

// // change
//   const { user } = useAuth0(); 
//   useEffect(() => {
//     // Fetch the user ID from the server
//     axios
//       .get('http://localhost:4000/userId', {
//         params: { username: user?.name }, // Pass the username as a query parameter
//       })
//       .then((response) => {
//         const userId = response.data.userId;
//         // Save the user ID in session storage
//         sessionStorage.setItem('userId', userId);
//       })
//       .catch((error) => {
//         console.error('Failed to fetch user ID', error);
//       });
//   }, [user]);

//   const runMachineLearning = async () => {
//     try {
//       // Make a POST request to the Flask API endpoint
//       const response = await axios.post('http://localhost:5000/api/model');
//       console.log('Machine learning process completed!');
//       console.log(response.data); // Log the response data

//       // Process the response data or update the UI accordingly
//       if (response.status === 200) {
//         // Redirect to Page3
//         window.location.href = '/Assessment/report';
//         // '/Assessment/report';
//       } else {
//         // Handle error (e.g., show error message)
//       }
//     } catch (error) {
//       console.error('Error executing machine learning process:', error);
//       // Handle the error and display an error message
//     }
//   };
//   return (
//     <div>

// {isPopupOpen && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Instructions</h2>

//             <p>Click the Start interview button to start</p>
//             <p>Only start when you are ready</p>
//             <p>Please sit in the bright room</p>
//             <p>Face towards the front camera</p>
//             <p>Don't refresh the page when you start the interview</p>
//             <p>There is no option to pause the interview</p>
//             <p>The duration of interview will be 10 minutes</p>

  
//             <button onClick={closePopup}>Close</button>
//           </div>
//         </div>
//       )}


//       {showVideo ? (

//         <div>
//       <h2 className='videoh1' >Video Interview</h2>
// <div className='video-container' >
//         <video className='videoz' id='video'
//         src={video}
//         // controls
//         muted={muted}
//         ref={videoRef}
//         />
// </div>
// <div>
// {buttonVisible && <button className='ac-btn3 marg' onClick={ startEmotionAnalysis }>Start Interview</button>}
// </div>
//         </div>
//       ) : (
//         <div>

// <img className='interviewDone' src={require('../../Assets/interviewDone.png')} ></img>


//         <h3 className='space' >Your analysis has been saved  </h3>
//         <button  
 
// onClick={ runMachineLearning}
//  className='ac-btn3'
// >Continue to Report Page</button>
// </div>
//       )}
//       </div>
//   );
// };

// export default EmotionDetection;






import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import video from '../../Assets/interview.mp4';

const EmotionDetection = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [muted, setMuted] = useState(true);
  const [buttonVisible, setButtonVisible] = useState(true);
  const videoRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const socket = useRef(null);

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


  const closePopup = () => {
    setIsPopupOpen(false);
  };









  useEffect(() => {
    socket.current = io('http://localhost:5001');
    socket.current.on('connect', () => {
      console.log('Connected to Socket.IO');
    });

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, []);

  // const startEmotionAnalysis = async () => {
  //   setMuted(false);
  //   setShowVideo(true);
  //   setButtonVisible(false);
  //   try {
  //     await axios.post('http://localhost:5001/analyze_webcam');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const startEmotionAnalysis = async () => {
  //   setMuted(false);
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //   }
  //   setButtonVisible(false); // Hide the button
  //   try {
  //     const accessToken = ' tcTFi0A7CNQqb6sdECc6gFqvmy6eb64z'; // Replace this with the actual access token

  //     // Send the user ID along with the request to the Flask backend using the authorization header
  //     await fetch(`http://localhost:5007/analyze_webcam`, {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': `Bearer ${accessToken}`
  //       }
  //     });

  //   } catch (error) {
  //     console.error(error);
  //   }
  //       /* remove video after time */
  //       const timeout = setTimeout(() => {
  //         setShowVideo(false);
  //       }, 66000); //1 minute in milliseconds 60000
  //       return () => clearTimeout(timeout);
  // };


  const {  isAuthenticated, getAccessTokenSilently } = useAuth0();

  const startEmotionAnalysis = async () => {
    setMuted(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
    setButtonVisible(false); // Hide the button
    
    try {
      const accessToken = await getAccessTokenSilently();

      // Extract userId from user object provided by Auth0
      const userId = user?.email;
            console.log("hello",userId);
      await fetch(`http://localhost:5007/analyze_webcam`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'UserId': userId, 

        }
      });
  
    } catch (error) {
      console.error(error);
    }
  
    /* remove video after time */
    const timeout = setTimeout(() => {
      setShowVideo(false);
    }, 66000); // 1 minute in milliseconds (60000)
    return () => clearTimeout(timeout);
  };
  





  














  const stopEmotionAnalysis = async () => {
    setShowVideo(false);
    setButtonVisible(false);

    try {
      await axios.post('http://localhost:5007/stop_analysis');
    } catch (error) {
      console.error(error);
    }
  };










  const { user } = useAuth0();

  useEffect(() => {
    axios
      .get('http://localhost:4000/userId', {
        params: { username: user?.name },
      })
      .then((response) => {
        const userId = response.data.userId;
        sessionStorage.setItem('userId', userId);
      })
      .catch((error) => {
        console.error('Failed to fetch user ID', error);
      });
  }, [user]);

  useEffect(() => {
    const socket = io.connect('http://localhost:5001');
    socket.on('videoEnd', () => {
      setShowVideo(false);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Instructions</h2>
            <p>Click the Start interview button to start</p>
         <p>Click the Start interview button to start</p>
             <p>Only start when you are ready</p>
             <p>Please sit in the bright room</p>
            <p>Face towards the front camera</p>
            <p>Don't refresh the page when you start the interview</p>
            <p>There is no option to pause the interview</p>
             <p>The duration of interview will be 10 minutes</p>       
                  <button onClick={closePopup}>Close</button>
         </div>
        </div>
      )}

      {showVideo ? (
        <div>
          <h2 className="videoh1">Video Interview</h2>
          <div className="video-container">
            <video
              className="videoz"
              id="video"
              src={video}
              muted={muted}
              ref={videoRef}
            />
          </div>
          <div>
            {buttonVisible && (
              <button className="ac-btn3 marg" onClick={startEmotionAnalysis}>
                Start Interview
              </button>
            )}
          </div>
          {!buttonVisible && (
            <button className="ac-btn3 marg" onClick={stopEmotionAnalysis}>
              Stop Assessment
            </button>
          )}
        </div>
      ) : (
        <div>
          <img
            className="interviewDone"
            src={require('../../Assets/interviewDone.png')}
            alt="Interview Done"
          />
          <h3 className="space">Your analysis has been saved</h3>
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




































































