import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>

      <div className="circle">
        <h1>Register</h1>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button>Register</button>
      </div>
    </div>
  );
}

export default Register;
