import Records from "./data.json";
import "./trial.css";

const Trial = () => {
  return (
    <div>
      {Records &&
        Records.map((record) => {
          return (
            <div key={record.id}>
              <table className="table-follow">
                <tr>
                  <th> </th>
                  <th>Name</th>
                  <th>Status</th>
                  <th> </th>
                </tr>
                {record.followers &&
                  record.followers.map((data) => {
                    return (
                      <tr>
                        <td>
                          <span className="user-logo">
                            <img
                              src={require("./Profile-icon.png")}
                              alt="i"
                              className="pro-img"
                            ></img>
                          </span>
                        </td>
                        <td> {data.followerProfileName}</td>
                        <td>Friends:</td>
                        <td>
                          <button className="pro-button">Unfriend</button>
                          <button className="pro-button">Block</button>
                        </td>
                      </tr>
                    );
                  })}
              </table>
            </div>
          );
        })}
    </div>
  );
};

export default Trial;
