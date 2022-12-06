import "./AdminTable1.css";
import Table from "react-bootstrap/Table";

import Records from "./table.json";

const AdminTable1 = () => {
  return (
    <div>
      <table sx={{ Width: 800 }} aria-label="simple table" className="table">
        <tr>
          <th className="th">ID</th>
          <th className="th">Name</th>
          <th className="th">Email</th>
          <th className="th">Location</th>
          <th className="th">Source</th>

          <th className="th">Status</th>
        </tr>
        <hr />
        {Records &&
          Records.map((record) => {
            return (
              <tr>
                <td className="td">{record.id}</td>
                <td className="td">{record.firstName}</td>
                <td className="td">{record.email}</td>
                <td className="td">{record.location}</td>
                <td className="td">Google</td>

                <td className="td">{record.status}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default AdminTable1;
