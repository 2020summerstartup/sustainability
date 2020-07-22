import React, { createContext } from 'react';
import * as firebase from "firebase";
import "firebase/auth";
import {firestore} from "../../../services/Firebase"
import 'firebase/firestore'
import { AuthUserContext } from "../../../services/Session";
// import * as ROUTES from "../../../constants/routes";

const context = createContext();

class DeleteAccount extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = { };
      }

      
      userDocDelete = async () => {
        // problem with accessing updated email, local storage has email from previous logins
        const email = localStorage.getItem('email');
        firestore.collection('users').doc(email).delete()
      }
       


        // to delete user in authentication & call function to delete user doc in firestore 
        accountDelete = () => {
        // to let firebase know the user we want to delete
        const currentUser = localStorage.getItem('email');
        // deletes user from firbase auth
        firebase.auth().currentUser.delete()
        .then( 
        // calls for deletion of user data in firestore 
        //(doesn't work but dont know why, KEEP)

        this.userDocDelete()
        )
        //Navigate to landing page
        this.props.history.push('/');
        alert("User associated with email '" + localStorage.getItem('email') + "' has been deleted! \n Sign up again if you would like to create a new account!");
    };
    

    
    render() {
        return(
            <div>
            <center>
            <p> hi </p>
            <button onClick={this.accountDelete}>Click here to delete account!!</button>
            <p>Bye!</p>
            </center>
            </div>
        )
    }

}



export default DeleteAccount;