import React from 'react'

import { useState, useEffect } from "react";
import axios from 'axios'
// import { Users } from '../dummyData';

const Users_data = () => {
    const [items, setItems] = useState([])
  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get('https://lecrimson-backend.herokuapp.com/news/feed?userId=4')
      console.log(response.data, "Data at users.js")
      setItems({id: response.data["0"]["id"], profilePicture: response.data["0"]["profilePic"], username: response.data["0"]["name"]})
      localStorage.setItem("post-data", JSON.stringify(items))
    }
        getItems()
}, [])

console.log(items, "Items are finally here!!!")

let post_data = JSON.parse(localStorage.getItem("post-data"))
console.log(post_data, "Fetched!")

  return (
  <></>
    
  )
}

export default Users_data;