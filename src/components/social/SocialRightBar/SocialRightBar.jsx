import "./Social-rightbar.css";
import { Users } from "../../../dummyData";
import SocialOnline from "../SocialOnline/SocialOnline";

const SocialRightBar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="social-birthday-container">
          <img
            className="birthday"
            src={require("./gift.png")}
            alt="birthday"
          />
          <span className="birthday-text">
            sam and 3 other friends have a birthday today
          </span>
        </div>
        <img className="social-rightbar-Ad" src={require("./ad.png")} alt="" />
        <h4 className="social-rightbar-Title">Online Friends</h4>
        <ul className="social-rightbar-FriendList">
          {Users.map((u) => (
            <SocialOnline key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="social-rightbar-Title">User Information Title</h4>
        <div className="social-rightbar-Info">
          <div className="social-rightbar-Info-Item">
            <span className="social-rightbar-Info-Key">City:</span>
            <span className="social-rightbar-Info-Value">NewYork</span>
          </div>
        </div>
        <h4 className="social-rightbar-Title">User Friends</h4>
        <div className="social-rightbar-followings">
          <div className="social-rightbar-following">
            <img
              className="social-rightbar-followingImg"
              src={require("./ad.png")}
              alt=""
            />
            <span className="social-rightbar-followingName">John</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="social-rightbar">
        <div className="social-rightbar-wrapper">
          <HomeRightbar />
        </div>
      </div>
    </>
  );
};
export default SocialRightBar;
