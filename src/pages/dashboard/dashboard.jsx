import "./dashboard.css";
import AdminSide from "../../components/Adminsidebar/admin-sidebar";
import AdminNavigationbar from "../../components/Adminnavbar/admin-navbar";
import AdminWidget from "../../components/AdminWidget/admin-widgets";
import AdminCharts2 from "../../components/AdminCharts/adminchartbar";
import AdminFeatures from "../../components/AdminFeatures/adminfeatures";
import AdminTable from "../../components/table/admin-table";

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
          <AdminCharts2 />
        </div>
        <div className="admin-list-container">
          <div className="admin-list-title">Active User list</div>
          <AdminTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
