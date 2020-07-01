import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import * as firebase from 'firebase';
import 'firebase/auth';

 
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase, signInWithRedirect } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import signinImg from "../../img/login3.svg";
 
// const Login = ({history}) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setErrors] = useState("");
// }

const SignInPage = () => (
  <div className="base-container">
    <h1 className="header">Hello! Please Sign in :)</h1>
    <div className="image">
      <img alt='' src={signinImg} />
    </div>
    <SignInForm/>
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);
 
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
 
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { email, password } = this.state;
 
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };

 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const { email, password, error } = this.state;
 
    const isInvalid = password === '' || email === '';
 
    return (
      <form onSubmit={this.onSubmit} className="form">
        <div className="form-group">
          <input 
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
        </div>
        <button className='button' disabled={isInvalid} type="submit" className="button">
          Sign In
        </button>
        <p className="text-center my-3">or</p>
        
        <button onClick={() => signInWithRedirect()} className="googleBtn" >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Login With Google
        </button>
 
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}




// const signInWithGoogle = () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase
//   .auth()
//   .setPersistence(firebase.auth.Auth.Persistence.SESSION)
//   .then(() => { 
//     firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then(result => {
//       console.log(result)
//       history.push('/reports')
//       Auth.setLoggedIn(true)
//     })
//     .catch(e => setErrors(e.message))
//   });
// }
 
 
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
 

export { SignInForm };

export default SignInPage;
