import "./Socialpost.css";

import { Users } from "../../../dummyData";
import { useState } from "react";

const SocialPost = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="social-post-container">
        <div className="social-post-wrapper">
          <div className="social-post-top">
            <div className="social-post-top-left">
              <img
                className="social-post-profileImg"
                src={
                  Users.filter((u) => u.id === post.userId)[0].profilePicture
                }
                alt="person1"
              />
              <span className="social-post-name">
                {Users.filter((u) => u.id === post.userId)[0].username}
              </span>
              <span className="social-post-date">{post?.date}</span>
            </div>
            <div className="social-post-top-right"></div>
          </div>
          <div className="social-post-center">
            <span className="social-post-text">{post.desc}</span>
            <img
              className="social-post-postImg"
              src={post.photo}
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
