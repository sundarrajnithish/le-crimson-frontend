import React from "react";
import Dropdown from "react-dropdown";
import { EmailShareButton } from "react-share";
import { EmailIcon } from "react-share";

import "./profile.css";
function Profile() {
  const items = JSON.parse(localStorage.getItem("login"));
  console.log(items["profileObj"]["name"]);
  console.log(items["profileObj"]["imageUrl"]);

  const respose_after_login = {
    name: items["profileObj"]["name"],
    email: items["profileObj"]["email"],
  };
  return (
    <profile>
      <div className="container profile__container">
        <div className="profile__item">
          <div className="me">
            <img
              className="image"
              src={items["profileObj"]["imageUrl"]}
              alt="man"
            />
          </div>
        </div>
        <div className="profile__item">
          <h1>{respose_after_login.name}</h1>
          <h4>Email: {respose_after_login.email}</h4>
          <div className="location__container">
            <select>
              <option value="country">Asia</option>
              <option value="country">Africa</option>
              <option value="country">Europe</option>
              <option value="country">North America</option>
              <option value="country">South America</option>
              <option value="country">Australia</option>
            </select>
          </div>
        </div>
      </div>
    </profile>
  );
}

export default Profile;
