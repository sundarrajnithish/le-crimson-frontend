import "./profilecardsidebar.css";

import { Link } from "react-router-dom";

const ProfileCardSideBar = () => {
  return (
    <div className="Profile-comm-Sidebar">
      {/* <div className="comm-top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <img
            className="comm-logo"
            src={require("./logor.png")}
            alt="leCrimson"
          ></img>
        </Link>
      </div> */}
      <hr />
      <div className="center">
        <ul>
          {/* <p className="side-title">Main</p>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li className="comm-lists">
              <i id="icon" class="fa-solid fa-house"></i>
              <span className="side-comm-span">Home</span>
            </li>
          </Link> */}
          <hr />
          <p className="side-title">User Settings</p>
          <Link to="/followers" style={{ textDecoration: "none" }}>
            <li className="comm-lists">
              <i id="icon" class="fa-regular fa-user"></i>

              <span className="side-comm-span">All Followers</span>
            </li>
          </Link>
          <Link to="/friends" style={{ textDecoration: "none" }}>
            <li className="comm-lists">
              <i id="icon" class="fa-solid fa-user-group"></i>
              <span className="side-comm-span">All Friends</span>
            </li>
          </Link>
          <Link to="/friendrequest" style={{ textDecoration: "none" }}>
            <li className="comm-lists">
              <i id="icon" class="fa-solid fa-envelope-open-text"></i>
              <span className="side-comm-span">Friend Requests</span>
            </li>
            <Link to="/suggesions" style={{ textDecoration: "none" }}>
              <li className="comm-lists">
                <i id="icon" class="fa-regular fa-address-book"></i>
                <span className="side-comm-span">Suggessions</span>
              </li>
            </Link>
            </Link>
          <Link to="/blocked" style={{ textDecoration: "none" }}>
            <li className="comm-lists">
              <i id="icon" class="fa-solid fa-user-lock"></i>
              <span className="side-comm-span">Blocked users</span>
            </li>
          </Link>
          <hr />
          <p className="side-title">Profile Settings</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li className="comm-lists">
              <i id="icon" class="fa-solid fa-id-badge"></i>
              <span className="side-comm-span">Profile</span>
            </li>
          </Link>

          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="comm-lists">
              <i id="icon" class="fa-solid fa-arrow-right-from-bracket"></i>
              <span className="side-comm-span">Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCardSideBar;
