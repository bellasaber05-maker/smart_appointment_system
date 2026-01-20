import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/book">Book</Link>
        <Link to="/myappointments">My Appointments</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Logout</Link>
      </nav>

      <div className="circle">
        <h1>Dashboard</h1>
        <p>Welcome to your Dashboard</p>
        <button onClick={() => window.location.href='/book'}>Book Appointment</button>
        <button onClick={() => window.location.href='/myappointments'}>View My Appointments</button>
      </div>
    </div>
  );
}

export default Dashboard;
