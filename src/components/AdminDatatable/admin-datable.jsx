import "./admindatatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./admindatatabledata";

const AdminDatatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction1">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="admin-datatable">
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};
export default AdminDatatable;
