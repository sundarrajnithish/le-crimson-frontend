import "./AdminUserList.css";

const AdminUserList = () => {
  return (
    <div>
      <table sx={{ Width: 800 }} aria-label="simple table" className="table">
        <tr>
          <th className="th">ID</th>
          <th className="th">USERS</th>
          <th className="th">ROLE</th>
        </tr>
        <hr />

        <tr>
          <td className="td">1</td>
          <td
            className="td1"
            style={{ textAlign: "left", paddingLeft: "100px" }}
          >
            Ragapriya Saravanan
          </td>
          <td style={{ color: "green" }} className="td">
            Admin
          </td>
        </tr>
        <tr>
          <td className="td">2</td>
          <td
            className="td1"
            style={{ textAlign: "left", paddingLeft: "100px" }}
          >
            Kirankishore Gunasekaran
          </td>
          <td style={{ color: "green" }} className="td">
            Admin
          </td>
        </tr>
        <tr>
          <td className="td">3</td>
          <td
            className="td1"
            style={{ textAlign: "left", paddingLeft: "100px" }}
          >
            Nitish Sundarraj Balaji
          </td>
          <td style={{ color: "green" }} className="td">
            Admin
          </td>
        </tr>
        <tr>
          <td className="td">4</td>
          <td
            className="td1"
            style={{ textAlign: "left", paddingLeft: "100px" }}
          >
            Mohamed Nabeel Deen Faizudeen
          </td>
          <td style={{ color: "green" }} className="td">
            Admin
          </td>
        </tr>

        <tr>
          <td className="td">5</td>
          <td
            className="td1"
            style={{ textAlign: "left", paddingLeft: "100px" }}
          >
            Sindhiya Thirunavukkarasu Athithan
          </td>
          <td style={{ color: "green" }} className="td">
            Admin
          </td>
        </tr>
      </table>
    </div>
  );
};

export default AdminUserList;
