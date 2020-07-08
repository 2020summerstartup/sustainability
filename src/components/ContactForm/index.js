import React from 'react';

const ContactForm = () => (
  <div>
    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input name="name" placeholder="Your Name" type="text" />
      <input name="email" placeholder="Email" type="email" />
      <textarea name="message" placeholder="Message"/>
      <button className="button" >Send</button>
      <p></p>
    </form>
  </div>
)

export default ContactForm