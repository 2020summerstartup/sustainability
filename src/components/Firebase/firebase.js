import app from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import 'firebase/database';
// import Axios from 'axios'

// import firebase from 'firebase/app';
// import firebase/auth from 'firebase/auth';


// };

const config = {
  apiKey: "AIzaSyBzlwDriPb6sKitZ3b9gnX9n6NOMbkCi9s",
  authDomain: "sustainabilitycompetition.firebaseapp.com",
  databaseURL: "https://sustainabilitycompetition.firebaseio.com",
  projectId: "sustainabilitycompetition",
  storageBucket: "sustainabilitycompetition.appspot.com",
  messagingSenderId: "72202621299",
  appId: "1:72202621299:web:d8d210e7b9cb4765dcb506",
  measurementId: "G-682PQBF33P"
};




class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password, dorm) =>
  this.auth.createUserWithEmailAndPassword(email, password, dorm);

  doSignInWithEmailAndPassword = (email, password, dorm) =>
    this.auth.signInWithEmailAndPassword(email, password, dorm);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***
 
  user = uid => this.db.ref(`users/${uid}`);
 
  users = () => this.db.ref('users');

  
  }

  // firebase.initializeApp(firebaseConfig);

  // const db = firebase.firestore();
  // export const auth = firebase.auth();
  // export const firestore = firebase.firestore();
export default Firebase;

// export { Axios, db }
