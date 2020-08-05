import firebase from 'firebase/app';
import app from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import 'firebase/database';
import Axios from 'axios'
require('dotenv').config();

// import firebase/auth from 'firebase/auth';

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
const firestore = app.firestore();



// sync with firebasse RT database changes
// NOTE: must refresh page/sign in/sign up to get the updated challenges bc even though local storage updates, 
// the text that is displayed does not
async function getChallengeData() {
  // reference to where all the challenge data is stored
  const dbRefObject = firebase.database().ref('1N2PhiprrCvWWYbyjEFwNjR18k13GOYhlkY34luOJe-w/ChallengeData');
  // when any field relating to challenge data within the Firebase RT database changes the following function will be called
  dbRefObject.on('value', function(snap){
    // get the array containing an object for each challenge from firebase RT database
    const challengeDataArray = snap.val();
    // set this array to local storage so we can access it on the challenge pages
    localStorage.setItem('challengeData', JSON.stringify(challengeDataArray))
  })
}
getChallengeData();



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

  // Admin stuff again
  // *** Merge Auth and DB User API *** //
 
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();
 
            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }
 
            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            };
 
            next(authUser);
          });
      } else {
        fallback();
      }
    });

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
              "publicTransit": 0,
              "usedClothes": 0,
              "hangDry": 0,
              "climateClass": 0,
              "reuseBBQ": 0,
              "reuseBottle": 0,
              "shower5": 0,
              "donateClothes": 0,
              "layerCold": 0,
              "bulkGrocery": 0,
              "emailReceipt": 0,
          },
          impact: {
            "coEmiss": 0,
            "water": 0,
            "energy": 0,
            "buzzes":0,
          },
      });
};

// fetches the user collection from firestore
// meant to be called then added to (ex: getUser().onSnapshot( (snap) => {..code here...}))
export const getUser = (userEmail) => {
  localStorage.setItem('email', userEmail)
  return firestore.collection('users').doc(userEmail)
}

// fetches the dorm collection from firestore
// meant to be called then added to (ex: getDorm().doc('North'))
export const getDorm = () => {
  return firestore.collection('dorms')
}

// this method is called to increase points
export const updateUserPoint = (userEmail, userAction, actionPoint) => {
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


// updates firestore & local storage when a user favorites an action
export const addFav = (userEmail, susAction) => {
  var favs = JSON.parse(localStorage.getItem('firestoreFavs'));
  favs.push(susAction);
  localStorage.setItem('firestoreFavs', JSON.stringify(favs));
  return firestore.collection('users').doc(userEmail).update({
    favorites: app.firestore.FieldValue.arrayUnion(susAction)
  })
}

// updates firestore & local storage array when a user deletes a favorite
export const deleteFav = (userEmail, susAction) => {
  // updat local storage array when user deletes fav 
  const favs = JSON.parse(localStorage.getItem('firestoreFavs'));
  const index = favs.indexOf(JSON.stringify(susAction));
  if (index > -1){
    favs.splice(index, 1);
  }
  localStorage.setItem('firestoreFavs', JSON.stringify(favs));
  return firestore.collection('users').doc(userEmail).update({
    favorites: app.firestore.FieldValue.arrayRemove(susAction)
  })
}

// adds action to mastered list in firestore when called (user has mastered action)
export const actionMastered = (userEmail, susAction) => {
  return firestore.collection('users').doc(userEmail).update({
    masteredActions: app.firestore.FieldValue.arrayUnion(susAction)
  })
}

// gets user's impact data from firestore and sets in in local storage
export const getUserImpact = (userEmail) => {
  getUser(userEmail).onSnapshot( (snap) => {
    const firestoreCoEmiss = snap.get('impact.coEmiss')
    localStorage.setItem('coEmiss', firestoreCoEmiss);
    const firestoreEnergy = snap.get('impact.energy')
    localStorage.setItem('energy', firestoreEnergy);
    const firestoreWater = snap.get('impact.water')
    localStorage.setItem('water', firestoreWater);
    const firestoreBuzzes = snap.get('impact.buzzes')
    localStorage.setItem('buzzes', firestoreBuzzes);
  })
}

// updates all the necessary impact fields when a user logs an action
export const updateUserImpact = (userEmail, coImpact, energyImpact, waterImpact) => {
    //updates local storage with incremented impact data
    localStorage.setItem('coEmiss', (parseInt(localStorage.getItem('coEmiss'))+ parseInt(coImpact)));
    localStorage.setItem('energy', (parseInt(localStorage.getItem('energy'))+ parseInt(energyImpact)));
    localStorage.setItem('water', (parseInt(localStorage.getItem('water'))+ parseInt(waterImpact)));
    localStorage.setItem('buzzes', (parseInt(localStorage.getItem('buzzes'))+ 1));
  //updates firestore with incremented impact data
  return firestore.collection('users').doc(userEmail).update({
    'impact.coEmiss': app.firestore.FieldValue.increment(coImpact),
    'impact.energy': app.firestore.FieldValue.increment(energyImpact),
    'impact.water': app.firestore.FieldValue.increment(waterImpact),
    'impact.buzzes': app.firestore.FieldValue.increment(1),
  })
}

export {Axios, firestore};