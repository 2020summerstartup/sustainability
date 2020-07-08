import React from "react";
import './index.css';

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
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="form-container">
        <h5>Contact Us!</h5>
        <p>Let us know your questions, comments, and concerns!</p>
        <form onSubmit={this.handleSubmit} id="contact" className="input-container">
          <p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
            //   required
            />
          </p>
          <p>
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
