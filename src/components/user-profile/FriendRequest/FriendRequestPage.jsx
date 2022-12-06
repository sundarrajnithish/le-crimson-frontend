import "./FriendRequestPage.css";
import ProfileCardSideBar from "../Sidebar/profilecardSidebar";
import AdminNavigationbar from "../Navigation/admin-navbar";
import FriendRequest from "./FriendRequest";

// import Request_data from "./request_data";

import Header from "../../common/header/Header";

const FriendRequestPage = () => {
  return (
    <>
    {/* <Request_data /> */}
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
