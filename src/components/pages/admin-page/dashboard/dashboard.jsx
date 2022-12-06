import "./dashboard.css";
import AdminSide from "../../../Admin/Adminsidebar/admin-sidebar";

import AdminWidget from "../../../Admin/AdminWidget/admin-widgets";
import AdminCharts2 from "../../../Admin/AdminCharts/adminchartbar";

import AdminFeatures from "../../../Admin/AdminFeatures/adminfeatures";

import Header from "../../../common/header/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="adminDash">
        <AdminSide />
        <div className="dash-container">
          <div className="admin-widgets">
            <AdminWidget type="Categories" />

            <AdminWidget type="Admin Users" />
          </div>
          <div className="admin-charts">
            <AdminFeatures />
            <AdminCharts2 />
          </div>
          <div className="admin-list-container">
            <AdminWidget type="Logs" />
            <hr />
            <AdminWidget type="User" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
