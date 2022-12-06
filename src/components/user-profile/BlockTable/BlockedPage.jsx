import "./BlockedPage.css";
import ProfileCardSideBar from "../Sidebar/profilecardSidebar";
import AdminNavigationbar from "../Navigation/admin-navbar";
import BlockedUser from "./Blockeduser";

import Header from "../../common/header/Header";

const BlockedUserPage = () => {
  return (
    <>
    <Header />
    <div className="blockComm">
      <ProfileCardSideBar />

      <div className="blockCommContainer">
        <hr />
        <div className="blocklist">
          
          <BlockedUser />
        </div>
      </div>
    </div>
    </>
  );
};
export default BlockedUserPage;
