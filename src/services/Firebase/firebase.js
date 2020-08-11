// file commented by JM, most functions written by JM or LL
import firebase from 'firebase/app';  // Used to import { auth }, but it was never used so I removed it. -Katie
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
const firestore = app.firestore();


// sync data for challenges with firebasse RT database changes
// NOTE: must refresh page/sign in/sign up to get the updated challenges bc even though local storage updates, 
// the text that is displayed does not
// not being called anywhere because we are not yet implementing the challenges made by admin
// async function getChallengeData() {
//   // reference to where all the challenge data is stored
//   console.log('challenge data')
//   const dbRefObject = firebase.database().ref('1N2PhiprrCvWWYbyjEFwNjR18k13GOYhlkY34luOJe-w/ChallengeData');
//   // when any field relating to challenge data within the Firebase RT database changes the following function will be called
//   // for example: when we verify a new challenge and add it to the google sheet --> firebase RT DB updates with new challenge
//   dbRefObject.on('value', function(snap){
//     // get the array containing an object for each challenge from firebase RT database
//     const challengeDataArray = snap.val();
//     // set this array to local storage so we can access it on the challenge pages
//     // must be set to a string to keep the array format in local storage 
//     localStorage.setItem('challengeData', JSON.stringify(challengeDataArray))
//   })
// }
// getChallengeData();


// set a gloabl variable for the user's uid --> this becomes a field in firestore when the user is created 
var authUserID;

class Firebase {
  constructor() {
    // app.initializeApp(config);

    

    this.auth = app.auth();
    this.db = app.database();
    this.firestore = app.firestore()
  }

