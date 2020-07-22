import firebase from 'firebase/app';
import app from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import 'firebase/database';
import Axios from 'axios'
require('dotenv').config();
console.log(process.env);
console.log(process.env.REACT_APP_API_KEY);

// import firebase/auth from 'firebase/auth';


// };

// const firebase = require("firebase"); // Value never used
// Required for side-effects
require("firebase/firestore");  

// Intialize Firebase
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

app.initializeApp(config);
// firebase.initializeApp(config)
const firestore = app.firestore()

class Firebase {
  constructor() {
    // app.initializeApp(config);

    

    this.auth = app.auth();
    this.db = app.database();
    this.firestore = app.firestore()
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

export default Firebase;

export const createUser = (userEmail, userName, dorm) => {
  console.log("creating...")
  return firestore.collection('users').doc(userEmail)
      .set({
          created: app.firestore.FieldValue.serverTimestamp(),
          name: userName,
          createdBy: userEmail,
          total: 0,
          favorites: {},
          userDorm: dorm,
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
  localStorage.setItem('email', userEmail)
  return firestore.collection('users').doc(userEmail)
}


// this method is called to increase points
export const updateUserPoint = (userEmail, userAction, actionPoint) => {
  // local storage allows us to display the correct points
  localStorage.setItem('total', (parseInt(localStorage.getItem('total'))+ parseInt(actionPoint)));
  localStorage.setItem(userAction, (parseInt(localStorage.getItem(userAction)) + parseInt(actionPoint)));
  return firestore.collection('users').doc(userEmail).update({
    ['points.' + userAction]: app.firestore.FieldValue.increment(actionPoint),
    total: app.firestore.FieldValue.increment(actionPoint),
  })
}
//this method is meant to update the dorm total
export const updateDormPoint = (userDorm, actionPoint) => {
  return firestore.collection('dorms').doc(userDorm).update({
    score: app.firestore.FieldValue.increment(actionPoint),
  })
}

// these two methods are called to synchronize local storage with Firestore
export const uploadUserPoint = (userEmail, userAction, actionPoint) => {
  return firestore.collection('users').doc(userEmail).update({
    ['points.' + userAction]: app.firestore.FieldValue.increment(actionPoint),
  })
}
export const uploadUserTotalPoint = (userEmail, actionPoint) =>{
  return firestore.collection('users').doc(userEmail).update({
    total: app.firestore.FieldValue.increment(actionPoint),
  })
}

// for changing which dorm you are affilaited with 
export const updateUserDorm = (userEmail, value) => {
  return firestore.collection('users').doc(userEmail).update({
    userDorm: value,
  })
}

export const getDorm = () => {
  return firestore.collection('dorms')
}

export const addFav = (userEmail, susAction) => {
  console.log("updating")
  return firestore.collection('users').doc(userEmail).update({
    favorites: app.firestore.FieldValue.arrayUnion(susAction)
  })
}

export const deleteFav = (userEmail, susAction) => {
  return firestore.collection('users').doc(userEmail).update({
    favorites: app.firestore.FieldValue.arrayRemove(susAction)
  })
}

const db = firebase.firestore;

export {Axios, db}

export {firestore}