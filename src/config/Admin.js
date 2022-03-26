import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <div className="d-flex justify-content-between bg-dark text-white p-2"><h1 className="text-center"><span>ADMIN PANEL</span></h1><Link to="/" className="text-danger mt-3 mr-2">LOGOUT</Link></div>
      <div className="container">
        <img
          src="/Admin-Page-Banner.png"
          alt="Admin Page Banner"
          className="img-fluid"
        />
        <hr/>
        <Link to="/registerStudent" className="btn btn-primary mx-2">
          Register Student
        </Link>
        <Link to="/registerEvent" className="btn btn-success mx-2">
          Register Event
        </Link>
        <Link to="/" className="btn btn-success mx-2">
            ALL EVENTS
        </Link>
      </div>
    </div>
  );
}

export default Admin;
