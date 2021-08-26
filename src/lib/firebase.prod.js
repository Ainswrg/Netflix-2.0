import * as Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAnafBpX92eUPMY0jxsgWKndKGggzn_EFE',
  authDomain: 'netflix2-1fe2b.firebaseapp.com',
  projectId: 'netflix2-1fe2b',
  storageBucket: 'netflix2-1fe2b.appspot.com',
  messagingSenderId: '924273630587',
  appId: '1:924273630587:web:f81589404b61dd7cdc71de',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
