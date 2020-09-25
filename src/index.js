// "The BIG index ^tm"
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Firebase, { FirebaseContext } from "./services/Firebase";
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../src/redux/store/reducers/rootReducer';
import thunk from 'redux-thunk';
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';

// names variable store for redux which takes in all of our reducers
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <FirebaseContext.Provider value={new Firebase()}>
      <App />
  </FirebaseContext.Provider>
  </Provider>,
  document.getElementById("root")
);
