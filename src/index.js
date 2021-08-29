import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles';
// import { firebase } from './lib/firebase.prod';
import { db, auth, signIn, signUp, updateProfile } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

render(
  <StrictMode>
    <FirebaseContext.Provider value={{ db, auth, signIn, signUp, updateProfile }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </StrictMode>,
  document.getElementById('root')
);
