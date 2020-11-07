// import store from "../..";
import {firestore} from '../../services/Firebase';
import 'firebase/firestore';

export const userLogin = (email) => {
    return (dispatch) => {
        firestore.collection('users').doc(email).onSnapshot((snap) => {
            let firestoreData = snap.data();
            dispatch({type: 'USER_LOGIN' , payload: firestoreData})
        })
    }
}

export const changeDormRedux = (dorm) => {
    return (dispatch) => {
      dispatch ( {type: 'CHANGE_DORM', payload: dorm} )
    }
}


