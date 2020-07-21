import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import PropTypes from "prop-types";
import DormSelect from "../../components/DormSelect";

import { withFirebase, createUser } from "../../services/Firebase";
import * as ROUTES from "../../constants/routes";

import * as firebase from "firebase";
import "firebase/auth";

import { PasswordInput } from "./muiSignInPage";
import { assignData } from "../HomePage/index.js";
import signupImg from "../../img/login2.svg";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { RemoveRedEye } from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import Autocomplete from "@material-ui/lab/Autocomplete";
import HomeIcon from "@material-ui/icons/Home";

// import your fontawesome library
import "../../components/FontAwesomeIcons";
// import when you need to use icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MuiSignUpPage = () => (
  <div className="base-container">
    {/* <h1 className="header">Register</h1>
    <div className="image">
      <img alt="sign up" src={signupImg} />
    </div> */}
    <SignUpForm />
  </div>
);

// Styles for Main Page
const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  formIcon: {
    marginRight: "1rem",
  },
  eye: {
    cursor: "pointer",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorText: {
    color: "red",
    marginTop: "1rem",
  },
});

// Styles for Icons
const useStyles2 = makeStyles((theme) => ({
  formIcon: {
    marginLeft: "5px",
    marginRight: "1rem",
  },
}));

const dorms = [
  { title: "South" },
  { title: "Case" },
  { title: "East" },
  { title: "West" },
  { title: "North" },
  { title: "Drinkward" },
  { title: "Sontag" },
  { title: "Linde" },
  { title: "Atwood" },
];

// function DormInput() {
//   const classes = useStyles2();

//   return (
//     <Autocomplete
//       id="dorm input"
//       options={dorms}
//       getOptionLabel={(option) => option.title}
//       disableClearable
//       fullWidth
//       renderInput={(params) => {
//         return (
//           <TextField
//             {...params}
//             label="Dorms"
//             variant="outlined"
//             margin="normal"
//             name="dorm"
//             type="text"
//             fullWidth
//             InputProps={{
//               ...params.InputProps,
//               startAdornment: (
//                 <InputAdornment>
//                   <HomeIcon className={classes.formIcon} />
//                 </InputAdornment>
//               ),
//             }}
//           />
//         );
//       }}
//     />
//   );
// }

class PasswordInput2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordIsMasked: true,
    };
  }

  togglePasswordMask = () => {
    this.setState((prevState) => ({
      passwordIsMasked: !prevState.passwordIsMasked,
    }));
  };

  render() {
    const { classes } = this.props;
    const { passwordIsMasked } = this.state;

    return (
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        // type="password"
        type={passwordIsMasked ? "password" : "text"}
        {...this.props}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <RemoveRedEye
                className={classes.eye}
                onClick={this.togglePasswordMask}
              />
            </InputAdornment>
          ),
          startAdornment: <LockOpenIcon className={classes.formIcon} />,
        }}
      />
    );
  }
}

PasswordInput2.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired,
};

PasswordInput2 = withStyles(useStyles)(PasswordInput2);

