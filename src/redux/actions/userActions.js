import store from "../..";
import {firestore} from '../../services/Firebase';
import 'firebase/firestore';

export const userLoginToState = (email) => {
  return firestore.collection('users').doc(email).onSnapshot( (snapshot) => {
    let firestoreState = snapshot.data();
    console.log(snapshot.data(), 'in action');
    dispatch({type: 'USER_LOGIN', payload: {newState: firestoreState}});
  })
}

export const incrementAction = (action) => {
  return { type: 'INCREMENT', payload: action}
}
  