  // *** Auth API ***
  // each function below uses the firebase auth api to preform their function (Names are pretty descriptive)
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

 
  // called when preforming authentication & authorization 
  // NOT ENTIRELY SURE WHAT ALL OF THIS FUNCTION IS DOING? -JM 
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      // if the user is authenticated 
      if (authUser) {
        authUserID = authUser.uid
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();
 
            // If user is not an admin, then default to giving them empty roles
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


// called when a new user signs up in muiSignUpPage
// receives userEmail, userName, and dorm from sign up input forms to set those unique tokens in firestore, 
// all other field have a default start (ex: points, total, impact all default to starting at 0)
export const createUser = (userEmail, userName, dorm) => {
  console.log("creating...")
  // refernce to user document --> creates a document that belongs to the user bc it does not yet exist when user signs up
  return firestore.collection('users').doc(userEmail)
      .set({
        // these are the data fields that will be a part of the user's firestore document (stored as key: value pairs )
        // NOTE: favorites, masteredActions, points & impact are each arrays
        // number values appear as integers, all else are booleans (false) or strings (userEmail, userName, dorm, authUserID)
          created: app.firestore.FieldValue.serverTimestamp(),
          name: userName,
          createdBy: userEmail,
          total: 0,
          favorites: [],
          masteredActions: [],
          userDorm: dorm,
          darkPop_done: false,
          addHomePop_done: false,
          UserUID: authUserID,
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
      }, 
      // means that it will merge this data with any existing data already in the document
      // should never really be necessary --> maybe only used if there was an issue with deleting the user's firestore document 
      {merge: true});
};

// this function is meant to get each action's point value from firestore and then set each action's points in local storage
// should only be called when page first loads, not when points are increment
export const assignData = (userData) => {
  // the data parameter is meant to be a firestore document snapshot
  localStorage.setItem("dorm", userData.userDorm);
  localStorage.setItem("name", userData.name);
  localStorage.setItem("total", userData.total);
  localStorage.setItem("darkPop_done", userData.darkPop_done);
  localStorage.setItem("addHomePop_done", userData.addHomePop_done);
  // initialize mastered action
  var firestoreMastered = userData.masteredActions;
  localStorage.setItem("firestoreMastered", JSON.stringify(firestoreMastered));
  // initialize points
  for (const [key, value] of Object.entries(userData.points)) {
    localStorage.setItem(key, value);
  }
  // initalize favorites
  var firestoreFavs = userData.favorites;
  // check if action has been previously favroited --> action is favorited in firestore
  for (const [key] of Object.entries(userData.points)) {
    // Changed this to only get key instead of key value pair (because value is never used)
    if (firestoreFavs.includes(key)) {
      // if action is saved as a favorite in firestore, set actionFav in firestore to true
      var actionFavLSName = key.concat("Fav");
      localStorage.setItem(actionFavLSName, true);
    }
  }
};

// BELOW ARE FUNCTIONS THAT MAKE REFERENCES TO FIRESTORE & ARE USED THROUGHOUT THE APP FOR VARIOUS FUNCTIONS

// fetches the user collection from firestore
// often called as a shorter way to start the call to get a specific piece of firestore data
// meant to be called then added to (ex: getUserDocRef().onSnapshot( (snap) => {..code here...}))
export const getUserDocRef = (userEmail) => {
  // IDK why but the compete page gets upset when this line (LS set) is not there?
  localStorage.setItem('email', userEmail)
  return firestore.collection('users').doc(userEmail)
}

// fetches the dorm collection from firestore
// meant to be called then added to (ex: getDorm().doc('North').onSnapshot( (snap) => {...code here...}))
export const getDorm = () => {
  return firestore.collection('dorms')
}

// this method is when user increments an action called to increase points (both the individual action & the total)
// parameters are needed to make sure that the changes are made to the correct document & field, by the correct value
export const updateUserPoint = (userEmail, userAction, actionPoint) => {
  return firestore.collection('users').doc(userEmail).update({
    // references the specific action field within firestore's points array then increments the specified number of points
    ['points.' + userAction]: app.firestore.FieldValue.increment(actionPoint),
    // updates the user's total point field in firestore by the specified number of points
    total: app.firestore.FieldValue.increment(actionPoint),
  })
}

//this method is called when a user increments and action, it updates the dorm total
// NOTE: this function allows all users in a single dorm to increment the firestore field 'score' without necessarily having the correct score 
// in their local storage --> protects us from conflicting values that may exists across different people's devices at a single point in time 
export const updateDormPoint = (userDorm, actionPoint) => {
  return firestore.collection('dorms').doc(userDorm).update({
    // refernces the score field in the specified dorm document to increment their total by the action's point value
    score: app.firestore.FieldValue.increment(actionPoint),
  })
}


// called when user uses the change dorm form (part of the setting page) to change the dorm the user is affilaited with 
export const updateUserDorm = (userEmail, newDorm) => {
  return firestore.collection('users').doc(userEmail).update({
    // makes a refernce to the userDorm field of the user's firestore document & sets it to the new dorm 
    userDorm: newDorm,
  })
}


// called when user favorites a previously unfavorited actions to updated the favorites array in firestore 
// NOTE: local storage is updated in the same area that the function is called (homepage)
// NOTE: the susAction parameter is the action's shortened title name --> ex: recycling a water bottle is waterBottle in the array
export const addFav = (userEmail, susAction) => {
  return firestore.collection('users').doc(userEmail).update({
    // makes a refernece to the favroites array of the user's firestore document & add the specified favorited action
    // .arrayUnion is a firestore command that is essentailly an array push
    favorites: app.firestore.FieldValue.arrayUnion(susAction)
  })
}

// called when user unfavorites a previously favorited actions to updated the favorites array in firestore 
// NOTE: local storage is updated in the same area that the function is called (homepage)
// NOTE: the susAction parameter is the action's shortened title name --> ex: recycling a water bottle is waterBottle in the array
export const deleteFav = (userEmail, susAction) => {
  return firestore.collection('users').doc(userEmail).update({
    // makes a refernece to the favroites array of the user's firestore document & removes the specified action
    // .arrayRemove is a firestore command that removes the specified value from the array 
    favorites: app.firestore.FieldValue.arrayRemove(susAction)
  })
}

// called when a user masteres an action to add the action to the masterActions array in firestore
// NOTE: local storage is updated in the same area that the function is called (homepage)
// NOTE: the susAction parameter is the action's shortened title name --> ex: recycling a water bottle is waterBottle in the array
export const actionMastered = (userEmail, susAction) => {
  return firestore.collection('users').doc(userEmail).update({
    // makes a refernece to the masteredAction array of the user's firestore document & adds the specified mastered action
    // .arrayUnion is a firestore command that is essentailly an array push
    masteredActions: app.firestore.FieldValue.arrayUnion(susAction)
  })
}

// called when a returning user signs in 
// this function reads the user's impact from firestore & sets those values in local storage
// needed to render the correct display for impact suns on points page
export const getUserImpact = (userEmail) => {
  // takes a snapshot of the user's firestore document so we can read the fields of the impact array 
  getUserDocRef(userEmail).onSnapshot( (snap) => {
    // set local storage items to specific fields of firestore impact array 
    localStorage.setItem('coEmiss', snap.get('impact.coEmiss'));
    localStorage.setItem('energy', snap.get('impact.energy'));
    localStorage.setItem('water', snap.get('impact.water'));
    localStorage.setItem('buzzes', snap.get('impact.buzzes'));
  })
}

// called when a returning user signs in 
// this function reads the school's impact from firestore & sets those values in local storage
// needed to render the correct display for mudd impact bar graph on dorm/school page
export const getSchoolImpact = () => {
  firestore.collection('dorms').doc('wholeSchool').onSnapshot( (snap) => {
    localStorage.setItem('SchoolCoEmiss', snap.get('coEmiss'));
    localStorage.setItem('SchoolEnergy', snap.get('energy'));
    localStorage.setItem('SchoolWater', snap.get('water'));
    localStorage.setItem('SchoolBuzzes', snap.get('buzzes'));
  })
}

// called each time a user increments an action to update the user's impact points 
export const updateUserImpact = (userEmail, coImpact, energyImpact, waterImpact) => {
    //updates local storage with incremented impact data by adding specified amount to each impact category
    localStorage.setItem('coEmiss', (parseInt(localStorage.getItem('coEmiss'))+ parseInt(coImpact)));
    localStorage.setItem('energy', (parseInt(localStorage.getItem('energy'))+ parseInt(energyImpact)));
    localStorage.setItem('water', (parseInt(localStorage.getItem('water'))+ parseInt(waterImpact)));
    localStorage.setItem('buzzes', (parseInt(localStorage.getItem('buzzes'))+ 1));
  // updates firestore with incremented impact data by incrementing the specified amount to each impact category 
  return firestore.collection('users').doc(userEmail).update({
    'impact.coEmiss': app.firestore.FieldValue.increment(coImpact),
    'impact.energy': app.firestore.FieldValue.increment(energyImpact),
    'impact.water': app.firestore.FieldValue.increment(waterImpact),
    'impact.buzzes': app.firestore.FieldValue.increment(1),
  })
}

// called each time a user increments an action to update the school's impact points 
export const updateSchoolImpact = (coImpact, energyImpact, waterImpact) => {
  //updates local storage with incremented impact data by adding specified amount to each impact category
  localStorage.setItem('SchoolCoEmiss', (parseInt(localStorage.getItem('SchoolCoEmiss'))+ parseInt(coImpact)));
  localStorage.setItem('SchoolEnergy', (parseInt(localStorage.getItem('SchoolEnergy'))+ parseInt(energyImpact)));
  localStorage.setItem('SchoolWater', (parseInt(localStorage.getItem('SchoolWater'))+ parseInt(waterImpact)));
  localStorage.setItem('SchoolBuzzes', (parseInt(localStorage.getItem('SchoolBuzzes'))+ 1));
  // updates firestore with incremented impact data by incrementing the specified amount to each impact category 
return firestore.collection('dorms').doc('wholeSchool').update({
  'coEmiss': app.firestore.FieldValue.increment(coImpact),
  'energy': app.firestore.FieldValue.increment(energyImpact),
  'water': app.firestore.FieldValue.increment(waterImpact),
  'buzzes': app.firestore.FieldValue.increment(1),
})
}


// called the first time someone visits the compete page & views the add to home modal 
export const AddHomeOpened = (userEmail) => {
  // changes locla storage to reflect that add to home modal has been viewed
  localStorage.setItem('addHomePop_done', true)
  // updates the addHomePop field in the user's firestore doc to reflect that the dark mode modal has been seen 
  return firestore.doc('users/' + userEmail).update({
    "addHomePop_done": true,
  })
}

// called the first time someone visits the account page & views the dark mode modal
export const DarkModeOpened = (userEmail) => {
  // changes local storage to reflect that dark mode modal has been viewed
  localStorage.setItem('darkPop_done', true)
  // updates the darkPop field in the user's firestore doc to reflect that the dark mode modal has been seen 
  return firestore.doc('users/' + userEmail).update({
    "darkPop_done": true,
  })
}


export {Axios, firestore};