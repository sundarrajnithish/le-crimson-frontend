import "./FriendRequestPage.css";
import ProfileCardSideBar from "../Sidebar/profilecardSidebar";
import AdminNavigationbar from "../Navigation/admin-navbar";
import FriendRequest from "./FriendRequest";

const FriendRequestPage = () => {
  return (
    <div className="followComm">
      <ProfileCardSideBar />

      <div className="followCommContainer">
        <hr />
        <div className="followlist">
          <h2>FriendRequest</h2>
          <FriendRequest />
        </div>
      </div>
    </div>
  );
};
export default FriendRequestPage;
