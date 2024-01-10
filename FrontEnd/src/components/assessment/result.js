import React, { useEffect, useState, useRef  } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { Col, Row } from "react-bootstrap";
import assessment from '../assessment/assessment.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavbar } from '../navbar/NavbarContext';
import { Container } from 'react-bootstrap/lib/Tab';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import html2canvas from 'html2canvas';
import Profile from '../profile/profile'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Result = () => {

  const [isFetching, setIsFetching] = useState(true);
  const { user, isAuthenticated } = useAuth0();
  const [personalityType, setPersonalityType] = useState('');
  const { addNavbarItem } = useNavbar();
  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated && user && user.email) {
        try {
          const response = await axios.get('http://localhost:4000/personalityTypes');
          // console.log('API Response:', response.data);
          setIsFetching(false);
          const matchingUser = response.data.find(data => data.userId === user.email);
          if (matchingUser) {
            setPersonalityType(matchingUser.PERSONALITY_TYPE);
            addNavbarItem('REPORT');
            addNavbarItem('INSIGHTS');
          } else {
            console.log('Personality type not found for the logged-in user.');
          }
        } catch (error) {
          console.log('Error fetching personality type:', error);
        }
      }
    };
    fetchData();
  }, [isAuthenticated, user , addNavbarItem]);




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
          // console.log('Emotions API Response:', response.data);
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



  const [loading, setLoading] = useState(false);
  const share = async () => {
    setLoading(true);
    try {
      const userId = sessionStorage.getItem('userId');
  
      if (userId) {
        // Check if the user's data is already in the shares_collection
        const response = await axios.post('http://localhost:5005/checkSharedData', { userId });
        if (response.data.shared) {
          toast.success('Your Report is already shared');
          await axios.post('http://localhost:5005/transferData', { userId });
        } else {
          // Call the backend API to transfer data
          await axios.post('http://localhost:5005/transferData', { userId });
          // Data transfer successful
          toast.success('Your Report has been shared with the Community');
        }
      } else {
        toast.success('User ID not found');
      }
    } catch (error) {
      console.error('Error transferring data:', error);
    } finally {
      setLoading(false);
      window.location.href = '/Community';

    }
  };
 
  



  return (
<div className='wrap'>
<ToastContainer />

{isFetching ? (

<div>
        <div className="popup1">
          <div className="popup1-content1">
<div>
<h2>Please Wait...</h2>
    <p className="info2">
        We are getting your Report...
      </p>

</div>
          </div>
        </div>

</div>
      



) : (

<div>


<div className='res'>       
<div 
      ref={divRef}
       > 

<Row className='res1' >
  



      {isAuthenticated && (
<div> 
<h1 className='user1'>Dear</h1> <h1  className='user2' > {user.name}!</h1> <h1 className='user1 ' >here's  Your Personality Type </h1> 
<h1 className='type' >{personalityType}</h1>
</div>
)}
      
      </Row>

<Row className='per2' >

<Col md={6}
//  className='colA'
  >
<div className='colA' >
{personalityType === "ENFJ" && (
  <img className='image-i'
  src={require('../../Assets/ENFJ.png')} ></img>      )}

    
{personalityType === "ESFP" && (
  <img className='image-i'
  src={require('../../Assets/ESFP.png')} ></img>      )}

{personalityType === "ENTJ" && (
  <img className='image-i'
  src={require('../../Assets/ENTJ.png')} ></img>      )}


  {personalityType === "ENTP" && (
    <img className='image-i'
    src={require('../../Assets/ENTP.png')} ></img>      )}


{personalityType === "ESFJ" && (
    <img className='image-i'
    src={require('../../Assets/ESFJ.png')} ></img>      )}


{personalityType === "ENFP" && (
    <img className='image-i'
    src={require('../../Assets/ENFP.png')} ></img>      )}



{personalityType === "ESTJ" && (
    <img className='image-i'
    src={require('../../Assets/ESTJ.png')} ></img>      )}



{personalityType === "ESTP" && (
    <img className='image-i'
    src={require('../../Assets/ESTP.png')} ></img>      )}


{personalityType === "INFJ" && (
    <img className='image-i'
    src={require('../../Assets/INFJ.png')} ></img>      )}


{personalityType === "INFP" && (
    <img className='image-i'
    src={require('../../Assets/INFP.png')} ></img>      )}


{personalityType === "INTJ" && (
    <img className='image-i'
    src={require('../../Assets/INTJ.png')} ></img>      )}



{personalityType === "INTP" && (
    <img className='image-i'
    src={require('../../Assets/INTP.png')} ></img>      )}



{personalityType === "ISFJ" && (
    <img className='image-i'
    src={require('../../Assets/ISFJ.png')} ></img>      )}


{personalityType === "ISFP" && (
    <img className='image-i'
    src={require('../../Assets/ISFP.png')} ></img>      )}


{personalityType === "ISTJ" && (
    <img className='image-i'
    src={require('../../Assets/ISTJ.png')} ></img>      )}

{personalityType === "ISTP" && (
    <img className='image-i'
    src={require('../../Assets/ISTP.png')} ></img>      )}
</div>
</Col>





<Col md={6}
//  className='colB'
 >
<div className='colB'>
 {personalityType === "ISTJ" && (
  <div style={{width:"500px" , height:"650px" }}
  >   

<h4 className='info1'>  
   
   Introverted 
</h4>
<ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'   />


<h6 className='info' >This character's primary source of energy is their inner world of ideas, reflections, and thoughts. Spending time alone or in small groups helps introverts refuel, and they may favor situations that are quieter and more conducive to concentration.</h6>

<h4 className='info1'>    

Sensing
</h4>


   <ProgressBar completed = {40} bgColor = "red" animateOnRender = {true}  isLabelVisible = {true}  className='progress exclude-image' />




<h6 className='info' >This trait indicates that the individual prefers to learn knowledge primarily through their five senses and concentrates on specific and real-world situations. They are aware of their surroundings and present-focused.</h6>

<h4 className='info1'>   

Thinking
</h4>
 <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}  className='progress exclude-image'  />

<h6 className='info' >This shows that instead of being predominantly influenced by emotions, the individual tends to base their decisions on logic, reason, and unbiased analysis.</h6>

<h4 className='info1'>   

Judging
</h4> 
<ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true} className='progress exclude-image' />

<h6 className='info' >The judging element suggests that the subject favors a regimented and orderly way of living. They enjoy making plans, keeping to schedules, and reaching conclusions about things.</h6>

</div>
  )}

{personalityType === "ESFP" && (
   <div style={{width:"500px" , height:"650px" }}>   

   <h4 className='info1'>  
      
   Extroverted  
   </h4>
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
  
   <h6 className='info' >This character trait denotes that the individual derives the majority of their energy from the environment, other people, and activities. ESFPs typically have an outgoing personality and love connecting with people.</h6>

   <h4 className='info1'>    

   Sensing
   </h4>
   <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress exclude-image'  />
   
   
   <h6 className='info' >ESFPs tend to concentrate on specifics and real-world situations. They are aware of their immediate surroundings and frequently act quickly when anything happens.</h6>
   
   <h4 className='info1'>   
   
   Feeling 
   </h4>
   <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
   
   <h6 className='info' >ESFPs base their decisions on their moral principles, their capacity for empathy, and their awareness of other people's feelings. They value peaceful relationships and are sympathetic.</h6>
   
   <h4 className='info1'>   
   
   Perceiving 
   </h4> 
   <ProgressBar completed = {50} bgColor = "grey" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
   
   <h6 className='info' >The perceiving element denotes a tendency for adaptation and flexibility. ESFPs frequently relish spontaneity and could favor maintaining a range of possibilities.</h6>
   
   </div> 
  
  
  )} 
  
  
  
  
     {/* /*   OTHER   */ }

 

{personalityType === "ENTJ" && (
   <div style={{width:"500px" , height:"650px" }}>   

   <h4 className='info1'>  
      
   Extroverted  
   </h4>
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
   
   <h6 className='info' >This character trait denotes that the individual derives the majority of their energy from the environment, other people, and activities. ENTJs typically have an outgoing personality and love connecting with people.</h6>

   <h4 className='info1'>    
   
   Intuitive
   </h4>
   <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
   
   
   <h6 className='info' >ENTJs gravitate towards patterns, possibilities, and abstract concepts. They are creative and frequently delve into the underlying significance of things that happen to them.</h6>
   
   <h4 className='info1'>   
   
   Thinking 
   </h4>
   <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress exclude-image'  />
   
   <h6 className='info' >ENTJs base their conclusions on reason, logic, and unbiased analysis. They prioritize efficiency and are frequently motivated by pragmatic factors.</h6>
   
   <h4 className='info1'>   
   
   Judging 
   </h4> 
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
   
   <h6 className='info' >ENTJs want to make judgements quickly rather than deferring action because they like to have plans and routines.</h6>
   
   </div> 
  
  )}



{/* /*   OTHER   */ }


 
  {personalityType === "ENTP" && (
    <div style={{width:"500px" , height:"650px" }}>   

    <h4 className='info1'>  
       
    Extroverted  
    </h4>
    <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
    
    <h6 className='info' >
    This character trait denotes that the individual derives the majority of their energy from the environment, other people, and activities. ENTPs typically have an outgoing personality and love connecting with people.    </h6>
 
    <h4 className='info1'>    
    
    Intuitive
    </h4>
    <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress exclude-image'  />

    
    <h6 className='info' >
    ENTPs base their conclusions on reason, logic, and unbiased analysis. They may be good at arguing and problem-solving, and they respect intellectual rigout.      </h6>
    
    <h4 className='info1'>   
    
    Thinking 
    </h4>
    <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
    
    <h6 className='info' >
      ENTJs base their conclusions on reason, logic, and unbiased analysis. They prioritize efficiency and are frequently motivated by pragmatic factors.
      </h6>
    
    <h4 className='info1'>   
    
    Perceiving  
    </h4> 
    <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
    
    <h6 className='info' >
    The perceiving element denotes a tendency for adaptation and flexibility. ENTPs frequently relish spontaneity and could favor maintaining a range of possibilities.      </h6>
    
    </div> 
  
    )}

{/* /*   OTHER   */ }

{personalityType === "ESFJ" && (
  <div style={{width:"500px" , height:"650px" }}>   

  <h4 className='info1'>  
     
  Extroverted  
  </h4>
  <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
  
  <h6 className='info' >
  This character trait denotes that the individual derives the majority of their energy from the environment, other people, and activities. ESFPs typically have an outgoing personality and love connecting with people.  
  
  
    </h6>

  <h4 className='info1'>    
  
  Sensing
  </h4>
  <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />

  
  <h6 className='info' >
  ENTPs base their conclusions on reason, logic, and unbiased analysis. They may be good at arguing and problem-solving, and they respect intellectual rigout.      
    
    </h6>
  
  <h4 className='info1'>   
  
  Feeling 
  </h4>
  <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress exclude-image'  />
  
  <h6 className='info' >
  ESFPs base their decisions on their moral principles, their capacity for empathy, and their awareness of other people's feelings. They value peaceful relationships and are sympathetic.    
    
    
    </h6>
  
  <h4 className='info1'>   
  
  Perceiving  
  </h4> 
  <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
  
  <h6 className='info' >
  The perceiving element denotes a tendency for adaptation and flexibility. ESFPs frequently relish spontaneity and could favor maintaining a range of possibilities.  
  
  
  </h6>
  
  </div>    

    )}



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

{/* other  */}

{personalityType === "ESTJ" && (
   
   <div style={{width:"500px" , height:"650px" }}>   

   <h4 className='info1'>  
      
   Extroverted  
   </h4>
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
   
   <h6 className='info' >
   This character trait denotes that the individual derives the majority of their energy from the environment, other people, and activities. ESTJs typically have an outgoing personality and love connecting with people.

   
     </h6>
 
   <h4 className='info1'>    
   
   Sensing
   </h4>
   <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress exclude-image'  />

   
   <h6 className='info' >
This character trait denotes that the individual derives the majority of their energy from the environment, other people, and activities. ESTJs typically have an outgoing personality and love connecting with people.

     </h6>
   
   <h4 className='info1'>   
   
   Thinking 
   </h4>
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />

   <h6 className='info' >
   ESTJs base their conclusions on reason, logic, and unbiased analysis. They prioritize efficiency and are frequently motivated by pragmatic factors.

     
     </h6>
   
   <h4 className='info1'>   
   
   Judging  
   </h4> 
   <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
   
   <h6 className='info' >
   A preference for structure and organization is implied by the judging feature. ESTJs want to make judgements quickly rather than deferring action because they like to have plans and routines.

   
   </h6>
   
   </div>    
   
    )}



{personalityType === "ESTP" && (
    <div style={{width:"500px" , height:"650px" }}>   

    <h4 className='info1'>  
       
    Extroverted  
    </h4>
    <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress exclude-image'  />

    <h6 className='info' >
    This character trait denotes that the individual derives the majority of their energy from the environment, other people, and activities. ESTPs typically have an outgoing personality and love connecting with people.

    
      </h6>
  
    <h4 className='info1'>    
    
    Sensing
    </h4>
    <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
 
    
    <h6 className='info' >
As previously said, ESTPs tend to concentrate on specifics and real-world situations. They are aware of their immediate surroundings and frequently act quickly when anything happens.

      </h6>
    
    <h4 className='info1'>   
    
    Thinking 
    </h4>
    <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
 
    <h6 className='info' >
ESTPs base their conclusions on reason, logic, and unbiased analysis. They prioritize efficiency and are frequently motivated by pragmatic factors.

      
      </h6>
    
    <h4 className='info1'>   
    
    Perceiving  
    </h4> 
    <ProgressBar completed = {50} bgColor = "grey" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
    
    <h6 className='info' >
    The perceiving element denotes a tendency for adaptation and flexibility. ESTPs frequently relish spontaneity and could favor maintaining a range of possibilities.

    
    </h6>
    
    </div>  
     )}
{/* other */}

{personalityType === "INFJ" && (
   <div style={{width:"500px" , height:"650px" }}>   

   <h4 className='info1'>  
      
   Introverted  
   </h4>
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />

   <h6 className='info' >
   This denotes that the person draws most of their energy from their inner world of ideas, reflections, and thoughts. Because they are generally introspective, INFJs might require some alone time to refuel.

   
     </h6>
 
   <h4 className='info1'>    
   
   Intuitive
   </h4>
   <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress exclude-image'  />

   
   <h6 className='info' >
Contrary to the "Sensing" tendency, INFJs favor concentrating on patterns, possibilities, and abstract concepts. They are perceptive and probe further to uncover underlying connections and meanings.

     </h6>
   
   <h4 className='info1'>   
   
   Feeling 
   </h4>
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />

   <h6 className='info' >
   INFJs base their decisions on their moral principles, their capacity for empathy, and their awareness of the feelings of others. They strive for harmony in their relationships and have a great deal of compassion.

     
     </h6>
   
   <h4 className='info1'>   
   
   Judging  
   </h4> 
   <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
   
   <h6 className='info' >
A preference for structure and organization is implied by the judging feature. INFJs enjoy making plans and tend to act quickly rather than keeping options open.

   
   </h6>
   
   </div> 
    
    
    )}


{/* other */}


{personalityType === "INFP" && (
   <div style={{width:"500px" , height:"650px" }}>   

   <h4 className='info1'>  
      
   Introverted  
   </h4>
   <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress exclude-image'  />

   <h6 className='info' >
   This character's primary source of energy is their inner world of ideas, reflections, and thoughts. ISTPs have a tendency to be reticent and may relish alone time or intimate gatherings of close friends.

   
     </h6>
 
   <h4 className='info1'>    
   
   Intuitive
   </h4>
   <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress exclude-image'  />

   
   <h6 className='info' >
Contrary to the "Sensing" tendency, INTJs favor concentrating on patterns, possibilities, and abstract concepts. They are perceptive, good at linking disparate ideas, and skilled at understanding the big picture.

     </h6>
   
   <h4 className='info1'>   
   
   Feeling 
   </h4>
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />

   <h6 className='info' >
   ISFPs base their decisions on their moral principles, their capacity for empathy, and their awareness of other people's feelings. They cherish others' and their own sincerity and are sympathetic.

     
     </h6>
   
   <h4 className='info1'>   
   
   Perceiving  
   </h4> 
   <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
   
   <h6 className='info' >
The perceiving aspect suggests a tendency for adaptation and flexibility. ISTPs frequently have an open mind and prefer to keep their alternatives open than making firm decisions.

   
   </h6>
   
   </div> 
    
    )}



{/* other */}
{personalityType === "INTJ" && (
    <div style={{width:"500px" , height:"650px" }}>   

    <h4 className='info1'>  
       
    Introverted  
    </h4>
    <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress exclude-image'  />
 
    <h6 className='info' >
    This character's primary source of energy is their inner world of ideas, reflections, and thoughts. ISTPs have a tendency to be reticent and may relish alone time or intimate gatherings of close friends.
 

    
      </h6>
  
    <h4 className='info1'>    
    
    Intuitive
    </h4>
    <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
 
    
    <h6 className='info' >
Contrary to the "Sensing" tendency, INTJs favor concentrating on patterns, possibilities, and abstract concepts. They are perceptive, good at linking disparate ideas, and skilled at understanding the big picture.

      </h6>
    
    <h4 className='info1'>   
    
    Thinking 
    </h4>
    <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress exclude-image'  />
 
    <h6 className='info' >
INTJs base their conclusions on reason, logic, and unbiased analysis. Efficiency is a top priority, and data and proof are frequently what motivate them. 

      
      </h6>
    
    <h4 className='info1'>   
    
    Judging  
    </h4> 
    <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
    
    <h6 className='info' >
    A preference for structure and organization is implied by the judging feature. INTJs enjoy making plans and taking action right away over leaving issues unresolved. 

    
    </h6>
    
    </div> 
    
    
     )}


{/* other */}
{personalityType === "INTP" && (
   <div style={{width:"500px" , height:"650px" }}>   

   <h4 className='info1'>  
      
   Introverted  
   </h4>
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />

   <h6 className='info' >
   This character's primary source of energy is their inner world of ideas, reflections, and thoughts. ISTPs have a tendency to be reticent and may relish alone time or intimate gatherings of close friends.


   
     </h6>
 
   <h4 className='info1'>    
   
   Intuitive
   </h4>
   <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress exclude-image'  />

   
   <h6 className='info' >
INTJs favor concentrating on patterns, possibilities, and abstract concepts. They are perceptive, good at linking disparate ideas, and skilled at understanding the big picture.

     </h6>
   
   <h4 className='info1'>   
   
   Thinking 
   </h4>
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />

   <h6 className='info' >
   INTPs base their conclusions on reason, logic, and unbiased analysis. When solving problems, they emphasize efficacy and may put it ahead of feelings.

     
     </h6>
   
   <h4 className='info1'>   
   
   Perceiving  
   </h4> 
   <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
   
   <h6 className='info' >
The perceiving aspect suggests a tendency for adaptation and flexibility. ISTPs frequently have an open mind and prefer to keep their alternatives open than making firm decisions.

   
   </h6>
   
   </div>
   
   
   )}



{personalityType === "ISFJ" && (
  <div style={{width:"500px" , height:"650px" }}>   

  <h4 className='info1'>  
     
  Introverted  
  </h4>
  <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />

  <h6 className='info' >
  This character's primary source of energy is their inner world of ideas, reflections, and thoughts. ISTPs have a tendency to be reticent and may relish alone time or intimate gatherings of close friends.


  
    </h6>

  <h4 className='info1'>    
  
  Sensing
  </h4>
  <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />

  
  <h6 className='info' >
  This characteristic shows that the person wants to concentrate on specific and real-world situations. ISFJs frequently exhibit these traits, as well as being perceptive and detail oriented.

    </h6>
  
  <h4 className='info1'>   
  
  Feeling 
  </h4>
  <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress exclude-image'  />

  <h6 className='info' >
As opposed to the "Thinking" preference, ISFJs frequently base their decisions on moral principles, empathy for others, and an awareness of how those decisions may affect them. They value peaceful relationships and are sympathetic.

    
    </h6>
  
  <h4 className='info1'>   
  
  Judging  
  </h4> 
  <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
  
  <h6 className='info' >
  Judging element denotes a propensity for structure and organization.ISFJs like to have schedules and plans, and they work hard to see things through.

  
  </h6>
  
  </div>
  
  
  )}
     
     
     
     


{personalityType === "ISFP" && (
   <div style={{width:"500px" , height:"650px" }}>   

   <h4 className='info1'>  
      
   Introverted  
   </h4>
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
 
   <h6 className='info' >
   This character's primary source of energy is their inner world of ideas, reflections, and thoughts. ISTPs have a tendency to be reticent and may relish alone time or intimate gatherings of close friends.

 
   
     </h6>
 
   <h4 className='info1'>    
   
   Sensing
   </h4>
   <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
 
   
   <h6 className='info' >
ISTPs tend to concentrate on specifics and real-world situations, in contrast to the "Intuitive" preference. They are perceptive and adept at navigating the immediate, material world.

     </h6>
   
   <h4 className='info1'>   
   
   Feeling 
   </h4>
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
 
   <h6 className='info' >
ISFPs base their decisions on their moral principles, their capacity for empathy, and their awareness of other people's feelings. They cherish others' and their own sincerity and are sympathetic. 

     
     </h6>
   
   <h4 className='info1'>   
   
   Perceiving  
   </h4> 
   <ProgressBar completed = {50} bgColor = "grey" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
   
   <h6 className='info' >
   The perceiving aspect suggests a tendency for adaptation and flexibility. ISTPs frequently have an open mind and prefer to keep their alternatives open than making firm decisions.

   
   </h6>
   
   </div>
   
    )}


{personalityType === "ENFJ" && (
    <div style={{width:"500px" , height:"650px" }}>   

    <h4 className='info1'>  
       
    Extroverted  
    </h4>
    <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress exclude-image'  />
    
    <h6 className='info' >
    This character trait denotes that the individual derives the majority of their energy from the environment, other people, and activities. ENFJs typically have an outgoing personality and love connecting with people.

    
      </h6>
  
    <h4 className='info1'>    
    
    Intuitive
    </h4>
    <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />

    
    <h6 className='info' >
ENFJs gravitate towards patterns, possibilities, and abstract concepts. They are creative and frequently delve into the underlying significance of things that happen to them.

      </h6>
    
    <h4 className='info1'>   
    
    Feeling 
    </h4>
    <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress exclude-image'  />

    <h6 className='info' >
ENFPs base their decisions on their moral principles, their capacity for empathy, and their awareness of other people's feelings. They value peaceful relationships and are sympathetic.


      
      </h6>
    
    <h4 className='info1'>   
    
    Judging  
    </h4> 
    <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'  />
    
    <h6 className='info' >
The perceiving element denotes a tendency for adaptation and flexibility. ENFPs frequently relish spontaneity and could favor maintaining a range of possibilities.


    
    </h6>
    
    </div> 
    
    )}

{personalityType === "ISTP" && (
     <div style={{width:"500px" , height:"650px" }}>   

     <h4 className='info1'>  
        
        Introverted 
     </h4>
     <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}   className='progress exclude-image'   />
     
     
     <h6 className='info' >This character's primary source of energy is their inner world of ideas, reflections, and thoughts. ISTPs tend to be reticent and may relish alone time or intimate gatherings of close friends.</h6>
     
     <h4 className='info1'>    
     
     Sensing
     </h4>
      <ProgressBar completed = {40} bgColor = "red" animateOnRender = {true}  isLabelVisible = {true}  className='progress exclude-image' />
     
     
     <h6 className='info' > ISTPs tend to concentrate on specific and real-world situations, in contrast to the "Intuitive" preference. They are perceptive and adept at navigating the immediate, material world.</h6>
     
     <h4 className='info1'>   
     
     Thinking
     </h4>
      <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}  className='progress exclude-image'  />
     
     <h6 className='info' >ISTPs base their conclusions on reason, logic, and unbiased analysis. When solving problems, they emphasize efficacy and may put it ahead of feelings.</h6>
     
     <h4 className='info1'>   
     
     Judging
     </h4> 
     <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true} className='progress exclude-image' />
     
     <h6 className='info' >The perceiving aspect suggests a tendency for adaptation and flexibility. ISTPs frequently have an open mind and prefer to keep their alternatives open than making firm decisions.</h6>
     
     </div>
  
  
  )} 
