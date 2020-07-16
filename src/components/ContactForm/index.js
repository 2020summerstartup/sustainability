import React from "react";
import styles from "../ContactForm.module.css";
// import your fontawesome library
import "../FontAwesomeIcons";
// import when you need to use icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

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
    const { name, email, message } = this.state;
    return (
      <div className="form-container">
        <h5>Contact Us!</h5>
        <p>Let us know your questions, comments, and concerns!</p>
        <form
          onSubmit={this.handleSubmit}
          id="contact"
          className="input-container"
        >
          <p>
            <FontAwesomeIcon icon="user" className="contact-icon icon user" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <FontAwesomeIcon
              icon="envelope"
              className="contact-icon icon envelope"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <FontAwesomeIcon
              icon="comment"
              className="contact-icon icon comment"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <button type="submit" className="button">
              Send
            </button>
          </p>
        </form>
      </div>
    );
  }
}

export default ContactForm;
