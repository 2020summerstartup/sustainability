import React from 'react';
 
import AuthUserContext from './context';
import { withFirebase } from '../../services/Firebase';
 
const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
 
      this.state = {
        authUser: null,
      };
    }
 
    componentDidMount() {
      // admin stuff
      this.listener = this.props.firebase.onAuthUserListener(
        authUser => {
          this.setState({ authUser });
        },
        () => {
          this.setState({ authUser: null });
        },
      );
    };

      // this.listener = this.props.firebase.auth.onAuthStateChanged(
      //   authUser => {
      //     // admin stuff
      //     if (authUser) {
      //       this.props.firebase
      //         .user(authUser.uid)
      //         .once('value')
      //         .then(snapshot => {
      //           const dbUser = snapshot.val();
 
      //           // default empty roles
      //           if (!dbUser.roles) {
      //             dbUser.roles = {};
      //           }
 
      //           // merge auth and db user
      //           authUser = {
      //             uid: authUser.uid,
      //             email: authUser.email,
      //             ...dbUser,
      //           };
 
      //           this.setState({ authUser });
      //         });
      //     } else {
      //       this.setState({ authUser: null });
      //     }
          // Non admin stuff 
          
          // authUser
          //   ? this.setState({ authUser })
          //   : this.setState({ authUser: null });
    //     },
    //   );
    // }
 
    componentWillUnmount() {
      this.listener();
    }
 
    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }
 
  return withFirebase(WithAuthentication);
};
 
export default withAuthentication;