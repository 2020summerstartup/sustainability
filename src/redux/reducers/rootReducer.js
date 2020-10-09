import { combineReducers } from 'redux';
import userReducer from './userReducer';
import incrementReducer from './incrementReducer';
// import { firestoreReducer } from 'redux-firestore';
// import { firebaseReducer } from 'react-redux-firebase';

// combines reducers into one reducer to pass into store
const rootReducer = combineReducers({
// organized as (what I want to call it in the store): reducer's name when written
    // firebase: firebaseReducer,
    // firestore: firestoreReducer,
    user: userReducer,
});

export default rootReducer;