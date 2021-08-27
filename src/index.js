import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles';
import { app, auth, isAuth, signIn, signUp } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

render(
  <FirebaseContext.Provider value={{ app, auth, isAuth, signIn, signUp }}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
