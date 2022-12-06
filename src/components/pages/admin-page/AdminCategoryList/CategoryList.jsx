import "./Categorylist.css";
import AdminSide from "../../../Admin/Adminsidebar/admin-sidebar";

import CategoryTable from "../../../Admin/CategoryTable/CategoryTable";
import AdminRainbowChart from "../../../Admin/AdminCharts/adminchartrainbow";

const CategoryList = () => {
  return (
    <div className="admin-list">
      <AdminSide />

      <div className="admin-list-container">
        <CategoryTable />
        <hr />
        <AdminRainbowChart />
      </div>
    </div>
  );
};

export default CategoryList;
