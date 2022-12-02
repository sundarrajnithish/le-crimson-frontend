import "./adminsingleuser.css";
import ProfileCardSideBar from "./Components/Sidebar/profilecardSidebar";
import AdminNavigationbar from "./Components/Navigation/admin-navbar";
//import AdminCharts1 from "../AdminCharts/adminChartspie";
//import AdminTable from "../table/admin-table";
const SingleUser = () => {
  return (
    <div className="singleuser">
      <div className="singleusercontainer">
        <div className="singleuser-top">
          <div className="singleuser-left">
            <div className="singleuser-edit">Edit</div>
            <h1 className="singleuser-title">Information</h1>
            <div className="singleuser-item">
              <img src="" alt="profleimg" className="singleuser-item-img" />
              <div className="singleuser-details">
                <h1 className="singleuser-name">Jane</h1>
                <div className="singleuser-items">
                  <span className="detailsKey">Email: </span>
                  <span className="detailsValue">jane24@gmail.com</span>
                </div>
                <div className="singleuser-items">
                  <span className="detailsKey">Location: </span>
                  <span className="detailsValue">IND</span>
                </div>
                <div className="singleuser-items">
                  <span className="detailsKey">ContactNo: </span>
                  <span className="detailsValue">123454321</span>
                </div>
                <div className="singleuser-items">
                  <span className="detailsKey">FavCategory: </span>
                  <span className="detailsValue">Technology,Sports</span>
                </div>
              </div>
            </div>
          </div>
          <div className="singleuser-right">{/*<AdminCharts1 />*/}</div>
        </div>
        <div className="singleuser-bottom">
          <h1 className="singleuser-title">User Logs</h1>
          {/*<AdminTable />*/}
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
