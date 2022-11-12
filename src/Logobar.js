import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Logobar.css";

function Logobar() {
  return (
    <>
      <nav className="logobar">
        <div className="logobar-container">
          <Link to="/" className="bar-logo">
            <img
              className="logoB"
              src={require("./logor.png")}
              alt="Company Logo"
            />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Logobar;
