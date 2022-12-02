import ProfileCardSideBar from "../../Components/Sidebar/profilecardSidebar";

import AdminNavigationbar from "../../Components/Navigation/admin-navbar";

import SingleUser from "../../admin-singleuser";

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
            <SingleUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCommunication;
