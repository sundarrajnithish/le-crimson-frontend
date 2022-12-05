import "./DropDown.css";
import portrait from "./Profile-Icon.png";

import React, { useState, useEffect, useRef } from "react";

import {Link} from "react-router-dom"

function DropDownProfile() {
  const [open, setOpen] = useState(false);

  const items = JSON.parse(localStorage.getItem('login-data'));

  return (
    <>
      <div className="menu-container">
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={items["profileObj"]["imageUrl"]}></img>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul>
            <Link to='/profile'>
            <DropDownItem text={"My Profile"} />
            </Link>
            <Link to='/'>
            <DropDownItem text={"Logout"} />
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
function DropDownItem(props) {
  return (
    <li className="dropitems">
      {props.text}
    </li>
  );
}
export default DropDownProfile;
