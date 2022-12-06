import "./FriendRequestPage.css";
import ProfileCardSideBar from "../Sidebar/profilecardSidebar";
import AdminNavigationbar from "../Navigation/admin-navbar";
import FriendRequest from "./FriendRequest";

import Header from "../../common/header/Header";

const FriendRequestPage = () => {
  return (
    <>
    <Header />
    
    <div className="followComm">
      <ProfileCardSideBar />

      <div className="followCommContainer">
        <hr />
        <h2>FriendRequest</h2>
        <div className="followlist">
          
          <FriendRequest />
        </div>
      </div>
    </div>
    </>
  );
};
export default FriendRequestPage;
