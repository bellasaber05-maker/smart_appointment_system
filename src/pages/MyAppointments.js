import React from "react";
import { Link } from "react-router-dom";

function MyAppointments() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/book">Book</Link>
        <Link to="/myappointments">My Appointments</Link>
      </nav>

      <div className="circle">
        <h1>My Appointments</h1>
        <ul>
          <li>Appointment 1 - 20 Jan 2026 - 10:00 AM</li>
          <li>Appointment 2 - 21 Jan 2026 - 02:00 PM</li>
          <li>Appointment 3 - 23 Jan 2026 - 11:00 AM</li>
        </ul>
      </div>
    </div>
  );
}

export default MyAppointments;
