import React, {useEffect, useState} from "react";
import axios from 'axios'


const Preferences_update = () => {

const [items, setItems] = useState([]);
    useEffect(() => {
      let login_data = JSON.parse(localStorage.getItem('login-data'))
      let location = (localStorage.getItem('location-coordinates'))
      let preferences = localStorage.getItem('live-preferences')
      console.log(login_data, "Sending... PUT to https://lecrimson-backend.herokuapp.com/profile @CheckCircle")
      const getItems = async () => {
          const send_data = await axios.put("https://lecrimson-backend.herokuapp.com/profile", {
            "firstName": login_data["profileObj"]["givenName"],
            "lastName": login_data["profileObj"]["familyName"],
            "email": login_data["profileObj"]["email"],
            "profilePic": login_data["profileObj"]["imageUrl"],
            "loginSource": "Google",
            "location": location,
            "favCategory": preferences,
            "friends": null,
            "followers": null,
            "blocked": null
        }
        )
        
          .then(function (send_data) {
            console.log(send_data, "Response from DB at preferences process");
            setItems(send_data)

            localStorage.setItem('login-db-preferences', send_data["data"]["favCategory"])
          })
          .catch(function (error) {
            console.log(error);
          });
          
      }
          getItems()
        }, [])

        return (
            <>
            </>
        )
}
export default Preferences_update