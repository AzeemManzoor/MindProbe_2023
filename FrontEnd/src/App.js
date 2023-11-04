import React from "react";
import {useState , useEffect} from "react";
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react'; // Import the useAuth0 hook
import {
  BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import  { NavbarProvider} from './components/navbar/NavbarContext'
import Navbar from './components/navbar/navjs.js'
import Home from './components/homepage/home.js';
import Home4 from './components/homepage/AboutUs'
import ContactForm from './components/contact/contact'
import SignInPage from './components/Auth/signin'
import Test2 from "./components/assessment/test2";
import Test3 from "./components/assessment/test3";
import Test4 from "./components/assessment/test4";
import Test5 from "./components/assessment/test5";
import Assessment from './components/assessment/assessment'
import Faq from "./components/faq/faq";
import Footer from './components/footer/footer.js';
import Result from "./components/assessment/result";
import Blog1 from "./components/blog/blog1"
import Blog2 from "./components/blog/blog2"
import Blog3 from "./components/blog/blog3"
import EmotionDetection from "./components/assessment/EmotionDetection"
import PRE from "./components/assessment/preAsses"
import Video from "./components/assessment/pre-report";
import Insights from "./components/insights/insights"
import Profile from "./components/profile/profile";
import NotFound from "./components/Page_Not_Found/NotFound";
import Community from "./components/community/community";


import ChatComponent from "./components/chat/chat"







function App() {

  const [showResult, setShowResult] = useState(false);
  const { isAuthenticated } = useAuth0();


  const { user } = useAuth0(); // Get the authenticated user information from useAuth0

  useEffect(() => {
    // Fetch the user ID from the server
    axios
      .get('http://localhost:4000/userId', {
        params: { username: user?.email }, // Pass the username as a query parameter
        // params:{name :user?.name}
      })
      .then((response) => {
        const userId = response.data.userId;
        // Save the user ID in session storage
        sessionStorage.setItem('userId', userId);
      })
      .catch((error) => {
        console.error('Failed to fetch user ID', error);
      });
      axios
      .get('http://localhost:4000/Name', {
        params: { name: user?.name }, // Pass the user's name as a query parameter
      })
      .then((response) => {
        const Name = response.data.Name;
        sessionStorage.setItem('Name', Name);
      })
      .catch((error) => {
        console.error('Failed to fetch user ID', error);
      });

      axios
      .get('http://localhost:4000/Picture', {
        params: { picture: user?.picture }, // Pass the user's name as a query parameter
      })
      .then((response) => {
        const Picture = response.data.Picture;
        sessionStorage.setItem('Picture', Picture);
        
      })
      .catch((error) => {
        console.error('Failed to fetch user ID', error);
      });
  }, [user]);




  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (reviewData) => {
    setReviews([...reviews , reviewData]);
  };


  return (
    <div id='body' className="App">
   
<NavbarProvider>
  <Navbar/>
  <div style={{ display: showResult ? 'block' : 'none' }}>
        <Result />
      </div>  </NavbarProvider>

    <Router>
<Routes>
            <Route exact path="/" element={<Home/>} /> 
            <Route exact path="/about" element={<Home4/>} />         
            <Route exact path="/contactUs" element={<ContactForm/>} />         
            <Route exact path="/FAQ's" element={<Faq/>} />         
            <Route exact path="/Assessment" element={<Assessment/>} />         
            <Route exact path="/Assessment/sectionB" element={<Test2/>} />       
            <Route exact path="/Assessment/sectionC" element={<Test3/>} />         
            <Route exact path="/Assessment/sectionD" element={<Test4/>} />         
            <Route exact path="/Assessment/sectionE" element={<Test5/>} />      
            <Route exact path="/Assessment/report" element={<NavbarProvider><Result/></NavbarProvider>} />      
            <Route exact path="/blog/Ai-powered-analysis" element={<Blog1/>} />      
            <Route exact path="/blog/Video-interview" element={<Blog2/>} />      
            <Route exact path="/blog/Detailed-report" element={<Blog3/>} />      
            <Route exact path="/pre-assessment" element={<PRE/>} />   
            <Route exact path="/Video-assessment" element={<EmotionDetection/>} />      
            <Route exact path="/pre-report" element={<Video/>} />      
            <Route exact path="/insights" element={<Insights/>} />      
           <Route exact path="/profile" element ={<Profile/>} />
           <Route exact path="/profile" element ={<Profile/>} />
           <Route path="*" element={<NotFound />} /> 
           <Route exact path="/Community" element ={<Community/>} />

       
  
           {/* <Route exact path="/chat" element ={<ChatComponent/>} /> */}












  </Routes>    
</Router>
    




<ChatComponent/>
<Footer/>




    </div>
  );
}


export default App;