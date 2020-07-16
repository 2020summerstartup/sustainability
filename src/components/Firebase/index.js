import FirebaseContext, { withFirebase } from './context';
import Firebase from './firebase';
import {createUser, getUser, updateUserPoint, uploadUserPoint, uploadUserTotalPoint, updateUserDorm, updateDormPoint, getDorm} from './firebase';
 
export default Firebase;

// const provider = new firebase.auth.GoogleAuthProvider();

// export const signInWithGoogle = () => {
//     firebase.auth().signInWithPopup(provider).then(function(result)    
// }

// const provider = new firebase.auth.GoogleAuthProvider();

// export const signInWithRedirect = () => {
//     firebase.auth().signInWithRedirect(provider);
// }

// export const signOutFirebase = () => {
//     firebase.auth().signOut().then(function() {
//         // Sign-out successful.
//     }).catch(function(error) {
//         // An error happened.
//     });
// }
// export const provider = new firebase.auth.GoogleAuthProvider();
// export const auth = firebase.auth();
 
export { FirebaseContext, withFirebase };
export {createUser, getUser, updateUserPoint, uploadUserPoint, uploadUserTotalPoint, updateUserDorm, getDorm};

