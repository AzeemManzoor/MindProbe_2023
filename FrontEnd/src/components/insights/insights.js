import React from 'react'
import insights from './insights.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { Col, Row } from "react-bootstrap";
import { Container } from 'react-bootstrap/lib/Tab';
import { CountdownCircleTimer } from "react-countdown-circle-timer";


const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">DONE...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};


const Insights = () => {

    const { user, isAuthenticated } = useAuth0();
    const [personalityType, setPersonalityType] = useState('');
    useEffect(() => {
      const fetchData = async () => {
        if (isAuthenticated && user && user.name) {
          // console.log('Logged-in userId:', user.name); // Log the logged-in user's userId
          try {
            const response = await axios.get('http://localhost:4000/personalityTypes');
            // console.log('API Response:', response.data);
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
    }, [isAuthenticated, user ]);
  
    const [allEmotions, setAllEmotions] = useState([]);
    const [averageEmotion, setAverageEmotion] = useState('');
    
    useEffect(() => {
      const fetchData = async () => {
        if (isAuthenticated && user && user.name) {
          try {
            const response = await axios.get('http://localhost:4000/emotions', {
              params: {
                userId: user.name
              }
            });
            console.log('Emotions API Response:', response.data);
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





    const [isPopupOpen, setIsPopupOpen] = useState(true); // Set to true initially
    const closePopup = () => {
      setIsPopupOpen(false);
    };
  
    // You can also use useEffect to automatically close the popup after a certain time
    useEffect(() => {
      const timeout = setTimeout(() => {
        closePopup();
      }, 11000); // Close the popup after 8000 (mili)seconds (adjust as needed)
  
      return () => clearTimeout(timeout);
    }, []);



  return (
    <div>


{isPopupOpen && (
        <div className="popup1">
          <div className="popup1-content1">
<div>


<h2>Please Wait...</h2>

<div className="timerr">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>

    </div>
    <p className="info2">
        We are getting your Insights...
      </p>

</div>
          </div>
        </div>
      )}








    <Row className='ins1' >

      <h2 >Insights</h2> 
    </Row>


{personalityType === "INFP" && (
    <div>


<Row className='ins2'>

      <h3 className='type' >INFP : The Healer</h3> 
    </Row>



<Row>

<Col md={6} >
<h3 className='instxt' >Strength</h3>
<h4 className='instxt1 type' > Standing up for what you believe in</h4>
<h5 className='insh5' >An INFP’s biggest strength is their ability to stand up for what they believe in. They are idealists, and they often have very strong opinions about the world and the way that it should be. They are passionate about their beliefs, and they are willing to fight for what they believe in. They are not ones to ever compromise on their values. INFPs are also very good at standing up for themselves and their morals, and they are often able to convince others to see things their way. See Luna Lovegood from Harry Potter. She is an INFP individualist who always stands up for what she believes in.</h5>



</Col>

<Col md={6} >
<h3 className='instxt' >Weekness</h3>
<h4 className='instxt1 type' >Stubborn</h4>
<h5 className='insh5' >INFP’s are notoriously stubborn. Everyone can be a little stubborn at times, but INFPs seem to take it to a whole other level. If they believe in something, they will stand by it no matter what. This can be both a good and a bad thing. On one hand, it means that they are very principled and have strong convictions. They are unlikely to give up on their beliefs easily. On the other hand, it can make them inflexible and unwilling to budge, even when it would be in their best interest to do so. See Mike Ross from Suits, a morally stubborn INFP if ever there was one.</h5>


</Col>

</Row>  


<Row className='ins1' >

<h2 >How to improve?</h2> 
</Row>


<Row>


<div className='coli' > 

<ul>
<h5>
While striving for a better world, remember to take practical steps to manifest your dreams
</h5>
<h5>
Treat yourself with the same kindness you offer to others

</h5>
<h5>
Create routines that provide a sense of stability and support
</h5>
<h5>
Express your unique perspectives and ideas openly with others
</h5>
<h5>
Learn to say no when necessary to protect your own well-being
</h5>
<h5>
Spend time outdoors to find inspiration and rejuvenation
</h5>
<h5>
Practice mindfulness techniques to quiet your mind and reduce stress
</h5>
<h5>
Engage in teamwork to combine your strengths with those of others
</h5>
<h5>
Be open to new possibilities and adapt to different circumstances
</h5>
<h5>
Engage in artistic activities that allow you to express yourself
</h5>

</ul>
</div>




</Row>



    </div>   
 
  )}




{personalityType === "ENFP" && (
    <div>


<Row className='ins2'>

      <h3 className='type' >ENFP : The Champion</h3> 
    </Row>



<Row>

<Col md={6} >
<h3 className='instxt' >Strength</h3>
<h4 className='instxt1 type' > Thinking outside the box</h4>
<h5 className='insh5' >
ENFPs are always looking for new and innovative ways to do things. They are very creative, and they are able to come up with unique solutions to problems. This is often due to their deep intuition. ENFPs are also very good at thinking outside of the box, and they are often able to see things from a different perspective. This allows them to be very open-minded, and they are often able to find new and interesting ways to approach things. See Joyce Byers from Stranger Things. She is an ENFP who is always thinking outside the box in order to find her son.
</h5>


</Col>

<Col md={6} >
<h3 className='instxt' >Weekness</h3>
<h4 className='instxt1 type' >Flighty</h4>
<h5 className='insh5' >
ENFPs are often seen as flighty and indecisive. They may start a project with a lot of enthusiasm, but then quickly lose interest and move on to something else. This can be frustrating for those who have to work with them, as it can be difficult to get them to commit to anything. However, this trait can also be seen as a strength, as it allows ENFPs to be very adaptable and open to new ideas. They may not always follow through on everything they start, but they are always open to new possibilities. See Phoebe Buffay from Friends, the flightiest one in the group.
  </h5>


</Col>

</Row>  


<Row className='ins1' >

<h2 >How to improve?</h2> 
</Row>


<Row>


<div className='coli' > 

<ul>
<h5>
Channel your enthusiasm towards a few core goals to bring them to fruition
</h5>
<h5>
Learn to say no when necessary to prevent overwhelm
</h5>
<h5>
Create routines that provide a sense of stability and organization
</h5>
<h5>
Practice making choices based on your values and goals
</h5>
<h5>
While curiosity is great, commit to seeing projects through to completion
</h5>
<h5>
Break tasks into smaller steps to overcome procrastination
</h5>
<h5>
Pay attention to others' perspectives to build stronger relationships 
</h5>
<h5>
Take time to evaluate your experiences and learn from them 
</h5>
<h5>
Allow time for ideas and projects to develop naturally
</h5>
<h5>
Express your thoughts and creative insights with confidence
</h5>

</ul>
</div>
</Row>
    </div>   
 
  )}




{personalityType === "ENFJ" && (
    <div>


<Row className='ins2'>

      <h3 className='type' >ENFJ : The Teacher</h3> 
    </Row>



<Row>

<Col md={6} >
<h3 className='instxt' >Strength</h3>
<h4 className='instxt1 type' > Putting others before yourself</h4>
<h5 className='insh5' >
ENFJs are natural leaders, and they often put the needs of others before their own. They are very caring and compassionate, and they want nothing more than to see others succeed. ENFJs will go out of their way to help others, even if it means sacrificing their own time or energy. They are also very good at reading people, and they often know exactly what others need in order to be happy. See Diana Prince, AKA Wonder Woman, from the DC Extended Universe. She is an ENFJ who is always putting others before herself and trying to help those in need, it’s what makes her such a great superhero.
</h5>


</Col>

<Col md={6} >
<h3 className='instxt' >Weekness</h3>
<h4 className='instxt1 type' >Smothering</h4>
<h5 className='insh5' >
ENFJs can sometimes be seen as smothering. They may be overly attentive and try to control every aspect of their loved ones’ lives. This can be a bit much for some people, who may feel like they can’t breathe with an ENFJ around. ENFJs need to remember that not everyone wants to be suffocated with love and attention. However, this trait can also be seen as a strength, as it shows that ENFJs are very caring and protective of those they love. They may just need to learn to tone it down a bit. See Love Quinn from YOU, who smothers Joe.
  </h5>


</Col>

</Row>  


<Row className='ins1' >

<h2 >How to improve?</h2> 
</Row>


<Row>


<div className='coli' > 

<ul>
<h5>
Learn to say no when needed to avoid overextending yourself
</h5>
<h5>
Prioritize your well-being to continue supporting others effectively.
</h5>
<h5>
Encourage honest dialogue and active listening in your relationships
</h5>
<h5>
Balance your desire to help with your personal limits
</h5>
<h5>
Define your goals and create a structured plan to achieve them
</h5>
<h5>
Understand and manage your emotions and those of others
</h5>
<h5>
Engage with diverse perspectives to enhance your leadership skills
</h5>
<h5>
Work towards a better world while also taking practical steps to achieve it
</h5>
<h5>
Adapt your strategies as circumstances evolve to remain effective
</h5>
<h5>
Demonstrate the values and qualities you wish to instill in others 
</h5>

</ul>
</div>
</Row>
    </div>   
 
  )}





{personalityType === "INTP" && (
    <div>


<Row className='ins2'>

      <h3 className='type' >INTP : The Architect</h3> 
    </Row>



<Row>

<Col md={6} >
<h3 className='instxt' >Strength</h3>
<h4 className='instxt1 type' > Understanding abstract concepts</h4>
<h5 className='insh5' >
INTPs are extremely intelligent, and they often have a very deep understanding of abstract concepts. They are able to see the world in a different way, and they are often able to find new and interesting ways to approach problems. INTPs pick up on unique patterns that others miss. This allows them to be very innovative, and they are often able to come up with unique solutions to problems. See Sherlock Holmes from the Sherlock Holmes franchise. He is an INTP who is able to understand abstract concepts and see the world in a completely different way.
</h5>


</Col>

<Col md={6} >
<h3 className='instxt' >Weekness</h3>
<h4 className='instxt1 type' >Insensitive</h4>
<h5 className='insh5' >
INTPs are often seen as insensitive and uncaring. They may come across as cold and unemotional. This is because they often prefer to live in their own heads, and so they can struggle to understand the emotions of others. However, this trait isn’t always a negative, as it means that INTPs are very rational and logical. They are able to see things from a detached perspective, and so they can make very objective decisions. See April Ludgate from Parks and Recreation, the insensitive intern.
  </h5>


</Col>

</Row>  


<Row className='ins1' >

<h2 >How to improve?</h2> 
</Row>


<Row>


<div className='coli' > 

<ul>
<h5>
Acknowledge and understand your feelings to enhance your interpersonal relationships
</h5>
<h5>
Define clear objectives and create a structured plan to achieve them
</h5>
<h5>
Express your thoughts and ideas, even if they seem unconventional
</h5>
<h5>
Engage in teamwork to access diverse viewpoints and insights
</h5>
<h5>
Break tasks into smaller steps to tackle them more effectively
</h5>
<h5>
Embrace constructive criticism to refine your ideas and projects
</h5>
<h5>
Practice making choices confidently based on logic and analysis
</h5>
<h5>
Take breaks and engage in activities that rejuvenate your mind
</h5>
<h5>
While autonomy is important, reach out for help and support when needed
</h5>
<h5>
Allow time for your plans and projects to develop at their own pace
</h5>

</ul>
</div>
</Row>
    </div>   
 
  )}





{personalityType === "ENTP" && (
    <div>


<Row className='ins2'>

      <h3 className='type' >ENTP : The Visionary</h3> 
    </Row>



<Row>

<Col md={6} >
<h3 className='instxt' >Strength</h3>
<h4 className='instxt1 type' > Inspiring new points of view</h4>
<h5 className='insh5' >
An ENTP’s biggest strength is their ability to inspire new points of view. They are very good at looking at the world from a different perspective, and they are often able to see things that others miss. This allows them to be very open-minded, and they are often able to find new and interesting ways to approach things. ENTPs are natural debaters, and they often enjoy playing devil’s advocate. This skill means they can get people to see things from a different perspective, and it can often lead to new and innovative ideas. See Tony Stark from Iron Man. He is an ENTP who often inspires others to see things from a different perspective.
</h5>


</Col>

<Col md={6} >
<h3 className='instxt' >Weekness</h3>
<h4 className='instxt1 type' >Argumentative</h4>
<h5 className='insh5' >
ENTPs are famously argumentative. They love to debate and they are always up for a good discussion. This can sometimes be frustrating for those who have to live with them, as they may never seem to agree on anything. However, this trait is also a strength, as it means that ENTPs are very open-minded and willing to see both sides of every issue. They are also very good at thinking on their feet and coming up with quick solutions to problems. See Tyler Durden from Fight Club, the epitome of the argumentative ENTP.
  </h5>


</Col>

</Row>  


<Row className='ins1' >

<h2 >How to improve?</h2> 
</Row>


<Row>


<div className='coli' > 

<ul>
<h5>
Complete projects before jumping to new ideas to fully realize your potential
</h5>
<h5>
Define your ambitions and create a structured plan to achieve them
</h5>
<h5>
Establish routines that help you balance your creative energy
</h5>
<h5>
Work on understanding others' emotions and perspectives
</h5>
<h5>
Find strategies to stay focused on tasks even when tempted to wander
</h5>
<h5>
Embrace critique to enhance your projects and ideas
</h5>
<h5>
Engage with diverse viewpoints to expand your creative thinking
</h5>
<h5>
Take a moment to consider decisions before acting on them
</h5>
<h5>
Pursue activities and concepts that challenge and stimulate your mind
</h5>
<h5>
Allow time for your plans and goals to develop and flourish
</h5>

</ul>
</div>
</Row>
    </div>   
 
  )}



{personalityType === "INTJ" && (
    <div>


<Row className='ins2'>

      <h3 className='type' >INTJ : The Mastermind</h3> 
    </Row>



<Row>

<Col md={6} >
<h3 className='instxt' >Strength</h3>
<h4 className='instxt1 type' > Turning your vision into reality</h4>
<h5 className='insh5' >
INTJs are very strategic, and they are naturals when it comes to turning their vision into reality. They are often able to see the big picture, and they are very good at planning for the future. This allows them to be very successful in their chosen field, and it also means that they are often able to achieve their goals. INTJs are also very independent, and they often prefer to work alone. This allows them to focus on their vision and get things done efficiently. See Bruce Wayne, AKA Batman, from The Dark Knight franchise. He is an INTJ who is able to turn his vision of saving Gotham into reality.
</h5>


</Col>

<Col md={6} >
<h3 className='instxt' >Weekness</h3>
<h4 className='instxt1 type' >Impatient</h4>
<h5 className='insh5' >
INTJs are known for their impatience. They can be very intolerant of those who don’t think as quickly as they do, and they may have little patience for small talk or idle chatter. This can sometimes make them seem rude or abrupt. However, INTJs are very focused and driven people, and so this trait can also be seen as a strength. They may not always be the most patient people, but they are usually very efficient and effective in everything they do. See Kat Stratford from 10 Things I Hate About You, the eye-rolling impatient INTJ.
  </h5>


</Col>

</Row>  


<Row className='ins1' >

<h2 >How to improve?</h2> 
</Row>


<Row>


<div className='coli' > 

<ul>
<h5>
Engage with diverse perspectives to enhance your innovative problem-solving skills
</h5>
<h5>
Work on understanding and managing your own emotions, as well as others'
</h5>
<h5>
Express your thoughts to others, even if they're not fully formed yet
</h5>
<h5>
Be open to adjusting your plans when new information arises
</h5>
<h5>
Make an effort to connect with others on a personal level, not just professionally
</h5>
<h5>
Allow yourself time to rest and recharge, enhancing your overall productivity
</h5>
<h5>
Engage in activities that push you out of your comfort zone to promote growth
</h5>
<h5>
Aim for excellence while acknowledging that perfection is unattainable
</h5>
<h5>
Work on expressing your thoughts clearly and concisely to avoid misunderstandings
</h5>
<h5>
Occasionally let go of strict planning and embrace the unexpected
</h5>

</ul>
</div>
</Row>
    </div>   
 
  )}



{personalityType === "ENTJ" && (
    <div>


<Row className='ins2'>

      <h3 className='type' >ENTJ : The Commander</h3> 
    </Row>



<Row>

<Col md={6} >
<h3 className='instxt' >Strength</h3>
<h4 className='instxt1 type' > Unwavering resilience & determination</h4>
<h5 className='insh5' >
ENTJs are very resilient and determined, and they often stick to their guns no matter what. They are the ultimate masters at planning and executing their plans, and they are often able to achieve their targets. ENTJs will do anything it takes to reach their goals, and they are often very successful. However, this can sometimes be at the expense of the rules. See Harvey Specter from Suits. He is an ENTJ who is very resilient and determined, and he will do whatever it takes to achieve his goals.
</h5>


</Col>

<Col md={6} >
<h3 className='instxt' >Weekness</h3>
<h4 className='instxt1 type' >Intolerant</h4>
<h5 className='insh5' >
ENTJs are notoriously intolerant. They can be very impatient with those who don’t think as quickly as they do, and they may have little patience for small talk or idle chatter. This can sometimes make them seem rude or abrupt. However, ENTJs are very focused and driven people, and so this trait can also be seen as a strength. They may not always be the most patient people, but they are usually very efficient and effective in everything they do. See Miranda Priestly from The Devil Wears Prada, who has zero tolerance for anything less than perfect.
  </h5>


</Col>

</Row>  


<Row className='ins1' >

<h2 >How to improve?</h2> 
</Row>


<Row>


<div className='coli' > 

<ul>
<h5>
Allowing time for plans to develop can lead to more effective long-term strategies
</h5>
<h5>
Understand and manage your own emotions and those of others
</h5>
<h5>
Engage with diverse viewpoints to enhance your leadership abilities
</h5>
<h5>
Be open to adjusting your approaches based on new information
</h5>
<h5>
Define your ambitions and create a structured plan to achieve them
</h5>
<h5>
Engage in relaxation techniques to maintain well-being during demanding times
</h5>
<h5>
Use critique to refine your strategies and leadership style
</h5>
<h5>
Prioritize self-care to prevent burnout and maintain a healthy equilibrium
</h5>
<h5>
Adapt your plans to evolving circumstances and challenges
</h5>
<h5>
Trust your team members with responsibilities and encourage their growth
</h5>

</ul>
</div>
</Row>
    </div>   
 
  )}





{personalityType === "ISFJ" && (
    <div>


<Row className='ins2'>

      <h3 className='type' >ISFJ : The Protector</h3> 
    </Row>



<Row>

<Col md={6} >
<h3 className='instxt' >Strength</h3>
<h4 className='instxt1 type' > Sticking to your word</h4>
<h5 className='insh5' >
ISFJs are very loyal, and they often stick to their word no matter what. If they say they are going to do something, you can bet that they will do it. This makes them amazing friends, partners, and employees as you know you can count on them to follow through. ISFJs are also very reliable, and they always put others before themselves. However, this can sometimes mean that they are taken advantage of. See Samwise Gamgee from The Lord of the Rings. He is an ISFJ who sticks to his word no matter what, and he always puts Frodo before himself.
</h5>


</Col>

<Col md={6} >
<h3 className='instxt' >Weekness</h3>
<h4 className='instxt1 type' >Oversensitive</h4>
<h5 className='insh5' >
ISFJs are often seen as oversensitive. They may take things too personally, and they may have a hard time letting things go. This can be frustrating for those who have to deal with them, as they may seem overly emotional or dramatic. However, this trait can also be seen as a strength, as it means that ISFJs are very compassionate and caring. They are quick to comfort others, and they are always there for the people they care about. See Pam Beesly from The Office US, the epitome of the oversensitive ISFJ.
  </h5>


</Col>

</Row>  


<Row className='ins1' >

<h2 >How to improve?</h2> 
</Row>


<Row>


<div className='coli' > 

<ul>
<h5>
While helping others is great, remember to prioritize your own needs to avoid burnout
</h5>
<h5>
Treat yourself with kindness and understanding, just as you do for others
</h5>
<h5>
Express your thoughts openly, even if they differ from those around you
</h5>
<h5>
Engage in hobbies and interests that bring you joy and a sense of accomplishment
</h5>
<h5>
Accept that change can lead to growth and new opportunities
</h5>
<h5>
Allow others to handle their responsibilities without feeling guilty
</h5>
<h5>
Strive for excellence, but recognize that mistakes are part of the learning process
</h5>
<h5>
Express your needs and concerns directly to avoid bottling up emotions
</h5>
<h5>
Occasionally step out of your comfort zone to experience new things
</h5>
<h5>
Engage in relaxation techniques to reduce stress and maintain emotional balance
</h5>

</ul>
</div>
</Row>
    </div>   
 
  )}





{personalityType === "ESFJ" && (
    <div>


<Row className='ins2'>

      <h3 className='type' >ESFJ : The Provider</h3> 
    </Row>



<Row>

<Col md={6} >
<h3 className='instxt' >Strength</h3>
<h4 className='instxt1 type' > People-pleasing</h4>
<h5 className='insh5' >
ESFJs are known for their people-pleasing tendencies. They want everyone to be happy, and so they may go out of their way to accommodate others. This can sometimes be at the expense of their own needs, and it can make them seem like pushovers. ESFJs can also come on a bit strong, as they may not know how to take No for an answer. However, this is also an endearing personality trait for an ESFJ, as it shows that they are very caring and compassionate people. They may not always put themselves first, but they are always looking out for others. See Charles Boyle from Brooklyn Nine-Nine, whose is the ultimate people-pleasing ESFJ.
</h5>


</Col>

<Col md={6} >
<h3 className='instxt' >Weekness</h3>
<h4 className='instxt1 type' >Constantly caring for others</h4>
<h5 className='insh5' >
ESFJs are natural caregivers, and they are always looking out for the needs of others. They are often the ones who are cooking, cleaning, and taking care of everyone else. This can sometimes be at the expense of their own needs, but they would never dream of putting themselves first. ESFJs are also very loyal, and they will always stick by their friends and family no matter what. See Molly Weasley from the Harry Potter series. She is an ESFJ who is constantly looking out for the needs of others, and she is always there for her friends and family.
  </h5>


</Col>

</Row>  


<Row className='ins1' >

<h2 >How to improve?</h2> 
</Row>


<Row>


<div className='coli' > 

<ul>
<h5>
Taking care of yourself ensures you can continue caring for others effectively
</h5>
<h5>
Learn to say no when necessary to prevent burnout and overwhelm
</h5>
<h5>
Be open to adjusting plans based on changing circumstances
</h5>
<h5>
Encourage others to express their thoughts and feelings openly
</h5>
<h5>
Allow yourself to receive support and care from others
</h5>
<h5>
Strive for excellence while acknowledging that mistakes are part of growth
</h5>
<h5>
Work together with others to achieve shared goals and aspirations
</h5>
<h5>
Allow time for relationships and plans to develop naturally
</h5>
<h5>
Make choices that align with your values and priorities
</h5>
<h5>
Show gratitude to those who support and care for you
</h5>

</ul>
</div>
</Row>
    </div>   
 
  )}





{personalityType === "ISTJ" && (
    <div>


<Row className='ins2'>

      <h3 className='type' >ISTJ : The Inspector</h3> 
    </Row>



<Row>

<Col md={6} >
<h3 className='instxt' >Strength</h3>
<h4 className='instxt1 type' > Remaining dedicated & committed</h4>
<h5 className='insh5' >
ISTJs are very dedicated and committed across all aspects of their life. From their relationships to their friends to their careers, they are always working hard to stick to their word and follow through with their commitments. This can sometimes be at the expense of their own needs, but they would never break a promise. ISTJs are also very reliable, and you can always count on them to do what they say they will do. See Ned Stark from Game of Thrones. He was an ISTJ who was always dedicated and committed to his King, although ultimately it cost him his life.
</h5>


</Col>

<Col md={6} >
<h3 className='instxt' >Weekness</h3>
<h4 className='instxt1 type' >Judgmental</h4>
<h5 className='insh5' >
ISTJs can be quite judgmental. They like things to be done a certain way, and they may not have much patience for those who don’t meet their standards. This can sometimes make them seem inflexible or rigid. However, this trait can also be seen as a strength, as it means that ISTJs are very detail-oriented and efficient. They may not be the most easygoing people, but they are usually very reliable and dependable. See Alex Dunphy from Modern Family, the judgy teenager who looks down on her parents and siblings.
  </h5>


</Col>

</Row>  


<Row className='ins1' >

<h2 >How to improve?</h2> 
</Row>


<Row>


<div className='coli' > 

<ul>
<h5>
Allow yourself to adapt to changing situations, as rigid routines might limit your growth
</h5>
<h5>
Practice sharing your feelings with trusted individuals to strengthen relationships
</h5>
<h5>
Step out of your comfort zone to discover fresh perspectives and broaden your horizons
</h5>
<h5>
Remember to take time for yourself and accept support from others when needed
</h5>
<h5>
Work on making choices confidently without getting overwhelmed by options
</h5>
<h5>
Engage in artistic activities to tap into your imaginative side and reduce stress
</h5>
<h5>
Build deeper relationships by actively listening and showing genuine interest in their lives
</h5>
<h5>
Define your ambitions and create a structured plan to achieve them
</h5>
<h5>
Practice relaxation techniques to prevent burnout and maintain your well-being
</h5>
<h5>
Accept that change is a natural part of life and work on adapting more easily
</h5>

</ul>
</div>
</Row>
    </div>   
 
  )}





{personalityType === "ESTJ" && (
    <div>


<Row className='ins2'>

      <h3 className='type' >ESTJ : The Supervisor</h3> 
    </Row>



<Row>

<Col md={6} >
<h3 className='instxt' >Strength</h3>
<h4 className='instxt1 type' > Being a natural leader</h4>
<h5 className='insh5' >
ESTJs are natural leaders, and they often take charge no matter what. They are very decisive, and they are often able to get things done quickly and efficiently. ESTJs are confident in their own abilities which means other people are confident in them too. This can sometimes lead to them being bossy or overbearing, but it also means that they are often very successful. See Jack Shepherd from Lost. He is an ESTJ who takes charge on the island and is very decisive, and the other people in the crash trust him.
</h5>


</Col>

<Col md={6} >
<h3 className='instxt' >Weekness</h3>
<h4 className='instxt1 type' >Inflexible</h4>
<h5 className='insh5' >
ESTJs can be quite inflexible. They like things to be done a certain way, and they may not have much patience for those who don’t meet their standards. This can make them seem controlling or rigid. However, it also means that ESTJs are very detail-oriented and efficient, which is definitely a strength. They may not be the most easygoing people, but they are usually very reliable and dependable. If you’re an ESTJ, just remember to give people a little flexibility every now and then. See Cersei Lannister from Game of Thrones, the demanding and inflexible Queen of the Seven Kingdoms.
  </h5>


</Col>

</Row>  


<Row className='ins1' >

<h2 >How to improve?</h2> 
</Row>


<Row>


<div className='coli' > 

<ul>
<h5>
Be open to trying new methods and technologies to improve your leadership
</h5>
<h5>
Communicate your standards and goals to those you lead
</h5>
<h5>
Encourage team members to share their ideas and concerns
</h5>
<h5>
Understand and manage your own emotions and those of others
</h5>
<h5>
Prioritize self-care to avoid burnout and maintain well-being
</h5>
<h5>
Use critique to refine your leadership style and approaches
</h5>
<h5>
Trust others with responsibilities and avoid micromanaging
</h5>
<h5>
Learn to address disagreements in a respectful and productive manner
</h5>
<h5>
Adapt your strategies to evolving circumstances and challenges
</h5>
<h5>
Demonstrate the qualities you expect from your team through your actions
</h5>

</ul>
</div>
</Row>
    </div>   
 
  )}





{personalityType === "ISFP" && (
    <div>


<Row className='ins2'>

      <h3 className='type' >ISFP : The Composer</h3> 
    </Row>



<Row>

<Col md={6} >
<h3 className='instxt' >Strength</h3>
<h4 className='instxt1 type' > Staying true to your values</h4>
<h5 className='insh5' >
ISFPs are very independent, and they stay true to their own values no matter what. They are often the ones who are standing up for what they believe in, and they are not afraid to be different. Individualism is important to people with this personality type. ISFPs are also very creative, and they often use their creativity to express their values. See Meredith Grey from Grey’s Anatomy. She is an ISFP who stays true to her own values, and she is often the one who is standing up for what she believes in.
</h5>


</Col>

<Col md={6} >
<h3 className='instxt' >Weekness</h3>
<h4 className='instxt1 type' >Indecisive</h4>
<h5 className='insh5' >
ISFPs are known to be incredibly indecisive. They may have a hard time making decisions, and they may second-guess themselves often. This can sometimes make them seem weak or uncertain. It can also be frustrating for other people, as they may have a hard time keeping up with the ISFP’s ever-changing mind. However, this trait can also be seen as a strength, as it means that ISFPs are very open-minded and flexible. They are quick to change their plans if someone else has a better idea, and they are always willing to try new things. See Nate Archibald from Gossip Girl, the guy who has everything and is still confused about what he wants.
  </h5>


</Col>

</Row>  


<Row className='ins1' >

<h2 >How to improve?</h2> 
</Row>


<Row>


<div className='coli' > 

<ul>
<h5>
Experiment with new experiences and step out of your comfort zone for personal growth
</h5>
<h5>
Don't be afraid to showcase your artistic talents to the world
</h5>
<h5>
Define your aspirations and work steadily toward achieving them
</h5>
<h5>
Express your thoughts and feelings to build deeper connections with others
</h5>
<h5>
Practice coping strategies to navigate emotional challenges effectively
</h5>
<h5>
Find harmony between your personal desires and the needs of those around you
</h5>
<h5>
Take time for yourself to recharge and maintain your well-being
</h5>
<h5>
View feedback as an opportunity for improvement, not as criticism
</h5>
<h5>
Practice making choices based on your values and intuition
</h5>
<h5>
Show your appreciation and affection to loved ones through your actions
</h5>

</ul>
</div>
</Row>
    </div>   
 
  )}





{personalityType === "ESFP" && (
    <div>


<Row className='ins2'>

      <h3 className='type' >ESFP : The Performer</h3> 
    </Row>



<Row>

<Col md={6} >
<h3 className='instxt' >Strength</h3>
<h4 className='instxt1 type' > Being the life of the party</h4>
<h5 className='insh5' >
ESFPs are known for being the life of the party, and they are often the ones who are making everyone else laugh. They are natural performers, and they love to be the center of attention. This can sometimes mean that they are not taken seriously, but it also means that they are usually the ones who are having the most fun. ESFPs are also very outgoing, and they love to meet new people. See Serena van der Woodsen from Gossip Girl. She is an ESFP who is always the life of the party on the Upper East Side.
</h5>


</Col>

<Col md={6} >
<h3 className='instxt' >Weekness</h3>
<h4 className='instxt1 type' >Unpredictable</h4>
<h5 className='insh5' >
ESFPs are known for their spontaneity and unpredictability. They may not always think things through, and they may do things on a whim. This can sometimes be frustrating for those who have to deal with them, as they may seem irresponsible or careless. However, this trait can also be seen as a strength, as it means that ESFPs are always up for anything. They are never afraid to take risks. If you’re an ESFP, just remember to sometimes think before you act. See Villanelle from Killing Eve, the unpredictable assassin who plays by her own rules.
  </h5>


</Col>

</Row>  


<Row className='ins1' >

<h2 >How to improve?</h2> 
</Row>


<Row>


<div className='coli' > 

<ul>
<h5>
Accept feedback gracefully, using it to refine your talents and reach new heights
</h5>
<h5>
Define clear objectives and take steps toward achieving them
</h5>
<h5>
Pause to consider your decisions before acting to avoid regrets
</h5>
<h5>
Embrace your unique style and share it confidently with others
</h5>
<h5>
Enjoy interactions with others while also taking time for yourself
</h5>
<h5>
Work on maintaining attention on tasks even when distractions arise
</h5>
<h5>
Adaptability can lead to exciting opportunities and personal growth
</h5>
<h5>
Engage in teamwork to combine your strengths with those of others
</h5>
<h5>
Create routines that provide stability and support your goals
</h5>
<h5>
Show appreciation and affection through your actions and words
</h5>

</ul>
</div>
</Row>
    </div>   
 
  )}





{personalityType === "ISTP" && (
    <div>


<Row className='ins2'>

      <h3 className='type' >ISTP : The Craftsman</h3> 
    </Row>



<Row>

<Col md={6} >
<h3 className='instxt' >Strength</h3>
<h4 className='instxt1 type' > Solving complex problems</h4>
<h5 className='insh5' >
ISTPs are known for their ability to solve complex problems, and they often see things from different perspectives. They are very independent, and they like to figure things out on their own. This can sometimes mean that they are not good at following rules, but it also means that they are usually the ones who are able to find creative solutions. ISTPs are also very practical, and they often use their skills to help others. See Kang Sae-byeok from Squid Game. She was an ISTP who figured out clues in the game, and she used her skills to help others.
</h5>


</Col>

<Col md={6} >
<h3 className='instxt' >Weekness</h3>
<h4 className='instxt1 type' >Blunt</h4>
<h5 className='insh5' >
ISTPs are often seen as blunt or insensitive. They may not always think before they speak, and they may say things that are hurtful without meaning to. This can make them seem uncaring or callous. However, this trait can also be seen as a strength, as it means that ISTPs are very honest and direct. They are never afraid to tell it like it is, and they are always willing to give their honest opinion. If you’re an ISTP, just remember to think before you speak sometimes. See Alex Karev from Grey’s Anatomy, the blunt Doctor who tells it like it is.
  </h5>


</Col>

</Row>  


<Row className='ins1' >

<h2 >How to improve?</h2> 
</Row>


<Row>


<div className='coli' > 

<ul>
<h5>
Don't hesitate to communicate your thoughts; your insights could greatly benefit others
</h5>
<h5>
Pay attention to your feelings and practice expressing them constructively
</h5>
<h5>
Engage in teamwork to broaden your skills and perspectives
</h5>
<h5>
Plan for the future while also focusing on the present moment
</h5>
<h5>
Express your thoughts and needs directly to avoid miscommunication
</h5>
<h5>
Step out of your comfort zone to expand your horizons
</h5>
<h5>
Take a moment to think before making decisions to avoid regrets
</h5>
<h5>
Create routines that provide a sense of stability and organization
</h5>
<h5>
Let others know you value and care about them through words and actions
</h5>
<h5>
While self-reliance is important, don't hesitate to ask for help when needed
</h5>

</ul>
</div>
</Row>
    </div>   
 
  )}





{personalityType === "ESTP" && (
    <div>


<Row className='ins2'>

      <h3 className='type' >ESTP : The Dynamo</h3> 
    </Row>



<Row>

<Col md={6} >
<h3 className='instxt' >Strength</h3>
<h4 className='instxt1 type' > Charming anyone & everyone</h4>
<h5 className='insh5' >
ESTPs are known for their ability to charm anyone and everyone they meet. They are naturally charismatic people, and they often use this to get what they want. ESTPs are also very outgoing, and they love to be in the spotlight. This allows them to be successful in many different fields, from sales to politics. See Georgia Miller from Ginny & Georgia. She is an ESTP who is able to charm anyone she meets, and she uses this to get what she wants.
</h5>


</Col>

<Col md={6} >
<h3 className='instxt' >Weekness</h3>
<h4 className='instxt1 type' >Impulsive</h4>
<h5 className='insh5' >
ESTPs are known for their impulsive nature. They are the type of people who are always on the go and never seem to sit still for a minute. They are constantly seeking out new experiences and thrills. This can sometimes lead them to make impulsive decisions that they later regret. Plus, this can sometimes be frustrating for those who have to deal with them, as they may seem irresponsible or careless. However, it also means that ESTPs are always up for anything. They are never afraid to take risks, and they are always willing to try new things. See Lisa Row from Girl, Interrupted, whose impulsive and reckless actions often got her into trouble.
  </h5>


</Col>

</Row>  


<Row className='ins1' >

<h2 >How to improve?</h2> 
</Row>


<Row>


<div className='coli' > 

<ul>
<h5>
While spontaneity is fun, some preparation can lead to even more exciting adventures
</h5>
<h5>
Take time to evaluate your experiences and learn from them
</h5>
<h5>
Express your thoughts clearly and listen actively to others
</h5>
<h5>
Weigh the potential outcomes before diving into new opportunities
</h5>
<h5>
Work on understanding others' perspectives and emotions
</h5>
<h5>
Use criticism to improve your skills and enhance your performance
</h5>
<h5>
Allow time for long-term goals to develop and come to fruition
</h5>
<h5>
Engage in relaxation techniques to stay grounded during demanding times
</h5>
<h5>
Pursue activities that challenge you and expand your interests
</h5>
<h5>
Show appreciation and affection for your loved ones through your actions
</h5>

</ul>
</div>
</Row>
    </div>   
 
  )}






















































    </div>
  )
}

export default Insights