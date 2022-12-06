import "./Categorylist.css";
import AdminSide from "../../../Admin/Adminsidebar/admin-sidebar";

import CategoryTable from "../../../Admin/CategoryTable/CategoryTable";

import Header from "../../../common/header/Header";

const CategoryList = () => {
  return (
    <>
      <Header />
      <div className="admin-list">
        <AdminSide />

        <div className="admin-list-container">
          <CategoryTable />
          <hr />
        </div>
      </div>
    </>
  );
};

export default CategoryList;
