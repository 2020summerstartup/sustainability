// "The BIG index ^tm"
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from 'firebase/app';
import Firebase, { FirebaseContext } from "./services/Firebase";
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import  rootReducer  from '../src/redux/reducers/rootReducer';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { reduxFirestore, firestoreReducer  } from 'redux-firestore';
import {  ReactReduxFirebaseProvider, getFirebase, getFirestore } from 'react-redux-firebase';

// config needed to link firebase & firestore to redux calls
// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// };

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

const createStoreWithFirebase = compose(
  reduxFirestore(firebase), // firebase instance as first argument, rfConfig as optional second
)(createStore);


const initState = {};
// names variable store for redux which takes in all of our reducers
const store = createStoreWithFirebase(rootReducer, initState,
  // compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), 
    // reactReduxFirebase(config), // redux binding for firebase
    // reduxFirestore(config) // redux bindings for firestore
  // ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
}


ReactDOM.render(
  <Provider store={store}>
  <PersistGate persistor={persistor}>
  <ReactReduxFirebaseProvider {...rrfProps}>
  <FirebaseContext.Provider value={new Firebase()}>
      <App />
  </FirebaseContext.Provider>
  </ReactReduxFirebaseProvider>
  </PersistGate>
  </Provider>,
  document.getElementById("root")
);

export default store;