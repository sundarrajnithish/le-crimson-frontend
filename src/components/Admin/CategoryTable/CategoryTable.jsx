import "./Categorytable.css";

const CategoryTable = () => {
  return (
    <div>
      <table sx={{ Width: 800 }} aria-label="simple table" className="table">
        <tr>
          <th className="th">ID</th>
          <th className="th">Category</th>
          <th className="th">User Count</th>
        </tr>
        <hr />

        <tr>
          <td className="td">1</td>
          <td
            className="td1"
            style={{ textAlign: "left", paddingLeft: "100px" }}
          >
            <i style={{ color: "#8884d8" }} class="fa-solid fa-globe"></i> World
          </td>
          <td style={{ color: "green" }} className="td">
            1
          </td>
        </tr>
        <tr>
          <td className="td">2</td>
          <td
            className="td1"
            style={{ textAlign: "left", paddingLeft: "100px" }}
          >
            <i style={{ color: "#8dd1e1" }} class="fa-solid fa-volleyball"></i>{" "}
            Sports
          </td>
          <td style={{ color: "green" }} className="td">
            4
          </td>
        </tr>
        <tr>
          <td className="td">3</td>
          <td
            className="td1"
            style={{ textAlign: "left", paddingLeft: "100px" }}
          >
            <i style={{ color: "#83a6ed" }} class="fa-solid fa-briefcase"></i>{" "}
            Business
          </td>
          <td style={{ color: "green" }} className="td">
            4
          </td>
        </tr>
        <tr>
          <td className="td">4</td>
          <td
            className="td1"
            style={{ textAlign: "left", paddingLeft: "100px" }}
          >
            <i style={{ color: "#82ca9d" }} class="fa-solid fa-heart-pulse"></i>{" "}
            Health
          </td>
          <td style={{ color: "green" }} className="td">
            0
          </td>
        </tr>
        <tr>
          <td className="td">5</td>
          <td
            className="td1"
            style={{ textAlign: "left", paddingLeft: "100px" }}
          >
            <i
              style={{ color: "#82ca9d" }}
              class="fa-solid fa-landmark-dome"
            ></i>{" "}
            Politics
          </td>
          <td style={{ color: "green" }} className="td">
            0
          </td>
        </tr>
        <tr>
          <td className="td">6</td>
          <td
            className="td1"
            style={{ textAlign: "left", paddingLeft: "100px" }}
          >
            <i style={{ color: "#a4de6c" }} class="fa-solid fa-flask-vial"></i>{" "}
            Science
          </td>
          <td style={{ color: "green" }} className="td">
            2
          </td>
        </tr>
        <tr>
          <td className="td">7</td>
          <td
            className="td1"
            style={{ textAlign: "left", paddingLeft: "100px" }}
          >
            <i style={{ color: "#d0ed57" }} class="fa-solid fa-microchip"></i>{" "}
            Technology
          </td>
          <td style={{ color: "green" }} className="td">
            1
          </td>
        </tr>
        <tr>
          <td className="td">8</td>
          <td
            className="td1"
            style={{ textAlign: "left", paddingLeft: "100px" }}
          >
            <i style={{ color: "#ffc658" }} class="fa-solid fa-film"></i>{" "}
            Entertainment
          </td>
          <td style={{ color: "green" }} className="td">
            4
          </td>
        </tr>
      </table>
    </div>
  );
};

export default CategoryTable;
