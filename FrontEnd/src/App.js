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

import Assessment from './components/assessment/assessment'
import Faq from "./components/faq/faq";
import Footer from './components/footer/footer.js';
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


   
  </Routes>    
</Router>
    



    <Footer/> 


    <Assessment/>
    {/* <FAQSection/> */}

    </div>
  );
}

export default App;