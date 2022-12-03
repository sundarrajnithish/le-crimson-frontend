import "./adminlist.css";
import AdminSide from "../Adminsidebar/admin-sidebar";
import AdminNavigationbar from "../Adminnavbar/admin-navbar";
import AdminDatatable from "../AdminDatatable/admin-datable";

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
