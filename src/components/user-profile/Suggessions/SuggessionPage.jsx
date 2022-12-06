import "./SuggessionPage.css";
import ProfileCardSideBar from "../Sidebar/profilecardSidebar";
import AdminNavigationbar from "../Navigation/admin-navbar";
import Suggession from "./Suggession";

const SuggessionPage = () => {
  return (
    <div className="followComm">
      <ProfileCardSideBar />

      <div className="followCommContainer">
        <hr />
        <div className="followlist">
          <h2>Suggessions For You</h2>
          <Suggession />
        </div>
      </div>
    </div>
  );
};
export default SuggessionPage;
