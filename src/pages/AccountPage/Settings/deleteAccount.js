import React, { createContext } from "react";
import * as firebase from "firebase";
import "firebase/auth";
import { firestore } from "../../../services/Firebase";
import "firebase/firestore";
// import { AuthUserContext } from "../../../services/Session";
import deleteImg from "../../../img/delete.svg";
// import { withAuthorization } from "../../../services/Session";

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

const context = createContext();

class DeleteAccountBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

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
      
    //     <div>
    // <AuthUserContext>
    //   {(authUser) => (
    //     <div class="base-container">
    //       <h2>Need to change your dorm?</h2>
    //       {/* <div className="image">
    //         <img alt="your account" src={changedorm} />
    //       </div> */}
    //       <h3>Change your dorm here!</h3>
    //       {/* <DormSelect /> */}
    //     </div>
    //   )}
    // </AuthUserContext>
    // </div>
    // )}
    //   }

    
    
    <div>
      <AuthUserContext>
      {(authUser) => (
      <div className="base-container">
        <Container maxWidth="sm">
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
              onClick={this.accountDelete}
              variant="contained"
              color="primary"
            >
              Delete Account
            </Button>
          </div>
        </Container>
      </div>
      )}
      </ AuthUserContext>
      </div>
    )
    
   }
  }
  


const DeleteAccount = withStyles(useStyles)(DeleteAccountBase);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(DeleteAccount);
