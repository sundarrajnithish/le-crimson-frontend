import "./AdminUserListPage.css";
import AdminSide from "../../../Admin/Adminsidebar/admin-sidebar";
import AdminUserList from "../../../Admin/AdminUserList/AdminUserList";

import Header from "../../../common/header/Header";

const AdminUserListPage = () => {
  return (
    <>
    <Header />
    <div className="admin-list">
      <AdminSide />

      <div className="admin-list-container">
        <AdminUserList />
        <hr />
      </div>
    </div>
    </>
  );
};

export default AdminUserListPage;
