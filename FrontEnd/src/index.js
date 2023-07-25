import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
// import firebase from 'firebase/app';
// import 'firebase/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //  <App/>
  // </React.StrictMode>
<Auth0Provider
    domain="dev-g6ysqb0dvdv8yxtk.us.auth0.com"
    clientId="tcTFi0A7CNQqb6sdECc6gFqvmy6eb64z"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,


  
);


reportWebVitals();
