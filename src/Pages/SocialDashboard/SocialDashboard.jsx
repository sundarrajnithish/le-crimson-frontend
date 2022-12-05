import "./social-dashboard.css";
import SocialTopBar from "../../Components/SocialTopBar/SocialTopBar";
import SocialSideBar from "../../Components/SocialSideBar/SocialSideBar";
import SocialFeed from "../../Components/SocialFeed/SocialFeed";
import SocialRightBar from "../../Components/SocialRightBar/SocialRightBar";

const SocialDashboard = () => {
  return (
    <>
      <SocialTopBar />
      <div className="social-dash-container">
        <SocialSideBar />
        <SocialFeed />
        <SocialRightBar />
      </div>
    </>
  );
};

export default SocialDashboard;
