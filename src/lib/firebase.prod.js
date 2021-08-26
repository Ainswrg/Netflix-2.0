import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDPVKe8_knAVb4cWE4HuWy47m4wPY3T8T4',
  authDomain: 'netflix-clone-a2ff8.firebaseapp.com',
  projectId: 'netflix-clone-a2ff8',
  storageBucket: 'netflix-clone-a2ff8.appspot.com',
  messagingSenderId: '94832796367',
  appId: '1:94832796367:web:0ebb66867f3c4284108dba',
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
