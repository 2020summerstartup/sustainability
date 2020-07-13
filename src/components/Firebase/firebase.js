import app from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import 'firebase/database';
// import Axios from 'axios'

// import firebase from 'firebase/app';
// import firebase/auth from 'firebase/auth';


// };

// const firebase = require("firebase"); // Value never used
// Required for side-effects
require("firebase/firestore");  

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


  // var db = firebase.firestore();

  // db.collection("people").add({
  //   first: "Kobe",
  //   last: "Rico",
  //   born: 2000
  // })
 
  // .then(function(docRef) {
  //     console.log("Document written with ID: ", docRef.id);
  // })
  // .catch(function(error) {
  //     console.error("Error adding document: ", error);
  // });

  // // Add a second document with a generated ID.
  // db.collection("people").add({
  //   first: "Alan",
  //   middle: "Mathison",
  //   last: "Turing",
  //   born: 1912
  // })
  // .then(function(docRef) {
  //   console.log("Document written with ID: ", docRef.id);
  // })
  // .catch(function(error) {
  //   console.error("Error adding document: ", error);
  // });
  // firebase.initializeApp(firebaseConfig);

  // const db = firebase.firestore();
  // export const auth = firebase.auth();
  // export const firestore = firebase.firestore();
export default Firebase;

export const createUser = (userEmail) => {
  console.log("creating...")
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

// this method is called to increase points
export const updateUserPoint = (userEmail, userAction, actionPoint) => {
  console.log('updating...')
  return firestore.collection('users').doc(userEmail).update({
    ['points.' + userAction]: app.firestore.FieldValue.increment(actionPoint),
    total: app.firestore.FieldValue.increment(actionPoint),
  })
}

// this method is called to synchronize local storage with Firestore
export const uploadUserPoint = (userEmail, userAction, actionPoint) => {
  console.log("uploading...")
  return firestore.collection('users').doc(userEmail).update({
    ['points.' + userAction]: actionPoint,
  })
}

export const uploadUserTotalPoint = (userEmail, total) =>{
  return firestore.collection('users').doc(userEmail).update({
    total: total,
  })
}


// export { Axios, db }
