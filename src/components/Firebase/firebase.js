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

app.initializeApp(config);
const firestore = app.firestore()

class Firebase {
  constructor() {

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

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

export const createUser = (userEmail) => {
  return firestore.collection('users').doc(userEmail)
      .set({
          created: app.firestore.FieldValue.serverTimestamp(),
          createdBy: userEmail,
          total: 0,
          points: {
              "waterBottle": 0,
              "cmontWalk": 0,
              "reuseStraw": 0,
              "reuseBag": 0,
              "frmersMarket": 0,
              "rebrewTea": 0,
              "noFoodWaste": 0,
              "meatlessMon": 0,
              "ecoClean": 0,
          },
      });
};

export const getUser = (userEmail) => {
  return firestore.collection('users').doc(userEmail)
}

export const updateUser = (userEmail, userAction, actionPoint) => {
  console.log('updating...')
  return firestore.collection('users').doc(userEmail).update({
    ['points.' + userAction]: app.firestore.FieldValue.increment(actionPoint),
    total: app.firestore.FieldValue.increment(actionPoint),
  })
}


// export { Axios, db }
