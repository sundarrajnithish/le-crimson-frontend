import React from "react";


import "./profile.css";
function profile() {
    const items = JSON.parse(localStorage.getItem('login'));
    console.log(items["profileObj"]["name"])
    console.log(items["profileObj"]["imageUrl"])

  const respose_after_login = {
    name: items["profileObj"]["name"],
    email: items["profileObj"]["email"],
    location: "Montreal",


  };
  return (
    <>
    
    <profile>
      <div className="container profile__container">
        <div className="profile__item">
          <div className="me">
            <img className="image" src={items["profileObj"]["imageUrl"]} alt="man" />
          </div>
        </div>
        <div className="profile__item">
          <h1>{respose_after_login.name}</h1>
          <h4>Email: {respose_after_login.email}</h4>
          <div className="location__container">
            <h4>Location: {respose_after_login.location}</h4>
          </div>
        </div>
      </div>
    </profile>
    </>
  );
};

export default profile;