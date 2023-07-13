// import{ useEffect, useState } from 'react';
// import axios from 'axios';


import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

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







function App() {

  return (
    <div id='body' className="App">
    <Navbar/>
    <Router>
<Routes>
            <Route exact path="/register" element={<SignUpForm/>} />         
            <Route exact path="/" element={<Home/>} /> 
            <Route exact path="/login" element={<SignInPage/>} />         
            <Route exact path="/about" element={<Home4/>} />         
            <Route exact path="/contactUs" element={<ContactForm/>} />         
            <Route exact path="/FAQ's" element={<Faq/>} />         
            <Route exact path="/Assessment" element={<Assessment/>} />         
            <Route exact path="/Assessment/Page2" element={<Test2/>} />       
            <Route exact path="/Assessment/Page3" element={<Test3/>} />         
            <Route exact path="/Assessment/Page4" element={<Test4/>} />         
            <Route exact path="/Assessment/Page5" element={<Test5/>} />         
            <Route exact path="/Assessment/Result" element={<Result/>} />         




            
  </Routes>    
</Router>
    




   



<Footer/>


{/* <Questions/> */}



    </div>
  );
}


export default App;