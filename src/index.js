import 'normalize.css';

import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import App from './app';
import { FirebaseContext } from './context/firebase';
import { GlobalStyles } from './global-styles';
import { auth, db, signIn, signOut, signUp, updateProfile } from './lib/firebase.prod';

render(
  <StrictMode>
    <FirebaseContext.Provider value={{ db, auth, signIn, signUp, updateProfile, signOut }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </StrictMode>,
  document.getElementById('root')
);
