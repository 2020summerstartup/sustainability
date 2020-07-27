import React, { useState } from "react";
import { Axios } from "../../services/Firebase/firebase.js";
// import { firestore } from "../../services/Firebase";
import { firestore } from '../../services/Firebase';
import 'firebase/firestore';


import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
// for class Components we should use withStyles instead of makeStyles
import { makeStyles } from "@material-ui/core/styles";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import MessageIcon from "@material-ui/icons/Message";

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: "35rem",
    marginTop: theme.spacing(4),
  },
  formWrapper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0.5rem 2rem",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  formIcon: {
    marginRight: "1rem",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const FBContactForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  const sendEmail = () => {
    Axios.post(
      "https://us-central1-sustainabilitycompetition.cloudfunctions.net/submit",
      formData
    )
      .then((res) => {
        firestore.collection("emails").add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Paper elevation={5} className={classes.paper}>
      <CssBaseline />
      <div className={classes.formWrapper}>
        <Avatar className={classes.avatar}>
          <QuestionAnswerIcon />
        </Avatar>
        <Typography variant="h4" style={{ margin: "1rem 0"}}>
          Contact Us
        </Typography>
        <Typography variant="subtitle1">
          Let us know your questions, comments, and concerns!
        </Typography>
        <form onSubmit={handleSubmit} id="contact" className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={updateInput}
            value={formData.name || ""}
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            InputProps={{
              startAdornment: <PersonIcon className={classes.formIcon} />,
              classes: {
                adornedEnd: classes.adornedEnd,
              },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={updateInput}
            value={formData.email || ""}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            InputProps={{
              startAdornment: <EmailIcon className={classes.formIcon} />,
              classes: {
                adornedEnd: classes.adornedEnd,
              },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            multiline
            rows={3}
            required
            fullWidth
            onChange={updateInput}
            value={formData.message || ""}
            name="message"
            label="Your Message"
            id="message"
            InputProps={{
              startAdornment: <MessageIcon className={classes.formIcon} />,
              classes: {
                adornedEnd: classes.adornedEnd,
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send
          </Button>
        </form>
      </div>
    </Paper>
  );
};

export default FBContactForm;
