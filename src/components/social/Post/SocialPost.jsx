import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios'
import "./Socialpost.css";

const SocialPost = () => {

  const [like, setLike] = useState();
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

    const [user, setUser] = useState([])
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get('https://lecrimson-backend.herokuapp.com/news/feed?userId=4')
      console.log(response.data, "Data at users.js")
      // setItems({id: response.data["0"]["id"], profilePicture: response.data["0"]["profilePic"], username: response.data["0"]["name"]})
      setUser(response.data)
      // localStorage.setItem("post-data", JSON.stringify(user))
    }
        getUser();
}, [])
//  
// let Users = items
// console.log(items, "Items at social post")
// console.log(items, "This is working data")
let posts = [0, 1, 2]
  return (
    <>
    <div>
      {posts.map((data) => ( 
    <div className="social-post-container">
    <div className="social-post-wrapper">
      <div className="social-post-top">
        <div className="social-post-top-left">
          
          <img
            className="social-post-profileImg"
            src={user.length && user[data]?.profilePic}
            alt="person1"
          />
          
          <span className="social-post-name">
            {user.length && user[data]?.name}
          </span>
          <span className="social-post-date">{user.length && user[data]?.publishDate}</span>
        </div>
        <div className="social-post-top-right"></div>
      </div>
      <div className="social-post-center">
        <span className="social-post-text">{user.length && user[data]?.headlines}</span>
        <img
          className="social-post-postImg"
          src={user.length && user[data]?.cover}
          alt="postpic"
        />
      </div>
      <div className="social-post-bottom">
            <div className="social-post-bottom-left">
              <img
                className="social-post-like"
                src={require("./heart.png")}
                onClick={likeHandler}
                alt=""
              />
              <img
                className="social-post-like"
                src={require("./like.png")}
                onClick={likeHandler}
                alt=""
              />
              <span className="social-post-like-counter">
                {like} people like it
              </span>
            </div>
            <div className="social-post-bottom-right">
              <span className="postCommentText"> comments</span>
            </div>
      </div>
      </div>
      </div>
      ))}
      </div>
    </>
  )
}

export default SocialPost