</div>

</Col>



</Row>



{/* rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */}





<Row className='conc' >
{personalityType === "ESTP" && (  
 <div>

<h4  className='user2' > {user.name}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 16.2% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}

{personalityType === "ESFJ" && (  
 <div>

<h4  className='user1 txt' > {user.name}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 14.8% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}

{personalityType === "ESFP" && (  
 <div>

<h4  className='user1 txt' > {user.name}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 10.9% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}


{personalityType === "ESTJ" && (  
 <div>

<h4  className='user1 txt' > {user.name}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 9.5% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}

{personalityType === "ENFP" && (  
 <div>

<h4  className='user1 txt' > {user.name}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 6.9% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}

{personalityType === "ISFJ" && (  
 <div>

<h4  className='user1 txt' > {user.name}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 6.5% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}



{personalityType === "ISTJ" && (  
 <div>

<h4  className='user1 txt' > {user.name}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 5.9% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}

{personalityType === "ISFP" && (  
 <div>

<h4  className='user1 txt' > {user.name}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 5.3% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}


{personalityType === "ENTP" && (  
 <div>

<h4  className='user1 txt' > {user.name}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 5.3% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}

{personalityType === "ISTP" && (  
 <div>

<h4  className='user1 txt' > {user.name}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 4.9% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}

{personalityType === "INFP" && (  
 <div>

<h4  className='user1 txt' > {user.name}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 4.0% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}


{personalityType === "INTP" && (  
 <div>

<h4  className='user1 txt' > {user.name}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 3.0% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}

{personalityType === "ENFJ" && (  
 <div>

<h4  className='user1 txt' > {user.name}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 2.4% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}


{personalityType === "INTJ" && (  
 <div>

<h4  className='user1 txt' > {user.name}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 1.9% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}


{personalityType === "ENTJ" && (  
 <div>

<h4  className='user1 txt' > {user.name}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 1.4% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}


{personalityType === "INFJ" && (  
 <div>

<h4  className='user1 txt' > {user.name}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 1.2% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}
</Row>

  
{/* </div> */}
{/* rowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww*/}

<Row className='rowww' >

<h2>More About You:</h2>


</Row>


<Row className='roww'>

{personalityType === "ESTP" && (  
 <div   className='enclose' >

<h6  className='conc1' >
You are an ESTP, which means you have lots of energy and excitement. This shows in the kinds of foods and activities you enjoy. You love tasty, satisfying meals and are always on the lookout for new and interesting dishes to try. Trying out different cuisines and new foods is something you really enjoy. Your hobbies and interests are usually physical and hands-on, like sports, outdoor adventures, or thrilling activities. You like living in the moment and enjoying unplanned events. Since you're outgoing and social, you thrive in situations where you can interact with people and show off your positive and charming personality. You're good at handling different situations because you're adaptable and quick-thinking. Your friendly nature makes it easy for you to get along with all kinds of people and fully enjoy new experiences.

</h6>


 </div>
)}

{personalityType === "ESFJ" && (  
 <div className='enclose' >

 <h6  className='conc1' >
 Your ESFJ personality traits have a big impact on your food and activity choices. You really like meals that bring people together and create a sense of community. When you eat, you often pick dishes that suit the preferences of those around you. You value the idea of eating together and creating a friendly atmosphere. Your interests usually revolve around helping others and building relationships. This could mean doing volunteer work, hosting gatherings, or just being part of social events. Since you're an extravert, you thrive in social situations and enjoy being the life of the party. You're a good listener and friend because you're caring and understanding. You prefer having structure and order in your life, and you work hard to make sure things are peaceful and stable. People appreciate having you around at social gatherings because you're friendly and outgoing. </h6>
 
 
  </div>
)}

{personalityType === "ESFP" && (  
  <div className='enclose' >

  <h6  className='conc1' >
  Your lively and expressive nature as an ESFP affects the things you enjoy, like food and activities. You prefer tasty and colorful foods that make your taste buds happy and meals that excite your senses. You are always open to trying new foods and enjoy the experience. Your interests usually involve being social and doing interactive things, like dancing, performing arts, or sports for fun. You have a natural talent for making others laugh and enjoy being in the spotlight. Because you are outgoing, you love being around people and making new friends easily. You seek thrills and excitement in new situations since you are spontaneous and adaptable. Your warm and caring attitude helps you connect with others on a deeper level, and you value the emotional bonds you create with people. Your adventurous personality and zest for life make you a magnet for fun and excitement in any social gathering.
    </h6>
  
  
   </div>
)}


{personalityType === "ESTJ" && (  
  <div className='enclose' >

<h6  className='conc1' >
Your realistic and deliberate personality as an ESTJ is reflected in your tastes in food and pastimes. You appreciate meals that are consistently prepared and tasty, frequently choosing comforting and satisfying cuisine from your childhood. You like how organized and effective your meal choices are. Your pastimes frequently involve leading and planning activities, such as organizing events, playing team sports, or working on tasks that call for strategic planning and problem-solving. You enjoy interacting with people and taking the lead in group settings because of your extraverted nature, which makes you thrive in social circumstances. You are a natural leader who appreciates order and discipline because to your strong sense of duty and logical reasoning. Your preference for judging suggests that you place a high priority on preparation and work obstinately to achieve your objectives. You are a useful team member and someone who can be trusted to complete tasks effectively because to your practical and dependable character.
</h6>
 </div>
)}

{personalityType === "ENFP" && (  
  <div className='enclose' >

  <h6  className='conc1' >
  You are a lively and spirited individual as an ENFP, and your energy shines through in what you do and what you like to eat. You love the excitement of trying out new and interesting foods, and you prefer meals that have lots of flavors and variety. Your curious taste buds encourage you to try different types of food and enjoy the pleasures of the kitchen. Your hobbies often involve creative and imaginative activities, like writing, performing arts, or expressing yourself through art to connect with others on a deeper level. Since you're outgoing, being with people energizes you, and you're often the life of social gatherings. You have a charming and caring nature, always trying to understand and support those around you. Your flexibility and open-mindedness make you a great team player, and you're always eager to embrace new experiences and ideas. Your friends treasure you and find inspiration in your zest for life and the happiness you bring to everyone around you.
      </h6>
   </div>
)}

{personalityType === "ISFJ" && (  
 <div className='enclose' >

 <h6  className='conc1' >
 You identify as an ISFJ, it means you have a caring and loving personality. You enjoy eating warm and comforting foods, especially home-cooked meals. Cooking for others is a way for you to show your love and care for them. You also like doing things like art, writing, or gardening because they help you express your feelings. Spending time in nature and taking care of plants makes you feel better too. You're good at listening to others and being a supportive friend because you pay close attention to details and understand what they need. However, you might try to avoid conflicts and feel sensitive when people criticize you. Instead, you prefer having peaceful and cooperative relationships with others.
     </h6>
  </div>
)}



{personalityType === "ISTJ" && (  
 <div className='enclose' >

 <h6  className='conc1' >
 You identify as an ISTJ, you probably have simple and traditional food preferences. You likely enjoy familiar, comforting dishes from the past and prefer meals that are easy to make and satisfying. You might not be very adventurous when it comes to trying new foods, and instead, stick to what you already know and like. Your hobbies are likely practical and involve activities like organizing your home, working with wood, or gardening. These hobbies appeal to your analytical and methodical nature, as you enjoy paying close attention to detail and staying organized. You find joy in improving your skills and taking pride in completing projects.     </h6>

  </div>
)}

{personalityType === "ISFP" && (  
  <div className='enclose' >

<h6  className='conc1' >
You are an ISFP, which means you are someone who feels things deeply and likes to express yourself through both your cooking and your leisure activities. When it comes to food, you enjoy meals that make you feel something and are made with creativity and artistry, as this allows you to fully enjoy the experience of eating. Trying out new foods and flavors, especially those that have a special emotional meaning to you, can make you happy. Your interests usually revolve around artistic and creative things that let you express yourself, such as writing, music, or painting. Spending time in nature or doing outdoor activities is something that energizes and inspires you. You value your close friendships a lot, and these friends understand and appreciate your sensitive and adaptable nature. Since you're introverted, you also like having time alone to think and reflect.    </h6>

 </div>
)}


{personalityType === "ENTP" && (  
  <div className='enclose' >

  <h6  className='conc1' >
  You have a lively and inquisitive temperament as an ENTP, which affects your taste in food and pastimes. You appreciate recipes that challenge your taste senses and provide new sensations, and you enjoy meals that are both intellectually interesting and distinctive. You are interested in experimenting with various cuisines and like the thrill of discovery. Your interests probably entail mental exercises that challenge you and let you investigate novel concepts, including debating, solving problems, or having philosophical talks. Because of your extraverted personality, you enjoy being among people and the center of lively talks. You also do well in social situations. You are good at connecting seemingly unconnected ideas because of your quick wit and intelligent nature. You can welcome change and approach problems with a feeling of curiosity and inventiveness because to your open-mindedness and adaptability. You are a motivating and intellectually fascinating presence in any group environment thanks to your energy and creative thinking.
          </h6>
   </div>
)}

{personalityType === "ISTP" && (  
  <div className='enclose' >

<h6  className='conc1' >
You approach food and pastimes in a practical and hands-on manner if you identify as an ISTP. You appreciate uncomplicated, plain recipes that delight your palate without adding needless complexity. You might enjoy experimenting with new meals that appeal to your adventurous side, but you often prefer the efficiency and practicality of foods that are simple to make. Sports, outdoor excursions, or working with mechanical devices are a few examples of hobbies that frequently entail exploration and physical activity. You're good at solving problems and love learning how things operate. You treasure your alone time for meditation and renewal because you are an introvert, but you also value spending quality time with a small circle of friends who share your interests and respect your spontaneous and adaptable nature.      </h6>

 </div>
)}

{personalityType === "INFP" && (  
  <div className='enclose' >

  <h6  className='conc1' >
  Your personality as an INFP greatly influences your preferences for food and activities. You like meals that remind you of special memories or bring out strong emotions. Foods that are important to your culture or personal history hold a special place in your heart. You enjoy trying out unique and creative dishes because you love the way food can make you feel. You are drawn to artistic activities that allow you to express your feelings and explore your inner thoughts. Writing, poetry, and other forms of art are particularly appealing to you. To feel refreshed and inspired, you seek out peaceful and quiet places, like cozy corners or natural environments. You find value in spending time alone and often seek deeper meanings in your experiences, as you are introverted in nature. Although you might be reserved in large social gatherings, you cherish meaningful connections with a small group of people who share your values and appreciate creativity and emotional depth.
            </h6>
   </div>
)}


{personalityType === "INTP" && (  
  <div className='enclose' >

  <h6  className='conc1' >
  Your personality as an INFP greatly influences your preferences for food and activities. You like meals that remind you of special memories or bring out strong emotions. Foods that are important to your culture or personal history hold a special place in your heart. You enjoy trying out unique and creative dishes because you love the way food can make you feel. You are drawn to artistic activities that allow you to express your feelings and explore your inner thoughts. Writing, poetry, and other forms of art are particularly appealing to you. To feel refreshed and inspired, you seek out peaceful and quiet places, like cozy corners or natural environments. You find value in spending time alone and often seek deeper meanings in your experiences, as you are introverted in nature. Although you might be reserved in large social gatherings, you cherish meaningful connections with a small group of people who share your values and appreciate creativity and emotional depth.   </h6>

   </div>
)}

{personalityType === "ENFJ" && (  
  <div className='enclose' >

  <h6  className='conc1' >
Your personality, as an ENFJ, affects the things you like and do. You enjoy food and activities that bring people together and make them feel connected. You like having guests over and making your home a warm and welcoming place for your loved ones. Your interests often involve helping and supporting others, like mentoring or volunteering for social causes. Being an extravert, you enjoy social situations and can easily understand other people's feelings and needs. You have a caring and intuitive nature, which helps you connect deeply with others. You prefer a balanced and organized life and often offer support to those around you. People see you as a natural leader, seeking your guidance and love because of your kind and sensitive approach.     </h6>

   </div>
)}


{personalityType === "INTJ" && (  
  <div className='enclose' >

  <h6  className='conc1' >
  You identify as an INTJ. You have a sensible and thoughtful approach to eating and activities as an INTJ. You prefer quick and simple meals that fit well into your busy schedule, often choosing healthy options that help you stay productive. Although you may not love cooking, you appreciate well-prepared meals that are both delicious and intellectually satisfying. Your interests usually revolve around intellectual pursuits such as reading, solving puzzles, or engaging in discussions that challenge your critical thinking skills. You are always curious about new ideas and theories, and this curiosity leads you to find deeper meaning in various aspects of life. While you enjoy spending time alone for introspection, you also value being with a small group of like-minded individuals who share your interests and intellectual ambitions.       </h6>

   </div>
)}


{personalityType === "ENTJ" && (  
  <div className='enclose' >

  <h6  className='conc1' >
You have a confident and strategic personality as an ENTJ, which affects your tastes in food and pastimes. You appreciate quick and easy meals, frequently choosing options that fit into your hectic schedule and give you the energy you need to stay alert and productive. You value structured and organized meal occasions. Your interests frequently center on intellectually demanding and assertive pursuits like taking on leadership responsibilities, strategizing, or participating in conversations. You enjoy interacting with others and are a natural leader in group settings because of your extraverted personality, which makes you thrive in social circumstances. You can comprehend complicated problems with ease and generate creative solutions because to your keen and insightful personality. You appreciate efficiency and order in your life, and you frequently work obstinately to attain your objectives, which is indicated by your fondness for judging. You command a powerful and commanding presence in any group environment thanks to your self-assurance and resolve.
</h6>   </div>
)}


{personalityType === "INFJ" && (  
  <div className='enclose' >

  <h6  className='conc1' >
  You are an INFJ because you have a thoughtful and serious personality. You prefer deep conversations over small talk and like to analyze things. You enjoy trying new and unique foods that appeal to your senses. Unusual dining experiences interest you, and you like to explore different flavors. You have a creative side and enjoy activities like writing, painting, or expressing yourself through art. Taking time alone to rest and reflect is essential for you because it helps you tap into your intuitive and caring nature. Being in nature and doing things like hiking or meditation can bring you peace and help you connect with your inner self. Your strong empathy makes you a great listener and a caring friend. However, sometimes, you may struggle to set boundaries and prioritize others' needs over your own.
    </h6>
     </div>
)}

</Row>




<div>
{isAuthenticated && allEmotions.length > 0 && averageEmotion !== '' && (
<div >

<h2  className='inter'> Interview Analysis</h2>

<div 
//  style={{backgroundColor:'aliceblue' }}
 >
          <h4>Your Emotions Throughout the Interview:</h4>
          <ul className='emotion emotion-columns' >
            {allEmotions.map((emotion, index) => (
              <li key={index}>{emotion}</li>
            ))}
          </ul>
        
        </div>

        <div style={{display:'flex' , textAlign:'center' , justifyContent:'center'}}>  <h3>Average Emotion:</h3>  
        <h3 style={{color:'teal' }}>
        {averageEmotion} 
        </h3>
        </div>

        </div>
      )}
</div>


<Row>

<h5 className='lasth2' >
Do you want to know how to improve your personality? Do check our personality insights to improve your personality. <a href="/insights" >click</a>
</h5>

</Row>


{/* pdf generate div  */}
</div>    
{/* pdf generate div  */}

<div class='gapp'>

<Row>
{/* share */}
<Col md={6}>
<button class="button-89"  onClick={share} >Share my Report</button>
</Col>
{/* screenshot report  */}
<Col md={6}>
      <button class='button-89 dawn' onClick={handlePdfDownload}>Download Report</button>
      </Col>

</Row>

</div>



    </div>

</div>       
)}
















   


    </div>
  );
};



export default Result;
