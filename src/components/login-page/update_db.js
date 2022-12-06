import React, { useEffect, useState } from "react";

import "../location/location";

import axios from "axios";

import CheckCircle from "../preferences/new-user/CheckCircle";

import { useNavigate } from "react-router-dom";

import Homepages from "../pages/home_page/Homepages";

const Update_Db = () => {
  // Send data to DB
  const [items, setItems] = useState([]);
  useEffect(() => {
    let login_data = JSON.parse(localStorage.getItem("login-data"));
    let location = localStorage.getItem("location-coordinates");
    console.log(
      login_data,
      "Sending... PUT to https://lecrimson-backend.herokuapp.com/profile"
    );

    const getItems = async () => {
      const send_data = await axios
        .put("https://lecrimson-backend.herokuapp.com/profile", {
          firstName: login_data["profileObj"]["name"],
          lastName: login_data["profileObj"]["familyName"],
          email: login_data["profileObj"]["email"],
          profilePic: login_data["profileObj"]["imageUrl"],
          loginSource: "Google",
          location: location,
        })

        .then(function (send_data) {
          console.log(send_data, "Axios Response at Update DB");
          setItems(send_data);
          localStorage.setItem(
            "user-db-data",
            JSON.stringify(send_data["data"])
          );
          localStorage.setItem("name", send_data["data"]["firstName"]);
          localStorage.setItem("email", send_data["data"]["email"]);
          localStorage.setItem(
            "login-db-preferences",
            send_data["data"]["favCategory"]
          );
          localStorage.setItem("user-id", send_data["data"]["id"]);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    getItems();
  }, []);

  let navigate = useNavigate();
  const route = () => {
    let path = `/home`;
    navigate(path);
  };

  let db_preferences = localStorage.getItem("login-db-preferences");
  console.log(db_preferences, "Response ");

  return (
    <div>
      {(() => {
        if (db_preferences == null || db_preferences == "[]") {
          return <CheckCircle />;
        } else {
          console.log(db_preferences);
          return (
            <>
              <Homepages />
              {/*Preferences Fetched! Redirecting to Home*/}
            </>
          );
        }
      })()}
    </div>
  );
};

export default Update_Db;
