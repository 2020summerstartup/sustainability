// import store from "../..";
import {firestore} from '../../services/Firebase';
import 'firebase/firestore';

export const userLogin = (email) => {
    return (dispatch) => {
        firestore.collection('users').doc(email).onSnapshot((snap) => {
            let firestoreData = snap.data();
            dispatch({type: 'USER_LOGIN_NEW' , payload: firestoreData})
        })
        
        // get().then((doc) => 
        //     const firestoreData = doc.data().then( () => {
        //         dispatch({type: 'USER_LOGIN_NEW' , payload: firestoreData})
        //     })
            // dispatch(type: 'USER_LOGIN_NEW' , payload: firestoreData)
            // console.log(doc.data()))
            // .then((firestore)=> dispatch({type: 'USER_LOGIN_NEW', payload:doc.data}))
    }
}

export const changeDormRedux = (dorm) => {
    return (dispatch) => {
      dispatch ( {type: 'CHANGE_DORM', payload: dorm} )
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

