import React from "react";
import { Link, useLocation } from "react-router-dom";

function Home() {
  const location = useLocation(); // لمعرفة الصفحة الحالية

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/login" className={location.pathname === "/login" ? "active" : ""}>Login</Link>
        <Link to="/register" className={location.pathname === "/register" ? "active" : ""}>Register</Link>
        <Link to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>Dashboard</Link>
        <Link to="/book" className={location.pathname === "/book" ? "active" : ""}>Book</Link>
        <Link to="/myappointments" className={location.pathname === "/myappointments" ? "active" : ""}>My Appointments</Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
      </nav>

      {/* رسالة ترحيب */}
      <div className="welcome">
        <h2>مرحبًا بك في نظام Smart Appointment!</h2>
        <p>احجز مواعيدك بسهولة وسرعة</p>
      </div>

      {/* الدائرة الرئيسية */}
      <div className="circle">
        <h1>Smart Appointment</h1>
        <p>Easy & Smart Appointment Booking</p>
        <Link to="/register">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
