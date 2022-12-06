import "./friendpage.css";
import ProfileCardSideBar from "../Sidebar/profilecardSidebar";
import AdminNavigationbar from "../Navigation/admin-navbar";
import Friends from "./Friendstable";

import Header from "../../common/header/Header";

const FriendPage = () => {
  return (
    <>
      <Header />
      <div className="friendComm">
        <ProfileCardSideBar />

        <div className="friendCommContainer">
          <hr />
          <div className="friendlist">
            {/* <h2>Friends</h2> */}
            <Friends />
          </div>
        </div>
      </div>
    </>
  );
};
export default FriendPage;
