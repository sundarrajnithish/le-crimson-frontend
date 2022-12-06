import "./AdminLogsPage.css";
import AdminSide from "../../../Admin/Adminsidebar/admin-sidebar";

import AdminLogs from "../../../Admin/AdminLogs/AdminLogs";

import Header from "../../../common/header/Header";

const AdminLogsPage = () => {
  return (
    <>
      <Header />
      <div className="admin-list">
        <AdminSide />

        <div className="admin-list-container">
          <AdminLogs />
          <hr />
        </div>
      </div>
    </>
  );
};

export default AdminLogsPage;
