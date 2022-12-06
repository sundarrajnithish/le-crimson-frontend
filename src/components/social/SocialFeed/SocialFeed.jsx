import "./Socialfeed.css";
// import SocialShare from "../Share/SocialShare";
// import SocialPost from "../Post/SocialPost";
import { Posts } from "../dummyData";

import Heading from "../../common/heading/Heading";

import axios from 'axios'
import React, { useState, useEffect } from "react"

const SocialFeed = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get('https://lecrimson-backend.herokuapp.com/news/feed?userId=4')
      // ["0"]["articleUrl"]
      console.log(response.data, "Data at Social Feed")
        setItems(response)
    }
        getItems()
}, [])
console.log(items, "db data at social feed")
console.log(Posts, "posts dummy data")
  return (
    <>
    <Heading title="News Posts"/>
      <div className="social-feed">
        <div className="social-feed-wrapper">
          {/* <SocialShare /> */}
          {/* {console.log(items, "inside return")} */}
          {/* <SocialPost /> */}
        </div>
      </div>
    </>
  );
};

export default SocialFeed;
