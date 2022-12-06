import Records from "./data.json";
import "./friends.css";

const Friends = () => {
  return (
    <>
    <div>
    <h2>Friends</h2>
    <br />
      {Records &&
        Records.map((record) => {
          return (
            <div key={record.id}>
              <table sx={{ minWidth: 650 }} aria-label="simple table">
                <tr>
                  <th>ID</th>

                  <th>Name</th>
                  <th>Status</th>
                  <th>.</th>
                </tr>

                {record.friends &&
                  record.friends.map((data) => {
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
                        <td>{data.friendProfileName}</td>
                        <td>Friends</td>
                        <td>
                          <button value={data.id} className="pro-button">
                            Unfriend
                          </button>
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

export default Friends;
