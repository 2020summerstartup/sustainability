import React from "react";
import * as firebase from "firebase";
import "firebase/auth";
import { firestore } from "../../../services/Firebase";
import "firebase/firestore";
import deleteImg from "../../../img/delete.svg";

import { AuthUserContext, withAuthorization } from "../../../services/Session";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "red"
  },
});

class DeleteAccountBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

    // This function is the one that is called when the user presses the delete account button. If they confirm that
    // they meant to, then this fucntion calls accountDelete to delete them as an user.
    confirmDelete = (action) => {
        var confirmed = window.confirm("Are you sure you want to delete your account? This cannot be undone."); // Check with the user (did they mean to increment?)
        if( confirmed === true ) {
            this.accountDelete();; // If user meant to, call the function to actually delete the user
        }
    };

    userDocDelete = async () => {
    // problem with accessing updated email, local storage has email from previous logins
    const email = localStorage.getItem("email");
    console.log("firestore", email);
    firestore.collection("users").doc(email).delete();
    };

    // to delete user in authentication & call function to delete user doc in firestore
    accountDelete = () => {
    // to let firebase know the user we want to delete
    const currentUser = localStorage.getItem("email");
    console.log("firebase", currentUser);
    // deletes user from firbase auth
    firebase.auth().currentUser.delete().then(
        // calls for deletion of user data in firestore
        //(doesn't work but dont know why, KEEP)

        this.userDocDelete()
    );
    //Navigate to landing page
    this.props.history.push("/");
    alert(
        "User associated with email '" +
        localStorage.getItem("email") +
        "' has been deleted! \n Sign up again if you would like to create a new account!"
    );
    };

    render() {
    const { classes } = this.props;

    return (
    <div>
      <AuthUserContext.Consumer>
      {(authUser) => (
      <div className="base-container">
        <Container>
            <CssBaseline />
            <div className={classes.paper}>
            <Typography component="h1" variant="h5">
                Deleting your account?
            </Typography>
            <Typography component="h1" variant="h6">
                We're sad to see you go :(
            </Typography>
            <div className="image">
                <img alt="delete account" src={deleteImg} />
            </div>
            <Button
                onClick={this.confirmDelete}
                variant="contained"
                color="primary"
            >
                Delete Account
            </Button>
            </div>
        </Container>
      </div>
      )}
      </ AuthUserContext.Consumer>
      </div>
    )
    
   }
  }
  


const DeleteAccount = withStyles(useStyles)(DeleteAccountBase);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(DeleteAccount);
