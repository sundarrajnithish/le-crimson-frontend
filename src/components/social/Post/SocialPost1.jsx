// import "./Socialpost.css";

// // import { Users } from "../dummyData";
// // import { useState } from "react"
// import { useState, useEffect } from "react";
// import axios from 'axios'
// // import Users_data from "./users";

// const SocialPost1 = ({ post }) => {
//   const [like, setLike] = useState(post.like);
//   const [isLiked, setIsLiked] = useState(false);

//   // const likeHandler = () => {
//   //   setLike(isLiked ? like - 1 : like + 1);
//   //   setIsLiked(!isLiked);
//   // };

//   const [items, setItems] = useState([])
//   useEffect(() => {
//     const getItems = async () => {
//       const response = await axios.get('https://lecrimson-backend.herokuapp.com/news/feed?userId=4')
//       console.log(response.data, "Data at users.js")
//       // setItems({id: response.data["0"]["id"], profilePicture: response.data["0"]["profilePic"], username: response.data["0"]["name"]})
//       setItems(response.data)
//       localStorage.setItem("post-data", JSON.stringify(items))
//     }
//         getItems()
// }, [])
// let Users = items
// console.log(Users, "Items at social post")
// console.log(Users, "This is working data")
// // let Users = items

//   // let Users = localStorage.getItem("post-data")
//   return (
//     <>
//     {/* <Users_data /> */}
//     {/* <>{localStorage.getitem("post-data")}</> */}
      
//           {/* <div className="social-post-bottom">
//             <div className="social-post-bottom-left">
//               <img
//                 className="social-post-like"
//                 src={require("./heart.png")}
//                 onClick={likeHandler}
//                 alt=""
//               />
//               <img
//                 className="social-post-like"
//                 src={require("./like.png")}
//                 onClick={likeHandler}
//                 alt=""
//               />
//               <span className="social-post-like-counter">
//                 {like} people like it
//               </span>
//             </div>
//             <div className="social-post-bottom-right">
//               <span className="postCommentText">{post.comment} comments</span>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </>
//   );
// };
// export default SocialPost1;
