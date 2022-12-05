import "./Socialprofile.css";

import SocialSideBar from "../../social/SocialSideBar/SocialSideBar";
import SocialFeed from "../../social/SocialFeed/SocialFeed";
import SocialRightBar from "../../social/SocialRightBar/SocialRightBar";
import Header from "../../common/header/Header";

const SocialProfile = () => {
  return (
    <>
      <Header />
      <div className="social-profile-container">
        <SocialSideBar />
        <div className="social-profile-right">
          <div className="social-profile-right-top">
            <div className="social-profile-cover">
              <img
                className="social-profile-coverImg"
                src={require("./5.jpeg")}
                alt=""
              />
              <img
                className="social-profile-userImg"
                src={require("./1.jpeg")}
                alt=""
              />
            </div>
            <div className="social-profile-info">
              <h4 className="social-profile-info-name">Sin</h4>
              <span className="social-profile-info-desc">helloooo</span>
            </div>
          </div>
          <div className="social-profile-right-bottom">
            <SocialFeed />
            <SocialRightBar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialProfile;
