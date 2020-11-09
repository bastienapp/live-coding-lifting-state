import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <form className="ContactUs">
      <h1>Contact Us</h1>
      <label htmlFor="email">
        <span>email:</span>
        <input id="email" type="text" placeholder="name@mail.com" />
      </label>
      <label htmlFor="content">
        <span>content:</span>
        <textarea id="content" />
      </label>
      <input type="submit" value="Send" />
    </form>
  );
}

export default ContactUs;
