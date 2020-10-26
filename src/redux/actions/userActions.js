// import store from "../..";
// import {firestore} from '../../services/Firebase';
// import 'firebase/firestore';

export const userLogin = (email) => {
    return (dispatch) => {
        firestore.collection('users').doc(email).onSnapshot((snap) => {
            
        }).then(() => dispatch({type:'USER_LOGIN_NEW', email}) )
    }
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('users').doc(email).get().then((doc) => console.log(doc))
        // make async call to database
        dispatch({type: 'USER_LOGIN_NEW', email})
    }
}

// export const userLoginToState = (email) => {
//   return firestore.collection('users').doc(email).onSnapshot( (snapshot) => {
//     let firestoreState = snapshot.data();
//     console.log(snapshot.data(), 'in action');
//     dispatch({type: 'USER_LOGIN', payload: {newState: firestoreState}});
//   })
// }

// export const incrementAction = (action) => {
//   return { type: 'INCREMENT', payload: action}
// }
  

// I don't think this is doing anything

