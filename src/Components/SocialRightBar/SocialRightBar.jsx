import "./Social-rightbar.css";
import { Users } from "../../dummyData";
import SocialOnline from "../SocialOnline/SocialOnline";

const SocialRightBar = () => {
  return (
    <>
      <div className="social-rightbar">
        <div className="social-rightbar-wrapper">
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
          <img
            className="social-rightbar-Ad"
            src={require("./ad.png")}
            alt=""
          />
          <h4 className="social-rightbar-Title">Online Friends</h4>
          <ul className="social-rightbar-FriendList">
            {Users.map((u) => (
              <SocialOnline key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default SocialRightBar;
