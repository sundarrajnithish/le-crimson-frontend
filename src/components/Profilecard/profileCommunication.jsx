import ProfileCardSideBar from "../profilecardSidebar";
import Profilecard from "../ProfileCard";
import AdminNavigationbar from "../admin-navbar";
import "./profilecommunication.css";

const ProfileCommunication = () => {
  return (
    <div className="ProfileComm">
      <ProfileCardSideBar />
      <div className="ProfileCommContainer">
        <AdminNavigationbar />
        <hr />
        <div className="profile-card-comm-list">
          <div>
            <h3>Suggessions for you</h3>
            <br />
          </div>
          <hr />
          <Profilecard />
        </div>
      </div>
    </div>
  );
};

export default ProfileCommunication;
