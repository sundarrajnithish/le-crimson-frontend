
import React, {useState, useEffect} from "react"

import axios from 'axios'

// import Hero from "./Hero"

import Header from "../../common/header/Header"
import Footer from "../../common/footer/footer"
// import Heading from "../common/heading/Heading"

import Hero from "./grid_news/grid_news";
import Popular from "./scroll_news/scroll_news";

import { useNavigate } from "react-router-dom";



import "./politics_page.css"
// import Footer from "../common/footer/footer"

// import Heading from "../common/heading/Heading"

const Politics_page = () => {
  
   const [items, setItems] = useState([]);
    useEffect(() => {
     let preferences = localStorage.getItem('login-db-preferences')
     let data = JSON.parse(localStorage.getItem('login-data'));
     console.log(data, "Data from Local Storage at Homepage")
    //  let send_data = data
    //   console.log(send_data, "Data for PUT @Homepage")

      const getItems = async () => {
          const response = await axios.put("https://lecrimson-backend.herokuapp.com/profile", {
            "firstName": data["profileObj"]["givenName"],
            "lastName": data["profileObj"]["familyName"],
            "email": data["profileObj"]["email"],
            "profilePic": data["profileObj"]["imageUrl"],
            "loginSource": "Google",
            "favCategory": preferences,
        })
          .then(function (response) {
            console.log(response, "Axios Response in Homepage");
            setItems(response)
          })
          .catch(function (error) {
            console.log(error); 
          });
      }
          getItems()
          
        }, [])
  
  let navigate = useNavigate();
  const route = () => {
    let path = `/Preference`;
    navigate(path);
  };
  return (
    <>
    <div>
      <Header />
      <Hero />
      <Popular />
       </div>
       <Footer />
    </>
  )
}

export default Politics_page
