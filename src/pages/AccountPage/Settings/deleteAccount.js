import React from 'react';
import { AuthUserContext, withAuthorization } from "../../../services/Session";
import * as firebase from "firebase";
import "firebase/auth";
import {firestore} from "../../../services/Firebase"
import 'firebase/firestore'
// import * as ROUTES from "../../../constants/routes";



class DeleteAccount extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = { };
      }

      userDocDelete = async () => {
          await firestore.doc('users/' + localStorage.getItem('email')).delete()
      }
      

        // to delete user in authentication & firestore 
    accountDelete = () => {
        // to let firebase know the user we want to delete
        const currentUser = localStorage.getItem('email');
        // deletes user from firbase auth
        firebase.auth().currentUser.delete().then( 
        // calls for deletion of user data in firestore 
        //(doesn't work but dont know why, KEEP)
        this.userDocDelete
        )
        //Navigate to landing page
        this.props.history.push('/');
        console.log('User Deleted!');
    };
    

    
    render() {
        return(
            <div>
            <center>
            <p> hi </p>
            <button onClick={this.accountDelete}>Click here to delete account!!</button>
            <p>Bye</p>
            </center>
            </div>
        )
    }

}



export default DeleteAccount;