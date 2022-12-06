import "./AdminUserListPage.css";
import AdminSide from "../../../Admin/Adminsidebar/admin-sidebar";
import AdminUserList from "../../../Admin/AdminUserList/AdminUserList";

const AdminUserListPage = () => {
  return (
    <div className="admin-list">
      <AdminSide />

      <div className="admin-list-container">
        <AdminUserList />
        <hr />
      </div>
    </div>
  );
};

export default AdminUserListPage;
