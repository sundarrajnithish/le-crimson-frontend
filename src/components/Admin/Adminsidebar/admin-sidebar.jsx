import "./adminside.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import CategoryIcon from "@mui/icons-material/Category";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { Link } from "react-router-dom";

const AdminSide = () => {
  return (
    <div className="admin-Sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="a-logo">leCrimson</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="side-title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="side-icons" />
              <span className="side-span">Dashboard</span>
            </li>
          </Link>
          <p className="side-title">MAIN</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltSharpIcon className="side-icons" />
              <span className="side-span">Users</span>
            </li>
          </Link>
          <li>
            <CategoryIcon className="side-icons" />
            <span className="side-span">Categories</span>
          </li>
          <li>
            <FeaturedPlayListIcon className="side-icons" />
            <span className="side-span">Features</span>
          </li>
          <p className="side-title">MAIN</p>
          <li>
            <QueryStatsIcon className="side-icons" />
            <span className="side-span">stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className="side-icons" />
            <span className="side-span">Notifications</span>
          </li>
          <li>
            <PsychologyIcon className="side-icons" />
            <span className="side-span">System Logs</span>
          </li>
          <p className="side-title">MAIN</p>
          <li>
            <AccountCircleIcon className="side-icons" />
            <span className="side-span">Profile</span>
          </li>
          <li>
            <SettingsSuggestIcon className="side-icons" />
            <span className="side-span">Settings</span>
          </li>
          <li>
            <LogoutIcon className="side-icons" />
            <span className="side-span">Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color-option"></div>
        <div className="color-option"></div>
        <div className="color-option"></div>
      </div>
    </div>
  );
};
export default AdminSide;
