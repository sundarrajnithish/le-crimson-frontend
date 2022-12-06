import "./adminside.css";

import { Link } from "react-router-dom";

const AdminSide = () => {
  return (
    <div className="admin-Sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="a-logo">leCrimson</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul className="ul">
          <p className="side-title">MAIN</p>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li className="li">
              <i class="fa-solid fa-house" id="side-icons"></i>
              <span className="side-span">Home</span>
            </li>
          </Link>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li className="li">
              <i class="fa-brands fa-flipboard" id="side-icons"></i>
              <span className="side-span">Dashboard</span>
            </li>
          </Link>
          <p className="side-title">FEATURES</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li className="li">
              <i class="fa-solid fa-users" id="side-icons"></i>
              <span className="side-span">Users</span>
            </li>
          </Link>
          <Link to="/categories" style={{ textDecoration: "none" }}>
            <li className="li">
              <i class="fa-solid fa-sitemap" id="side-icons"></i>
              <span className="side-span">Categories</span>
            </li>
          </Link>

          <p className="side-title">ADMIN</p>
          <Link to="/adminuser" style={{ textDecoration: "none" }}>
            <li className="li">
              <i class="fa-solid fa-envelope-open-text" id="side-icons"></i>
              <span className="side-span">Admin Users</span>
            </li>
          </Link>
          <Link to="/logs" style={{ textDecoration: "none" }}>
            <li className="li">
              <i class="fa-solid fa-folder-closed" id="side-icons"></i>
              <span className="side-span">System Logs</span>
            </li>
          </Link>

          <p className="side-title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li className="li">
              <i class="fa-solid fa-id-badge" id="side-icons"></i>
              <span className="side-span">Profile</span>
            </li>
          </Link>
          <Link to="/logout" style={{ textDecoration: "none" }}>
            <li className="li">
              <i class="fa-solid fa-right-from-bracket" id="side-icons"></i>
              <span className="side-span">Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default AdminSide;