const INITIAL_STATE = {
  user: {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    dorm: "",
    image: null,
    points: 0,
  },
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
    // this.state = {
    //   tags: "",
    // };
    // this.onTagsChange = this.onTagsChange.bind(this);
  }

  //TEST
  test = () => {
    const { username, email, passwordOne, dorm, image, points } = this.state;
    console.log("DORM: ", dorm);
    console.log("USERNAME: ", username);
    console.log("EMAIL: ", email);
    console.log("PASSWORD: ", passwordOne);
  };

  onSubmit = (event) => {
    const { username, email, passwordOne, dorm, image, points } = this.state;
    console.log("DORM: ", dorm);
    console.log("USERNAME: ", username);
    console.log("EMAIL: ", email);
    console.log("PASSWORD: ", passwordOne);
    // const uploadTask = storage.ref(`images/${image.name}`).put(image);

    // uploadTask.on('state_changed', () => {
    //   // complete function ....
    //   storage.ref('images').child(image.name).getDownloadURL().then(url => {
    //       console.log(url);
    //       this.setState({url});
    //   })
    // });

    createUser(email, username, dorm);

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
        });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState((prevState) => ({
      user: {
        username: "",
        email: "",
        passwordOne: "",
        passwordTwo: "",
        dorm: "",
        image: null,
        points: 0,
      },
    }));
    // console.log("NAME: ", event.target.name),
    // console.log("USERNAME: ", this.state.user.username)
  };

  //   onChange = (event) => {
  //     this.setState({ [event.target.name]: event.target.value });
  //     console.log(event.target.name);
  //   };

  onTagsChange = (event, values) => {
    this.setState(
      {
        user: { dorm: values.title },
        // tags: values,
      },
      () => {
        // This will output an array of objects
        // given by Autocomplete options property.
        console.log(values.title);
      }
    );
  };
  // [dorm, setDorm] = React.useState('');
  // onDormChange = (event) => {
  //   const dorm = event.target.value
  //   setDorm(event.target.value);
  // };

  render() {
    const { classes } = this.props;
    const {
      username,
      email,
      dorm,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      dorm === "" ||
      username === "";
    // dorm !== "South" || "Sontag"|| "Drinkward"||  "Case"|| "North"||  "East"|| "West";

    return (
      <Container maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <div className="image">
            <img alt="sign up" src={signupImg} />
          </div>
          <form onSubmit={this.test} className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Full Name"
              name="username"
              // value={username}
              autoComplete="name"
              onChange={this.onChange}
              InputProps={{
                startAdornment: <PersonIcon className={classes.formIcon} />,
                classes: {
                  adornedEnd: classes.adornedEnd,
                },
              }}
            />
            {/* <Image source={{uri:this.state.user.avatar}} /> */}
            {/* <div className="form-group">
          <FontAwesomeIcon icon="user" className="icon" />
          <input
            className="input-field"
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="First Name"
          />
        </div> */}
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              // value={email}
              autoComplete="email"
              onChange={this.onChange}
              InputProps={{
                startAdornment: <EmailIcon className={classes.formIcon} />,
                classes: {
                  adornedEnd: classes.adornedEnd,
                },
              }}
            />
            {/* <div className="form-group">
          <FontAwesomeIcon icon="envelope" className="icon envelope" />
          <input
            className="input-field"
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
        </div> */}
            {/* <DormInput
              name="dorm"
              value={dorm}
              onChange={this.onTagsChange}
            //   onChange={this.onChange}
            /> */}
            <DormSelect />
            {/* <Autocomplete
              id="dorm input"
              options={dorms}
              getOptionLabel={(option) => option.title}
              disableClearable
              fullWidth
              //   onChange={this.onChange}
              onChange={this.onTagsChange}
              renderInput={(params) => {
                return (
                  <TextField
                    {...params}
                    label="Dorms"
                    variant="outlined"
                    margin="normal"
                    name="dorm"
                    type="text"
                    fullWidth
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <InputAdornment>
                          <HomeIcon className={classes.formIcon} />
                        </InputAdornment>
                      ),
                    }}
                  />
                );
              }}
            /> */}
            {/* dont delete  */}
            {/* <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="dorm"
              label="Dorm"
              name="dorm"
              // value={dorm}
              onChange={this.onChange}
              InputProps={{
                startAdornment: <HomeIcon className={classes.formIcon} />,
                classes: {
                  adornedEnd: classes.adornedEnd,
                },
              }}
            /> */}
            {/* <div className="form-group">
              <FontAwesomeIcon icon="user" className="icon" />
              <input
                className="input-field"
                name="dorm"
                value={dorm}
                onChange={this.onChange}
                type="text"
                placeholder="Res Hall"
              />
            </div> */}
            <PasswordInput2
              // type="password"
              label="Password"
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
            />
            <PasswordInput
              // type="password"
              label="Password"
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
            />
            {/* <div className="form-group">
              <FontAwesomeIcon icon="unlock-alt" className="icon" />
              <input
                className="input-field"
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
              />
            </div> */}
            {/* <div className="form-group">
              <FontAwesomeIcon icon="lock" className="icon" />
              <input
                className="input-field"
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm Password"
              />
            </div> */}

            {error && (
              <Typography variant="body2" className={classes.errorText}>
                {error.message}
              </Typography>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={isInvalid}
            >
              Sign Up
            </Button>
            {/* <button disabled={isInvalid} type="submit" className="button">
              Sign Up
            </button> */}

            {/* {error && <p>{error.message}</p>} */}
          </form>
        </div>
      </Container>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? Get with the program, and{" "}
    <Link to={ROUTES.SIGN_UP}>Sign Up</Link> here now!
  </p>
);

const SignUpFormStyled = withStyles(useStyles)(SignUpFormBase);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormStyled);

export default MuiSignUpPage;

export { SignUpForm, SignUpLink };
