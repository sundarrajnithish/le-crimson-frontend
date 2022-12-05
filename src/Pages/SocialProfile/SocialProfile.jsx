import "./Socialprofile.css";
import SocialTopBar from "../../Components/SocialTopBar/SocialTopBar";
import SocialSideBar from "../../Components/SocialSideBar/SocialSideBar";
import SocialFeed from "../../Components/SocialFeed/SocialFeed";
import SocialRightBar from "../../Components/SocialRightBar/SocialRightBar";

const SocialProfile = () => {
  return (
    <>
      <SocialTopBar />
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
