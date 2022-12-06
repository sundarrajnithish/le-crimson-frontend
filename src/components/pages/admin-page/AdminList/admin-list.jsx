import "./adminlist.css";
import AdminSide from "../../../Admin/Adminsidebar/admin-sidebar";

import AdminTable1 from "../../../Admin/AdminTable1/AdminTable1";

const AdminList = () => {
  return (
    <div className="admin-list">
      <AdminSide />

      <div className="admin-list-container">
        <span className="admin-list-span">User List</span>
        <hr />
        <AdminTable1 />
      </div>
    </div>
  );
};

export default AdminList;
