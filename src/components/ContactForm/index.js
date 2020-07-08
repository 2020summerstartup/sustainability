import React from "react"

export default () => (
  <form
    name="contact"
    method="post"
    action="/success"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
    </div>
    <div>
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" rows="6" required />
    </div>
    <div>
      <input type="submit" value="Drop a line" />
      <input type="reset" value="Eraser" />
    </div>
  </form>
)

// import React from 'react';

// const encode = (data) => {
//     return Object.keys(data)
//         .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//         .join("&");
//   }

//   class ContactForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { name: "", email: "", message: "" };
//     }

//     /* Here’s the juicy bit for posting the form submission */

//     handleSubmit = e => {
//       fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: encode({ "form-name": "contact", ...this.state })
//       })
//         .then(() => alert("Success!"))
//         .catch(error => alert(error));

//       e.preventDefault();
//     };

//     handleChange = e => this.setState({ [e.target.name]: e.target.value });

//     render() {
//       const { name, email, message } = this.state;
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <p>
//             <label>
//               Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
//             </label>
//           </p>
//           <p>
//             <label>
//               Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
//             </label>
//           </p>
//           <p>
//             <label>
//               Message: <textarea name="message" value={message} onChange={this.handleChange} />
//             </label>
//           </p>
//           <p>
//             <button type="submit">Send</button>
//           </p>
//         </form>
//       );
//     }
//   }

// export default ContactForm;