import "./SuggessionPage.css";
import ProfileCardSideBar from "../Sidebar/profilecardSidebar";

import Suggession from "./Suggession";

import Header from "../../common/header/Header";

const SuggessionPage = () => {
  return (
    <>
      <Header />
      <div className="followComm">
        <ProfileCardSideBar />

        <div className="followCommContainer">
          <hr />
          <div className="followlist">
            {/* <h2>Suggessions For You</h2> */}
            <Suggession />
          </div>
        </div>
      </div>
    </>
  );
};
export default SuggessionPage;