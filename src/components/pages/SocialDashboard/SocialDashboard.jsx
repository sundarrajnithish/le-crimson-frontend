import "./social-dashboard.css";

import SocialSideBar from "../../social/SocialSideBar/SocialSideBar";
import SocialFeed from "../../social/SocialFeed/SocialFeed";
import SocialRightBar from "../../social/SocialRightBar/SocialRightBar";
import Header from "../../common/header/Header";

const SocialDashboard = () => {
  return (
    <>
      <Header />
      <div className="social-dash-container">
        <SocialSideBar />
        <SocialFeed />
        <SocialRightBar />
      </div>
    </>
  );
};

export default SocialDashboard;
