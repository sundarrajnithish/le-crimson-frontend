import ProfileCardSideBar from "../../user-profile/Sidebar/profilecardSidebar";

import SingleUser from "../../user-profile/SingleUser/admin-singleuser";

import Header from "../../common/header/Header";

import "./profilecommunication.css";

const ProfileCommunication = () => {
  return (
    <>
    <Header />
    <div className="ProfileComm">
      <ProfileCardSideBar />
      <div className="ProfileCommContainer">
        <hr />
        <div className="profile-card-comm-list">
          <div>
            <SingleUser />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfileCommunication;
