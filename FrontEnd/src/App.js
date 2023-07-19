import React from "react";
import {useState} from "react";

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
import SignUpForm from './components/Auth/register'
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






function App() {

  const [showResult, setShowResult] = useState(false);



  return (
    <div id='body' className="App">
   
<NavbarProvider>
  <Navbar/>
  <div style={{ display: showResult ? 'block' : 'none' }}>
        <Result />
      </div>  </NavbarProvider>

    <Router>
<Routes>
            <Route exact path="/register" element={<SignUpForm/>} />         
            <Route exact path="/" element={<Home/>} /> 
            <Route exact path="/login" element={<SignInPage/>} />         
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




            
  </Routes>    
</Router>
    




   



<Footer/>


{/* <Blog1/> */}


    </div>
  );
}


export default App;