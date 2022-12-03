import React, { useState, useEffect } from "react";

import axios from "axios";

// import Hero from "./Hero"

import Header from "../common/header/Header";
import Hero from "./Hero";
import Footer from "../common/footer/footer";
import Heading from "../common/heading/Heading";

import Popular from "./popular/Popular";

import Music from "./musics/Music";

import "./homepages.css";
// import Footer from "../common/footer/footer"

// import Heading from "../common/heading/Heading"

const Homepages = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let preferences = localStorage.getItem("preferences");
    let data = JSON.parse(localStorage.getItem("login"));
    console.log(data, "Data for PUT");
    const getItems = async () => {
      const response = await axios
        .put("https://lecrimson-backend.herokuapp.com/profile", {
          firstName: data["profileObj"]["givenName"],
          lastName: data["profileObj"]["familyName"],
          email: data["profileObj"]["email"],
          profilePic: data["profileObj"]["imageUrl"],
          loginSource: "Google",
          location: null,
          favCategory: preferences,
          friends: null,
          followers: null,
          blocked: null,
        })
        .then(function (response) {
          console.log(response, "response from DB at Homepage");
          localStorage.setItem("profile-db", JSON.stringify(response));
          localStorage.setItem("preferences", JSON.parse(data["favCategory"]));
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(response, "Response at db_test");
      setItems(response);

      // console.log(items, "Before Shuffling")
      // items = arrayShuffle(items)
      // console.log(shuffleItem, "Shuffled")
    };
    getItems();
  }, []);

  // let navigate = useNavigate();
  // const route = () => {
  //   let path = `/Preference`;
  //   navigate(path);
  // };
  return (
    <>
      <div class="container-h">
        <Header />
        <Heading title="News" />
        <Hero />
        {/* <Popular /> */}
        {/* <Music /> */}
        <br />
        <Footer />
      </div>
      {/* <Homes /> */}
    </>
  );
};

export default Homepages;
