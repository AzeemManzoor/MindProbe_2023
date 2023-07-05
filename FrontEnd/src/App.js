import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Navbar from './components/navbar/navjs.js'
import Footer from './components/footer/footer.js';
import Home from './components/homepage/home.js';
import Home2 from './components/homepage/Land1.js';
import Home3 from './components/homepage/Land2.js';
import Home4 from './components/homepage/AboutUs.js';
import Team from './components/homepage/team.js';


function App() {
  return (
    <div id='body' className="App">
    <Navbar/>
    <Home/> 
    <Home2/>
    <Home3/>
    <Team/>
    <Home4/>
    <Footer/>
{/* <router>
<Routes>
            <Route path="/about" component={Signin} >   
              <Home />
            </Route>
            <Route path="/users">
              <Home2 />
            </Route>
            <Route path="/">
              <Home3 />
            </Route>
            <Route path="/">
              <Team />
            </Route>
            <Route path="/">
              <Home4 />
            </Route>
  </Routes>

</router> */}

    </div>
  );
}

export default App;