import "./profilecardsidebar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

const ProfileCardSideBar = () => {
  return (
    <div className="Profile-comm-Sidebar">
      <div className="comm-top">
        <img
          className="comm-logo"
          src={require("./Components/logor.png")}
          alt="leCrimson"
        ></img>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="side-title">Main</p>
          <li className="comm-lists">
            <HomeOutlinedIcon className="side-icons" />
            <span className="side-comm-span">Home</span>
          </li>
          <hr />
          <p className="side-title">User Settings</p>
          <li className="comm-lists">
            <FollowTheSignsIcon className="side-icons" />
            <span className="side-comm-span">All Followers</span>
          </li>
          <li className="comm-lists">
            <Diversity3OutlinedIcon className="side-icons" />
            <span className="side-comm-span">All Friends</span>
          </li>
          <li className="comm-lists">
            <ContactMailIcon className="side-icons" />
            <span className="side-comm-span">Friend Requests</span>
          </li>
          <li className="comm-lists">
            <PersonAddIcon className="side-icons" />
            <span className="side-comm-span">Suggestions</span>
          </li>
          <li className="comm-lists">
            <NoAccountsIcon className="side-icons" />
            <span className="side-comm-span">Blocked users</span>
          </li>
          <hr />
          <p className="side-title">Profile Settings</p>
          <li className="comm-lists">
            <AccountCircleIcon className="side-icons" />
            <span className="side-comm-span">Profile</span>
          </li>
          <li className="comm-lists">
            <SettingsSuggestIcon className="side-icons" />
            <span className="side-comm-span">Settings</span>
          </li>
          <li className="comm-lists">
            <LogoutIcon className="side-icons" />
            <span className="side-comm-span">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCardSideBar;
