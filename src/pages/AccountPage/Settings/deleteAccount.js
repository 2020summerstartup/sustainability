import React from 'react';
import { AuthUserContext, withAuthorization } from "../../../services/Session";
import * as firebase from "firebase";
import "firebase/auth";
import {firestore} from "../../../services/Firebase"
import 'firebase/firestore'



// to delete user in authentication & firestore 
const accountDelete = () => {
    // to let firebase know the user we want to delete
    const currentUser = localStorage.getItem('email');
    // deletes user from firbase auth
    firebase.auth().currentUser.delete().then( 
        // calls for deletion of user data in firestore 
        () => {
        const userDoc = firestore.doc('users/' + localStorage.getItem('email'))
        userDoc.delete()
        // .addOnCompleteListener(
        //     // redirect to landing page after deleted?
        // )
    }
    )
    console.log('User Deleted!');
}



const DeleteAccount = () => (
    <div>
    <center>
    <p> hi </p>
    <button onClick={accountDelete}>Click here to delete account!!</button>
    <p>Bye</p>
    </center>
    </div>
)

export default DeleteAccount;