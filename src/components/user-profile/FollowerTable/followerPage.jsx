import "./followerpage.css";
import ProfileCardSideBar from "../Sidebar/profilecardSidebar";
import AdminNavigationbar from "../Navigation/admin-navbar";
import Followers from "./followTable";

const FollowerPage = () => {
  return (
    <div className="followComm">
      <ProfileCardSideBar />

      <div className="followCommContainer">
        <hr />
        <div className="followlist">
          <h2>Followers</h2>
          <Followers />
        </div>
      </div>
    </div>
  );
};
export default FollowerPage;
