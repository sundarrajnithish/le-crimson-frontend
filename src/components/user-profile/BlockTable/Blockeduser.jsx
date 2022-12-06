import Records from "./data.json";
import "./Blockeduser.css";

const BlockedUser = () => {
  return (
    <>
    <div>
      <h2>Blocked Users</h2>
      <br />
      {Records &&
        Records.map((record) => {
          return (
            <div className="table-container" key={record.id}>
              <table sx={{ minWidth: 650 }} aria-label="simple table">
                <tr>
                  <th>ID</th>

                  <th>Name</th>
                  <th>Status</th>
                  <th>.</th>
                </tr>

                {record.blocked &&
                  record.blocked.map((data) => {
                    return (
                      <tr>
                        <td>{data.id}</td>
                        {/*<TableCell>
                              <span className="user-logo">
                                <img
                                  src={require("./Profile-icon.png")}
                                  alt="i"
                                  className="pro-img"
                                ></img>
                              </span>
                      </TableCell>*/}
                        <td>{data.blockedProfileName}</td>
                        <td>Blocked</td>
                        <td>
                          <button className="pro-button">UnBlock</button>
                        </td>
                      </tr>
                    );
                  })}
              </table>
            </div>
          );
        })}
    </div>
    </>
  );
};

export default BlockedUser;
