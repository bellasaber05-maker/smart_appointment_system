import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="circle">
        <h1>Contact Us</h1>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </div>
    </div>
  );
}

export default Contact;
