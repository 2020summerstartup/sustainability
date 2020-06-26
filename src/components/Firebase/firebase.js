import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBIrS4dlxSG0x6Xunn8_OWOGjV32IIs55E",
    authDomain: "rf-tutorial2.firebaseapp.com",
    databaseURL: "https://rf-tutorial2.firebaseio.com",
    projectId: "rf-tutorial2",
    storageBucket: "rf-tutorial2.appspot.com",
    messagingSenderId: "840895433411",
    appId: "1:840895433411:web:628ff1bfbdb2fba11fb076",
    measurementId: "G-589N6L3G5R"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
      this.db = app.database();
    }

//   *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
 
    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
 
    doSignOut = () => this.auth.signOut();
 
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    // *** User API ***
 
  user = uid => this.db.ref(`users/${uid}`);
 
  users = () => this.db.ref('users');

}

  export default Firebase;