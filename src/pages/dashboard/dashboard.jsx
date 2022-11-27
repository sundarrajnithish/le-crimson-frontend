import "./dashboard.css";
import AdminSide from "../../components/Adminsidebar/admin-sidebar";
import AdminNavigationbar from "../../components/Adminnavbar/admin-navbar";
import AdminWidget from "../../components/AdminWidget/admin-widgets";
import AdminCharts from "../../components/AdminCharts/adminchart";
import AdminFeatures from "../../components/AdminFeatures/adminfeatures";

const Dashboard = () => {
  return (
    <div className="adminDash">
      <AdminSide />
      <div className="dash-container">
        <AdminNavigationbar />
        <div className="admin-widgets">
          <AdminWidget type="User" />
          <AdminWidget type="Categories" />
          <AdminWidget type="Logs" />
          <AdminWidget type="Notify" />
        </div>
        <div className="admin-charts">
          <AdminFeatures />
          <AdminCharts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
