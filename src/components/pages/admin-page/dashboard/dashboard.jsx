import "./dashboard.css";
import AdminSide from "../../../Admin/Adminsidebar/admin-sidebar";

import AdminWidget from "../../../Admin/AdminWidget/admin-widgets";
import AdminCharts2 from "../../../Admin/AdminCharts/adminchartbar";

import AdminFeatures from "../../../Admin/AdminFeatures/adminfeatures";

const Dashboard = () => {
  return (
    <div className="adminDash">
      <AdminSide />
      <div className="dash-container">
        <div className="admin-widgets">
          <AdminWidget type="User" />
          <AdminWidget type="Categories" />
          <AdminWidget type="Logs" />
          <AdminWidget type="Admin Users" />
        </div>
        <div className="admin-charts">
          <AdminFeatures />
          <AdminCharts2 />
        </div>
        <div className="admin-list-container"></div>
      </div>
    </div>
  );
};

export default Dashboard;
