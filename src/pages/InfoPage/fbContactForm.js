import React, { useState } from "react";
// Firebase Imports
import { Axios } from "../../services/Firebase";
import { firestore } from "../../services/Firebase";
import "firebase/firestore";
// Material UI Imports
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
import SendIcon from "@material-ui/icons/Send";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../HomePage/toastify.css";

// Styles for contact form
const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: "35rem",
    marginTop: theme.spacing(5),
  },
  formWrapper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0.5rem 2rem",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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

// Main Component 
const FBContactForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // Sends email to support team and stores in firestore on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    toast.configure(); // Configure for toast messages
    toast.success("Thanks for your email! We'll get back to you as soon as we can!");
  };
  // Function for sending email with info to support team
  const sendEmail = () => {
    // Uses cloud function and axios to send email 
    Axios.post(
      "https://us-central1-sustainabilitycompetition.cloudfunctions.net/submit",
      formData
    )
    // Stores info and message inside firebase
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
    <div className="base-container">
      <Paper elevation={5} className={classes.paper}>
        <CssBaseline />
        {/* Header of Contact Form */}
        <div className={classes.formWrapper}>
          <Avatar className={classes.avatar}>
            <QuestionAnswerIcon />
          </Avatar>
          <Typography variant="h4" style={{ margin: "1rem 0" }}>
            Contact Us
          </Typography>
          <Typography variant="subtitle1">
            Let us know what new actions, challenges, and badges you would like
            to see in the future! Or any other general questions, comments, and
            concerns.
          </Typography>
          {/* Contact us form */}
          <form onSubmit={handleSubmit} id="contact" className={classes.form}>
            {/* Name input */}
            <TextField
              color="secondary"
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
              color="secondary"
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
              color="secondary"
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
              color="secondary"
              className={classes.submit}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </form>
        </div>
      </Paper>
    </div>
  );
};

export default FBContactForm;
