import "./profilecardsidebar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const ProfileCardSideBar = () => {
  return (
    <div className="Profile-comm-Sidebar">
      <div className="comm-top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            className="comm-logo"
            src={require("../../logor.png")}
            alt="leCrimson"
          ></img>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="side-title">Main</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="comm-lists">
              <HomeOutlinedIcon className="side-icons" />
              <span className="side-comm-span">Home</span>
            </li>
          </Link>
          <hr />
          <p className="side-title">User Settings</p>
          <Link to="/followers" style={{ textDecoration: "none" }}>
            <li className="comm-lists">
              <FollowTheSignsIcon className="side-icons" />
              <span className="side-comm-span">All Followers</span>
            </li>
          </Link>
          <Link to="/friends" style={{ textDecoration: "none" }}>
            <li className="comm-lists">
              <Diversity3OutlinedIcon className="side-icons" />
              <span className="side-comm-span">All Friends</span>
            </li>
          </Link>
          <Link to="/friend request" style={{ textDecoration: "none" }}>
            <li className="comm-lists">
              <ContactMailIcon className="side-icons" />
              <span className="side-comm-span">Friend Requests</span>
            </li>
          </Link>
          <Link to="/suggestions" style={{ textDecoration: "none" }}>
            <li className="comm-lists">
              <PersonAddIcon className="side-icons" />
              <span className="side-comm-span">Suggestions</span>
            </li>
          </Link>
          <Link to="/blocked" style={{ textDecoration: "none" }}>
            <li className="comm-lists">
              <NoAccountsIcon className="side-icons" />
              <span className="side-comm-span">Blocked users</span>
            </li>
          </Link>
          <hr />
          <p className="side-title">Profile Settings</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li className="comm-lists">
              <AccountCircleIcon className="side-icons" />
              <span className="side-comm-span">Profile</span>
            </li>
          </Link>

          <Link to="/logout" style={{ textDecoration: "none" }}>
            <li className="comm-lists">
              <LogoutIcon className="side-icons" />
              <span className="side-comm-span">Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCardSideBar;
