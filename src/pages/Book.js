import React from "react";
import { Link } from "react-router-dom";

function Book() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/book">Book</Link>
        <Link to="/myappointments">My Appointments</Link>
      </nav>

      <div className="circle">
        <h1>Book Appointment</h1>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email" />
        <input type="date" />
        <input type="time" />
        <button>Book Now</button>
      </div>
    </div>
  );
}

export default Book;
