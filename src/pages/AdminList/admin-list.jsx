import "./adminlist.css";
import AdminSide from "../../components/Adminsidebar/admin-sidebar";
import AdminNavigationbar from "../../components/Adminnavbar/admin-navbar";
import AdminDatatable from "../../components/AdminDatatable/admin-datable";

const AdminList = () => {
  return (
    <div className="admin-list">
      <AdminSide />

      <div className="admin-list-container">
        <AdminNavigationbar />
        <AdminDatatable />
      </div>
    </div>
  );
};

export default AdminList;
