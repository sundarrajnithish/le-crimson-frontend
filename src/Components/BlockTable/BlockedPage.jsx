import "./BlockedPage.css";
import ProfileCardSideBar from "../Sidebar/profilecardSidebar";
import AdminNavigationbar from "../Navigation/admin-navbar";
import BlockedUser from "./Blockeduser";

const BlockedUserPage = () => {
  return (
    <div className="blockComm">
      <ProfileCardSideBar />

      <div className="blockCommContainer">
        <AdminNavigationbar />
        <hr />
        <div className="blocklist">
          <h2>Blocked Users</h2>
          <BlockedUser />
        </div>
      </div>
    </div>
  );
};
export default BlockedUserPage;
