import "./Suggession.css";
import Records from "./profile-response.json";

const Suggession = () => {
  return (
    <div>
      <table sx={{ minWidth: 650 }} aria-label="simple table">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Location</th>
          <th>.</th>
        </tr>

        {Records &&
          Records.map((record) => {
            return (
              <div key={record.id}>
                <tr>
                  <td>{record.id}</td>
                  {/*<TableCell>
                              <span className="user-logo">
                                <img
                                  src={require("./Profile-icon.png")}
                                  alt="i"
                                  className="pro-img"
                                ></img>
                              </span>
                      </TableCell>*/}
                  <td>{record.firstName}</td>
                  <td>{record.location}</td>
                  <td>
                    <button className="pro-button">Follow</button>
                  </td>
                </tr>
              </div>
            );
          })}
      </table>
    </div>
  );
};
export default Suggession;
