import React from "react";
import "./NavFrame.css";

function NavFrame(props) {
  return (
    <>
      <div className="nav-container">
        <p className="text">{props.title}</p>
      </div>
    </>
  );
}

export default NavFrame;
