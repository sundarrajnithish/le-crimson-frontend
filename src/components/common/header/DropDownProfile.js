import "./DropDown.css";
import portrait from "./Profile-Icon.png";

import React, { useState, useEffect, useRef } from "react";

function DropDownProfile() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      <div className="menu-container">
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={portrait}></img>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul>
            <DropDownItem text={"My Profile"} />

            <DropDownItem text={"Logout"} />
          </ul>
        </div>
      </div>
    </>
  );
}
function DropDownItem(props) {
  return (
    <li className="dropitems">
      <a>{props.text}</a>
    </li>
  );
}
export default DropDownProfile;
