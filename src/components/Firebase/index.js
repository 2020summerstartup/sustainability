import FirebaseContext, { withFirebase } from './context';
import Firebase from './firebase';
 
export default Firebase;

const provider = new firebase.auth.GoogleAuthProvider();

// export const signInWithGoogle = () => {
//     firebase.auth().signInWithPopup(provider).then(function(result)    
// }

// const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithRedirect = () => {
    firebase.auth().signInWithRedirect(provider);
}


 
export { FirebaseContext, withFirebase };