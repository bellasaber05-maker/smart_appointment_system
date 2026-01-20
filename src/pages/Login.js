import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>

      <div className="circle">
        <h1>Login</h1>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
