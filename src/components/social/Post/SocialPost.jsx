import "./Socialpost.css";

import { Users } from "../dummyData";
import { useState, useEffect } from "react";
import axios from 'axios'

const SocialPost = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const [items, setItems] = useState([])
  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get('https://lecrimson-backend.herokuapp.com/news/feed?userId=4')
      console.log(response.data, "Data at Social Post")
      localStorage.setItem("post-data", JSON.stringify(response.data))
        setItems(response.data)
    }
        getItems()
}, [])

let post_data = JSON.parse(localStorage.getItem("post-data"))
// console.log( post_data["0"]["profilePic"], "Fetched!")

  return (
    <>
      <div className="social-post-container">
        <div className="social-post-wrapper">
          <div className="social-post-top">
            <div className="social-post-top-left">
              <img
                className="social-post-profileImg"
                src={
                  post_data["0"]["profilePic"]
                }
                alt="person1"
              />
              <span className="social-post-name">
                {post_data["0"]["name"]}
              </span>
              <span className="social-post-date">{post_data["0"]["publishDate"]}</span>
            </div>
            <div className="social-post-top-right"></div>
          </div>
          <div className="social-post-center">
            <span className="social-post-text">{post_data["0"]["headlines"]}</span>
            <img
              className="social-post-postImg"
              src={post_data["0"]["cover"]}
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
              <span className="postCommentText">{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SocialPost;
