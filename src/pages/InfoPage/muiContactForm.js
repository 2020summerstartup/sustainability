import React from "react";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
// for class Components we should use withStyles instead of makeStyles
import { withStyles } from "@material-ui/core/styles";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import MessageIcon from '@material-ui/icons/Message';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const useStyles = (theme) => ({
  paper: {
    maxWidth: "35rem",
  },
  formWrapper: {
    marginTop: theme.spacing(4),
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
});

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */
  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() =>
        alert("Success! Your message has been sent. We appreciate your input!")
      )
      .catch((error) => alert(error));

    e.preventDefault();

    //clear form after submit
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { classes } = this.props;

    return (
      // <Container>
        <Paper elevation={5} className={classes.paper}>
        <CssBaseline />
        <div className={classes.formWrapper}>
          <Avatar className={classes.avatar}>
            <QuestionAnswerIcon />
          </Avatar>
          <Typography component="h4" variant="h4">
            Contact Us
          </Typography>
          <Typography component="subtitle1" variant="subtitle1">
            Let us know your questions, comments, and concerns!
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              InputProps={{
                startAdornment: <PersonIcon className={classes.formIcon}/>,
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              InputProps={{
                startAdornment: <EmailIcon className={classes.formIcon}/>,
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
              name="message"
              label="Your Message"
              id="message"
              InputProps={{
                startAdornment: <MessageIcon className={classes.formIcon}/>,
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
      // </Container>
    );
  }
}

export default withStyles(useStyles)(ContactForm);
