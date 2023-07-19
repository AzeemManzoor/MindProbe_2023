import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import {Button, Col, Row } from "react-bootstrap";
import assessment from '../assessment/assessment.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavbar } from '../navbar/NavbarContext';
import { Container } from 'react-bootstrap/lib/Tab';





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
  }, [isAuthenticated, user , addNavbarItem]);

/* PROGRESS BAR */





  return (
    <div className='res'>
      <Row className='res1' >
      {isAuthenticated && (
<div> 
<h1 className='user1'>Dear</h1> <h1  className='user1 txt' > {user.nickname}</h1> <h1 className='user1 ' >here's  Your Personality Type </h1> 
<h1 className='type' >{personalityType}</h1>
</div>
)}
      
      </Row>

<Row className='per2' >

<Col md={6} >

{personalityType === "ENFJ" && (
  <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
  src={require('../../Assets/ENFJ.png')} style={{width:"500px" , height:"650px"}} ></img>      )}

    
{personalityType === "ESFP" && (
  <img className=''
  src={require('../../Assets/ESFP.png')} style={{width:"500px" , height:"650px"}} ></img>      )}

{personalityType === "ENTJ" && (
  <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
  src={require('../../Assets/ENTJ.png')} style={{width:"500px" , height:"650px"}} ></img>      )}


  {personalityType === "ENTP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ENTP.png')} style={{width:"500px" , height:"650px"}} ></img>      )}


{personalityType === "ESFJ" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ESFJ.png')} style={{width:"500px" , height:"650px"}} ></img>      )}


{personalityType === "ENFP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ENFP.png')} style={{width:"500px" , height:"650px"}} ></img>      )}



{personalityType === "ESTJ" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ESTJ.png')} style={{width:"500px" , height:"650px"}} ></img>      )}



{personalityType === "ESTP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ESTP.png')} style={{width:"500px" , height:"650px"}} ></img>      )}


{personalityType === "INFJ" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/INFJ.png')} style={{width:"500px" , height:"650px"}} ></img>      )}


{personalityType === "INFP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/INFP.png')} style={{width:"500px" , height:"650px"}} ></img>      )}


{personalityType === "INTJ" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/INTJ.png')} style={{width:"500px" , height:"650px"}} ></img>      )}



{personalityType === "INTP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/INTP.png')} style={{width:"500px" , height:"650px"}} ></img>      )}



{personalityType === "ISFJ" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ISFJ.png')} style={{width:"500px" , height:"650px"}} ></img>      )}


{personalityType === "ISFP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ISFP.png')} style={{width:"500px" , height:"650px"}} ></img>      )}


{personalityType === "ISTJ" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ISTJ.png')} style={{width:"500px" , height:"650px"}} ></img>      )}

{personalityType === "ISTP" && (
    <img className='wt-rounded image-overlay-img wt-vertical-center image-overlay-image--portrait wt-overlay--animation-done'
    src={require('../../Assets/ISTP.png')} style={{width:"500px" , height:"650px"}} ></img>      )}

</Col>

<Col md={6} 
 >
  







 {personalityType === "ISTJ" && (
  <div style={{width:"500px" , height:"650px" }}>   

<h4 className='info1'>  
   
   Introverted 
</h4>
<ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}   className='progress'   />


<h6 className='info' >This character's primary source of energy is their inner world of ideas, reflections, and thoughts. Spending time alone or in small groups helps introverts refuel, and they may favor situations that are quieter and more conducive to concentration.</h6>

<h4 className='info1'>    

Sensing
</h4>
 <ProgressBar completed = {40} bgColor = "red" animateOnRender = {true}  isLabelVisible = {true}  className='progress' />


<h6 className='info' >This trait indicates that the individual prefers to learn knowledge primarily through their five senses and concentrates on specific and real-world situations. They are aware of their surroundings and present-focused.</h6>

<h4 className='info1'>   

Thinking
</h4>
 <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}  className='progress'  />

<h6 className='info' >This shows that instead of being predominantly influenced by emotions, the individual tends to base their decisions on logic, reason, and unbiased analysis. Fairness, constancy, and sincerity are important to them.</h6>

<h4 className='info1'>   

Judging
</h4> 
<ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true} className='progress' />

<h6 className='info' >The judging element suggests that the subject favors a regimented and orderly way of living. They enjoy making plans, keeping to schedules, and reaching conclusions about things. Judges frequently favor consistency and predictability.</h6>

</div>
  )}

{personalityType === "ESFP" && (
   <div style={{width:"500px" , height:"650px" }}>   

   <h4 className='info1'>  
      
   Extroverted  
   </h4>
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
  
   <h6 className='info' >This character trait denotes that the individual derives the majority of their energy from the environment, other people, and activities. ESFPs typically have an outgoing personality and love connecting with people.</h6>

   <h4 className='info1'>    

   Sensing
   </h4>
   <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress'  />
   
   
   <h6 className='info' >ESFPs tend to concentrate on specifics and real-world situations. They are aware of their immediate surroundings and frequently act quickly when anything happens.</h6>
   
   <h4 className='info1'>   
   
   Feeling 
   </h4>
   <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
   
   <h6 className='info' >ESFPs base their decisions on their moral principles, their capacity for empathy, and their awareness of other people's feelings. They value peaceful relationships and are sympathetic.</h6>
   
   <h4 className='info1'>   
   
   Perceiving 
   </h4> 
   <ProgressBar completed = {50} bgColor = "grey" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
   
   <h6 className='info' >The perceiving element denotes a tendency for adaptation and flexibility. ESFPs frequently relish spontaneity and could favor maintaining a range of possibilities.</h6>
   
   </div> 
  
  
  )} 
  
  
  
  
     {/* /*   OTHER   */ }

 

{personalityType === "ENTJ" && (
   <div style={{width:"500px" , height:"650px" }}>   

   <h4 className='info1'>  
      
   Extroverted  
   </h4>
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
   
   <h6 className='info' >This character trait denotes that the individual derives the majority of their energy from the environment, other people, and activities. ENTJs typically have an outgoing personality and love connecting with people.</h6>

   <h4 className='info1'>    
   
   Intuitive
   </h4>
   <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
   
   
   <h6 className='info' >ENTJs gravitate towards patterns, possibilities, and abstract concepts. They are creative and frequently delve into the underlying significance of things that happen to them.</h6>
   
   <h4 className='info1'>   
   
   Thinking 
   </h4>
   <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress'  />
   
   <h6 className='info' >ENTJs base their conclusions on reason, logic, and unbiased analysis. They prioritize efficiency and are frequently motivated by pragmatic factors.</h6>
   
   <h4 className='info1'>   
   
   Judging 
   </h4> 
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
   
   <h6 className='info' >ENTJs want to make judgements quickly rather than deferring action because they like to have plans and routines.</h6>
   
   </div> 
  
  )}



{/* /*   OTHER   */ }


 
  {personalityType === "ENTP" && (
    <div style={{width:"500px" , height:"650px" }}>   

    <h4 className='info1'>  
       
    Extroverted  
    </h4>
    <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
    
    <h6 className='info' >
    This character trait denotes that the individual derives the majority of their energy from the environment, other people, and activities. ENTPs typically have an outgoing personality and love connecting with people.    </h6>
 
    <h4 className='info1'>    
    
    Intuitive
    </h4>
    <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress'  />

    
    <h6 className='info' >
    ENTPs base their conclusions on reason, logic, and unbiased analysis. They may be good at arguing and problem-solving, and they respect intellectual rigout.      </h6>
    
    <h4 className='info1'>   
    
    Thinking 
    </h4>
    <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
    
    <h6 className='info' >
      ENTJs base their conclusions on reason, logic, and unbiased analysis. They prioritize efficiency and are frequently motivated by pragmatic factors.
      </h6>
    
    <h4 className='info1'>   
    
    Perceiving  
    </h4> 
    <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
    
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
  <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
  
  <h6 className='info' >
  This character trait denotes that the individual derives the majority of their energy from the environment, other people, and activities. ESFPs typically have an outgoing personality and love connecting with people.  
  
  
    </h6>

  <h4 className='info1'>    
  
  Sensing
  </h4>
  <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />

  
  <h6 className='info' >
  ENTPs base their conclusions on reason, logic, and unbiased analysis. They may be good at arguing and problem-solving, and they respect intellectual rigout.      
    
    </h6>
  
  <h4 className='info1'>   
  
  Feeling 
  </h4>
  <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress'  />
  
  <h6 className='info' >
  ESFPs base their decisions on their moral principles, their capacity for empathy, and their awareness of other people's feelings. They value peaceful relationships and are sympathetic.    
    
    
    </h6>
  
  <h4 className='info1'>   
  
  Perceiving  
  </h4> 
  <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
  
  <h6 className='info' >
  The perceiving element denotes a tendency for adaptation and flexibility. ESFPs frequently relish spontaneity and could favor maintaining a range of possibilities.  
  
  
  </h6>
  
  </div>    

    )}



{personalityType === "ENFP" && (
    <div style={{width:"500px" , height:"650px" }}>   

    <h4 className='info1'>  
       
    Extroverted  
    </h4>
    <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
    
    <h6 className='info' >
    This character trait denotes that the individual derives the majority of their energy from the environment, other people, and activities. ENFPs typically have an outgoing personality and love connecting with people.

    
      </h6>
  
    <h4 className='info1'>    
    
    Intuitive
    </h4>
    <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress'  />

    
    <h6 className='info' >
ENFPs gravitate towards patterns, possibilities, and abstract concepts. They are creative and frequently delve into the underlying significance of things that happen to them.

      </h6>
    
    <h4 className='info1'>   
    
    Feeling 
    </h4>
    <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />

    <h6 className='info' >
ENFPs base their decisions on their moral principles, their capacity for empathy, and their awareness of other people's feelings. They value peaceful relationships and are sympathetic.

      
      </h6>
    
    <h4 className='info1'>   
    
    Perceiving  
    </h4> 
    <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
    
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
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
   
   <h6 className='info' >
   This character trait denotes that the individual derives the majority of their energy from the environment, other people, and activities. ESTJs typically have an outgoing personality and love connecting with people.

   
     </h6>
 
   <h4 className='info1'>    
   
   Sensing
   </h4>
   <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress'  />

   
   <h6 className='info' >
This character trait denotes that the individual derives the majority of their energy from the environment, other people, and activities. ESTJs typically have an outgoing personality and love connecting with people.

     </h6>
   
   <h4 className='info1'>   
   
   Thinking 
   </h4>
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />

   <h6 className='info' >
   ESTJs base their conclusions on reason, logic, and unbiased analysis. They prioritize efficiency and are frequently motivated by pragmatic factors.

     
     </h6>
   
   <h4 className='info1'>   
   
   Judging  
   </h4> 
   <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
   
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
    <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress'  />

    <h6 className='info' >
    This character trait denotes that the individual derives the majority of their energy from the environment, other people, and activities. ESTPs typically have an outgoing personality and love connecting with people.

    
      </h6>
  
    <h4 className='info1'>    
    
    Sensing
    </h4>
    <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
 
    
    <h6 className='info' >
As previously said, ESTPs tend to concentrate on specifics and real-world situations. They are aware of their immediate surroundings and frequently act quickly when anything happens.

      </h6>
    
    <h4 className='info1'>   
    
    Thinking 
    </h4>
    <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
 
    <h6 className='info' >
ESTPs base their conclusions on reason, logic, and unbiased analysis. They prioritize efficiency and are frequently motivated by pragmatic factors.

      
      </h6>
    
    <h4 className='info1'>   
    
    Perceiving  
    </h4> 
    <ProgressBar completed = {50} bgColor = "grey" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
    
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
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />

   <h6 className='info' >
   This denotes that the person draws most of their energy from their inner world of ideas, reflections, and thoughts. Because they are generally introspective, INFJs might require some alone time to refuel.

   
     </h6>
 
   <h4 className='info1'>    
   
   Intuitive
   </h4>
   <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress'  />

   
   <h6 className='info' >
Contrary to the "Sensing" tendency, INFJs favor concentrating on patterns, possibilities, and abstract concepts. They are perceptive and probe further to uncover underlying connections and meanings.

     </h6>
   
   <h4 className='info1'>   
   
   Feeling 
   </h4>
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />

   <h6 className='info' >
   INFJs base their decisions on their moral principles, their capacity for empathy, and their awareness of the feelings of others. They strive for harmony in their relationships and have a great deal of compassion.

     
     </h6>
   
   <h4 className='info1'>   
   
   Judging  
   </h4> 
   <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
   
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
   <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress'  />

   <h6 className='info' >
   This character's primary source of energy is their inner world of ideas, reflections, and thoughts. ISTPs have a tendency to be reticent and may relish alone time or intimate gatherings of close friends.

   
     </h6>
 
   <h4 className='info1'>    
   
   Intuitive
   </h4>
   <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress'  />

   
   <h6 className='info' >
Contrary to the "Sensing" tendency, INTJs favor concentrating on patterns, possibilities, and abstract concepts. They are perceptive, good at linking disparate ideas, and skilled at understanding the big picture.

     </h6>
   
   <h4 className='info1'>   
   
   Feeling 
   </h4>
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />

   <h6 className='info' >
   ISFPs base their decisions on their moral principles, their capacity for empathy, and their awareness of other people's feelings. They cherish others' and their own sincerity and are sympathetic.

     
     </h6>
   
   <h4 className='info1'>   
   
   Perceiving  
   </h4> 
   <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
   
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
    <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress'  />
 
    <h6 className='info' >
    This character's primary source of energy is their inner world of ideas, reflections, and thoughts. ISTPs have a tendency to be reticent and may relish alone time or intimate gatherings of close friends.
 

    
      </h6>
  
    <h4 className='info1'>    
    
    Intuitive
    </h4>
    <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
 
    
    <h6 className='info' >
Contrary to the "Sensing" tendency, INTJs favor concentrating on patterns, possibilities, and abstract concepts. They are perceptive, good at linking disparate ideas, and skilled at understanding the big picture.

      </h6>
    
    <h4 className='info1'>   
    
    Thinking 
    </h4>
    <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress'  />
 
    <h6 className='info' >
INTJs base their conclusions on reason, logic, and unbiased analysis. Efficiency is a top priority, and data and proof are frequently what motivate them. 

      
      </h6>
    
    <h4 className='info1'>   
    
    Judging  
    </h4> 
    <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
    
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
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />

   <h6 className='info' >
   This character's primary source of energy is their inner world of ideas, reflections, and thoughts. ISTPs have a tendency to be reticent and may relish alone time or intimate gatherings of close friends.


   
     </h6>
 
   <h4 className='info1'>    
   
   Intuitive
   </h4>
   <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress'  />

   
   <h6 className='info' >
INTJs favor concentrating on patterns, possibilities, and abstract concepts. They are perceptive, good at linking disparate ideas, and skilled at understanding the big picture.

     </h6>
   
   <h4 className='info1'>   
   
   Thinking 
   </h4>
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />

   <h6 className='info' >
   INTPs base their conclusions on reason, logic, and unbiased analysis. When solving problems, they emphasize efficacy and may put it ahead of feelings.

     
     </h6>
   
   <h4 className='info1'>   
   
   Perceiving  
   </h4> 
   <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
   
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
  <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />

  <h6 className='info' >
  This character's primary source of energy is their inner world of ideas, reflections, and thoughts. ISTPs have a tendency to be reticent and may relish alone time or intimate gatherings of close friends.


  
    </h6>

  <h4 className='info1'>    
  
  Sensing
  </h4>
  <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />

  
  <h6 className='info' >
  This characteristic shows that the person wants to concentrate on specific and real-world situations. ISFJs frequently exhibit these traits, as well as being perceptive and detail oriented.

    </h6>
  
  <h4 className='info1'>   
  
  Feeling 
  </h4>
  <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress'  />

  <h6 className='info' >
As opposed to the "Thinking" preference, ISFJs frequently base their decisions on moral principles, empathy for others, and an awareness of how those decisions may affect them. They value peaceful relationships and are sympathetic.

    
    </h6>
  
  <h4 className='info1'>   
  
  Judging  
  </h4> 
  <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
  
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
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
 
   <h6 className='info' >
   This character's primary source of energy is their inner world of ideas, reflections, and thoughts. ISTPs have a tendency to be reticent and may relish alone time or intimate gatherings of close friends.

 
   
     </h6>
 
   <h4 className='info1'>    
   
   Sensing
   </h4>
   <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
 
   
   <h6 className='info' >
ISTPs tend to concentrate on specifics and real-world situations, in contrast to the "Intuitive" preference. They are perceptive and adept at navigating the immediate, material world.

     </h6>
   
   <h4 className='info1'>   
   
   Feeling 
   </h4>
   <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
 
   <h6 className='info' >
ISFPs base their decisions on their moral principles, their capacity for empathy, and their awareness of other people's feelings. They cherish others' and their own sincerity and are sympathetic. 

     
     </h6>
   
   <h4 className='info1'>   
   
   Perceiving  
   </h4> 
   <ProgressBar completed = {50} bgColor = "grey" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
   
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
    <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress'  />
    
    <h6 className='info' >
    This character trait denotes that the individual derives the majority of their energy from the environment, other people, and activities. ENFJs typically have an outgoing personality and love connecting with people.

    
      </h6>
  
    <h4 className='info1'>    
    
    Intuitive
    </h4>
    <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />

    
    <h6 className='info' >
ENFJs gravitate towards patterns, possibilities, and abstract concepts. They are creative and frequently delve into the underlying significance of things that happen to them.

      </h6>
    
    <h4 className='info1'>   
    
    Feeling 
    </h4>
    <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}  className='progress'  />

    <h6 className='info' >
ENFPs base their decisions on their moral principles, their capacity for empathy, and their awareness of other people's feelings. They value peaceful relationships and are sympathetic.


      
      </h6>
    
    <h4 className='info1'>   
    
    Judging  
    </h4> 
    <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}   className='progress'  />
    
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
     <ProgressBar completed = {80} bgColor = "green" animateOnRender = {true} isLabelVisible = {true}   className='progress'   />
     
     
     <h6 className='info' >This character's primary source of energy is their inner world of ideas, reflections, and thoughts. ISTPs tend to be reticent and may relish alone time or intimate gatherings of close friends.</h6>
     
     <h4 className='info1'>    
     
     Sensing
     </h4>
      <ProgressBar completed = {40} bgColor = "red" animateOnRender = {true}  isLabelVisible = {true}  className='progress' />
     
     
     <h6 className='info' > ISTPs tend to concentrate on specific and real-world situations, in contrast to the "Intuitive" preference. They are perceptive and adept at navigating the immediate, material world.</h6>
     
     <h4 className='info1'>   
     
     Thinking
     </h4>
      <ProgressBar completed = {70} bgColor = "orange" animateOnRender = {true} isLabelVisible = {true}  className='progress'  />
     
     <h6 className='info' >ISTPs base their conclusions on reason, logic, and unbiased analysis. When solving problems, they emphasize efficacy and may put it ahead of feelings.</h6>
     
     <h4 className='info1'>   
     
     Judging
     </h4> 
     <ProgressBar completed = {60} bgColor = "magenta" animateOnRender = {true} isLabelVisible = {true} className='progress' />
     
     <h6 className='info' >The perceiving aspect suggests a tendency for adaptation and flexibility. ISTPs frequently have an open mind and prefer to keep their alternatives open than making firm decisions.</h6>
     
     </div>
  
  
  )} 

</Col>
</Row>

<Row className='conc' >

{personalityType === "ESTP" && (  
 <div>

<h4  className='user1 txt' > {user.nickname}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 16.2% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}

{personalityType === "ESFJ" && (  
 <div>

<h4  className='user1 txt' > {user.nickname}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 14.8% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}

{personalityType === "ESFP" && (  
 <div>

<h4  className='user1 txt' > {user.nickname}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 10.9% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}


{personalityType === "ESTJ" && (  
 <div>

<h4  className='user1 txt' > {user.nickname}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 9.5% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}

{personalityType === "ENFP " && (  
 <div>

<h4  className='user1 txt' > {user.nickname}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 6.9% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}

{personalityType === "ISFJ" && (  
 <div>

<h4  className='user1 txt' > {user.nickname}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 6.5% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}



{personalityType === "ISTJ" && (  
 <div>

<h4  className='user1 txt' > {user.nickname}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 5.9% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}

{personalityType === "ISFP" && (  
 <div>

<h4  className='user1 txt' > {user.nickname}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 5.3% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}


{personalityType === "ENTP" && (  
 <div>

<h4  className='user1 txt' > {user.nickname}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 5.3% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}

{personalityType === "ISTP" && (  
 <div>

<h4  className='user1 txt' > {user.nickname}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 4.9% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}

{personalityType === "INFP" && (  
 <div>

<h4  className='user1 txt' > {user.nickname}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 4.0% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}


{personalityType === "INTP" && (  
 <div>

<h4  className='user1 txt' > {user.nickname}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 3.0% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}

{personalityType === "ENFJ" && (  
 <div>

<h4  className='user1 txt' > {user.nickname}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 2.4% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}


{personalityType === "INTJ" && (  
 <div>

<h4  className='user1 txt' > {user.nickname}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 1.9% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}


{personalityType === "ENTJ" && (  
 <div>

<h4  className='user1 txt' > {user.nickname}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 1.4% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}


{personalityType === "INFJ" && (  
 <div>

<h4  className='user1 txt' > {user.nickname}!</h4> <h4 className='user1'>Do you know,</h4> <h4 className='user1 ' >study shows that</h4> 
<h4 className='user1 clr'> 1.2% </h4>
<h4 className='user1'>of the world population has </h4><h4 className='type user1'  > {personalityType} </h4><h4  className='user1'>personality type.</h4>


 </div>
)}
</Row>


{/* rowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwajdjxbjcbidbcdbucbduivbjdzbvbxjvbjkbjxbvjxbvjbxjvbxv */}

<Row>

<h2>More About You:</h2>


</Row>


<Row className='roww'>

{personalityType === "ESTP" && (  
 <div   className='enclose' >

<h6  className='conc1' >
You are an ESTP, and your enthusiasm and drive are reflected in your tastes in food and pastimes. You like hearty, savory meals and frequently look for new, fascinating culinary experiences. You enjoy experimenting with other cuisines and trying new foods. Your interests are frequently physical and hands-on, whether they be sports, outdoor excursions, or thrill-seeking activities. You naturally like being in the present and taking pleasure in unplanned events. Due to your extraverted nature, you do best in social situations where you can engage with people and showcase your upbeat and charismatic personality. You are able to handle a variety of situations with ease since you are flexible and quick-witted. You can interact with a variety of individuals thanks to your outgoing personality, which also makes it easy for you to fully appreciate new situations.

</h6>


 </div>
)}

{personalityType === "ESFJ" && (  
 <div className='enclose' >

 <h6  className='conc1' >
 Your warm and nurturing temperament as an ESFJ affects your taste in cuisine and activities. You take pleasure in meals that promote social interaction and a sense of community, frequently choosing dishes that are tailored to the tastes and preferences of those who are there. You value eating together and fostering a friendly atmosphere. Your interests frequently center on helping others and fostering relationships, whether by volunteering, hosting events or participating in social gatherings. You enjoy interacting with others and being the life of the party because of your extraverted personality, which makes you flourish in social situations. You are a great listener and friend because of your sympathetic and empathic nature. You appreciate structure and order in your life, and you frequently work to create harmony and stability in your surroundings, which is indicated by your affinity for judging. You are a useful and well-liked member of any social gathering due to your kind and outgoing personality. 
 </h6>
 
 
  </div>
)}

{personalityType === "ESFP" && (  
  <div className='enclose' >

  <h6  className='conc1' >
  Your vibrant and expressive character as an ESFP affects your taste in food and pastimes. You choose delicious, vivid foods that please your taste buds and meals that stimulate your senses. You eagerly welcome the experience of trying out many new foods. Your interests are frequently social and interactive pursuits, whether it is dancing, performing arts, or recreational sports. You naturally have a gift for making others laugh and like being the center of attention. Because of your extraverted personality, you enjoy being among people and establishing new acquaintances effortlessly. You like to look for excitement and thrill in new situations since you are impulsive and adaptive. You can interact with others on a deeper level thanks to your warm and sympathetic attitude, and you respect the emotional bonds you forge with other people. You are a magnet for fun and excitement in any social setting thanks to your adventurous personality and love for life.  </h6>
  
  
   </div>
)}


{personalityType === "ESTJ" && (  
  <div className='enclose' >

<h6  className='conc1' >
Your realistic and deliberate personality as an ESTJ is reflected in your tastes in food and pastimes. You appreciate meals that are consistently prepared and tasty, frequently choosing comforting and satisfying cuisine from your childhood. You like how organized and effective your meal choices are. Your pastimes frequently involve leading and planning activities, such as organizing events, playing team sports, or working on tasks that call for strategic planning and problem-solving. You enjoy interacting with people and taking the lead in group settings because of your extraverted nature, which makes you thrive in social circumstances. You are a natural leader who appreciates order and discipline because to your strong sense of duty and logical reasoning. Your preference for judging suggests that you place a high priority on preparation and work obstinately to achieve your objectives. You are a useful team member and someone who can be trusted to complete tasks effectively because to your practical and dependable character.
</h6>
 </div>
)}

{personalityType === "ENFP " && (  
  <div className='enclose' >

  <h6  className='conc1' >
  Your vibrant and expressive character as an ESFP affects your taste in food and pastimes. You choose delicious, vivid foods that please your taste buds and meals that stimulate your senses. You eagerly welcome the experience of trying out many new foods. Your interests are frequently social and interactive pursuits, whether it is dancing, performing arts, or recreational sports. You naturally have a gift for making others laugh and like being the center of attention. Because of your extraverted personality, you enjoy being among people and establishing new acquaintances effortlessly. You like to look for excitement and thrill in new situations since you are impulsive and adaptive. You can interact with others on a deeper level thanks to your warm and sympathetic attitude, and you respect the emotional bonds you forge with other people. You are a magnet for fun and excitement in any social setting thanks to your adventurous personality and love for life.
    </h6>
   </div>
)}

{personalityType === "ISFJ" && (  
 <div className='enclose' >

 <h6  className='conc1' >
 You have a nurturing and loving personality if you're an ISFJ, which is shown in your taste for warm, comforting cuisine like home-cooked meals. As a method to show your love and concern for others, you delight in preparing meals for them. You frequently gravitate towards pastimes like art, writing, or gardening because they let you connect with your emotions. You may find therapeutic value in spending time in nature and caring for plants. You are an excellent listener and encouraging friend because of your attention to detail and capacity for mindfulness of others' needs. While you may be conflict-avoidant and sensitive to criticism, you may also value peace and cooperation in your relationships.
    </h6>
  </div>
)}



{personalityType === "ISTJ" && (  
 <div className='enclose' >

 <h6  className='conc1' >
 You identify as an ISTJ, your food preferences are probably straightforward and conventional. You might love comforting, recognizable dishes from the past and value their consistency. Your favorite foods are probably those that are satisfying, easily prepared, and useful. You might prefer to stick to what you know and appreciate rather than being overly adventurous when it comes to tasting new foods. You are drawn to hobbies like organizing your home, woodworking, or gardening because they appeal to your practical and analytical side. Your activities may reflect your thorough attention to detail and need for organization. You enjoy the process of honing your abilities and take excitement in developing and completing things.
     </h6>
  </div>
)}

{personalityType === "ISFP" && (  
  <div className='enclose' >

<h6  className='conc1' >
You are an ISFP, which means that you are sensitive and expressive in both your culinary and leisure interests. You appreciate meals that provoke feelings and artistic flare because they allow you to savor the sensory experience of eating. Trying new foods and flavors, especially those that go along with your emotional relationship to food, may bring you joy. Your interests are frequently centered around artistic and creative activities that give you the chance to express yourself, including writing, music, or painting. You may find it therapeutic to spend time in nature or to participate in outdoor activities because it revitalizes and inspires you. You treasure deep and lasting ties with a select group of close friends who are aware of and respect your sensitive and adaptive nature. Your introverted nature implies that you value your personal space and time for introspection.
    </h6>
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
You approach food and pastimes in a practical and hands-on manner if you identify as an ISTP. You appreciate uncomplicated, plain recipes that delight your palate without adding needless complexity. You might enjoy experimenting with new meals that appeal to your adventurous side, but you often prefer the efficiency and practicality of foods that are simple to make. Sports, outdoor excursions, or working with mechanical devices are a few examples of hobbies that frequently entail exploration and physical activity. You're good at solving problems and love learning how things operate. You treasure your alone time for meditation and renewal because you are an introvert, but you also value spending quality time with a small circle of friends who share your interests and respect your spontaneous and adaptable nature.
      </h6>
 </div>
)}

{personalityType === "INFP" && (  
  <div className='enclose' >

  <h6  className='conc1' >
  Your intensely introspective and inventive temperament as an INFP affects your taste in food and pastimes. You prefer to love meals that bring back memories and feelings, and you value foods that are significant to your culture or personal history. You may be intrigued by trying out unusual and creative culinary dishes because you value the sensory experience that food provides. Your interests are frequently centered on artistic endeavors that let you express your feelings and explore your rich inner world, such as writing, poetry, or other types of artistic expression. You must spend time in calm, serene settings, such as cozy areas or natural settings, in order to rejuvenate and find inspiration. You appreciate isolation and look for meaning and purpose in your experiences since you are an introverted person. Even though you could be reserved in large social gatherings, you value genuine connections with a select few people who share your beliefs and have an appreciation for creativity and emotional depth.
          </h6>
   </div>
)}


{personalityType === "INTP" && (  
  <div className='enclose' >

  <h6  className='conc1' >
  You have an analytical and inquisitive personality type, which affects your diet and hobby preferences. You appreciate eating meals that let you experiment with new flavors and combinations. You frequently find excitement in trying out new foods and culinary methods. Your interests are centered on cerebral activities like reading, crossword puzzles, and complicated problem-solving. Your natural curiosity about how things work may inspire you to investigate numerous scientific or technology topics. Because of your introverted nature, you cherish your alone time for reflection and deep thinking, but you also love conversing and exchanging ideas with others who share your interests in thought-provoking conversation. You may approach new experiences and problems with a sense of curiosity and flexibility because to your versatile and open-minded nature.
   </h6>
   </div>
)}

{personalityType === "ENFJ" && (  
  <div className='enclose' >

  <h6  className='conc1' >
  Your tastes in cuisine and pastimes are influenced by your charming and empathic character as an ENFJ. You take pleasure in meals that foster camaraderie and bring people together, frequently selecting dishes that satisfy the preferences and requirements of others. You enjoy entertaining guests and establishing a cozy atmosphere for your loved ones. Your interests are frequently centered around activities like mentoring, volunteering, or supporting social initiatives that benefit others. Because of your extraverted personality, you like social situations and are perceptive to the wants and feelings of others. You can connect and comprehend others on a deep level thanks to your insightful and intuitive personality. You appreciate harmony and order in your life, which is evident from your predilection for passing judgement. You also frequently work to establish a supportive environment for both yourself and those around you. You are a natural leader who people can look to for advice and support because of your sensitive and loving attitude.
     </h6>
   </div>
)}


{personalityType === "INTJ" && (  
  <div className='enclose' >

  <h6  className='conc1' >
  You have a rational and strategic attitude, which is evident in how you approach eating and activities as an INTJ. You favor quick, easy meals that fit into your hectic schedule, frequently choosing healthy selections that increase your productivity. Even though cooking isn't your favorite pastime, you value a meal that is expertly made and appeals to both your senses of taste and intellect. Your interests tend to be in intellectual pursuits like reading, solving puzzles, or participating in discussions that test your critical thinking abilities. Your curiosity for new concepts and theories inspires you to look for deeper significance in a variety of spheres of life You enjoy your alone time for reflection, but you also value quality time with a small group of people who share your interests and intellectual ambitions.
       </h6>
   </div>
)}


{personalityType === "ENTJ" && (  
  <div className='enclose' >

  <h6  className='conc1' >
  You have a confident and strategic personality as an ENTJ, which affects your tastes in food and pastimes. You appreciate quick and easy meals, frequently choosing options that fit into your hectic schedule and give you the energy you need to stay alert and productive. You value structured and organized meal occasions. Your interests frequently center on intellectually demanding and assertive pursuits like taking on leadership responsibilities, strategizing, or participating in conversations. You enjoy interacting with others and are a natural leader in group settings because of your extraverted personality, which makes you thrive in social circumstances. You can comprehend complicated problems with ease and generate creative solutions because to your keen and insightful personality. You appreciate efficiency and order in your life, and you frequently work obstinately to attain your objectives, which is indicated by your fondness for judging. You command a powerful and commanding presence in any group environment thanks to your self-assurance and resolve.       </h6>
   </div>
)}


{personalityType === "INFJ" && (  
  <div className='enclose' >

  <h6  className='conc1' >
  Because of your analytical personality and preference for serious interactions over idle banter, you are an INFJ. You value culinary creations that appeal to your senses and exhibit some originality. You're curious about trying out new foods and flavors, and you like learning about unusual dining situations. Your interests are frequently centered around creative activities that let you express your emotions, including writing, painting, or other forms of artistic expression. You must make time for solitude to rest and contemplate since doing so allows you to access your intuitive and sympathetic side. Nature can provide peace, and pursuits like hiking or meditation can help you regain equilibrium and re-establish contact with your inner self. Your strong capacity for empathy. You are a great listener and a helpful friend because of your empathy and compassion, but you may find it difficult to set limits and frequently put the needs of others before your own.
  </h6>
     </div>
)}






















































































</Row>

















    </div>
  );
};



export default Result;


