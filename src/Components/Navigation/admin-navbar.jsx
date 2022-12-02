import "./adminnav.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const AdminNavigationbar = () => {
  return (
    <div className="admin-navbar">
      <div className="admin-navbar-wrapper">
        <div className="admin-navbar-search">
          <input
            className="admin-search-input"
            type="text"
            placeholder="search..."
          />
          <SearchIcon />
        </div>
        <div className="admin-navbar-items">
          <div className="singleitem">
            <LanguageOutlinedIcon className="admin-nav-icon" />
            English
          </div>
          <div className="singleitem">
            <NotificationsActiveOutlinedIcon className="admin-nav-icon" />
            <div className="admin-nav-notify-counter">5</div>
          </div>
          <div className="singleitem">
            <button>
              <NightlightRoundOutlinedIcon className="admin-nav-icon" />
            </button>
          </div>

          <div className="singleitem">
            <button>
              <FullscreenExitOutlinedIcon className="admin-nav-icon" />
            </button>
          </div>
          <div className="singleitem">
            <ListOutlinedIcon className="admin-nav-icon" />
          </div>
          <div className="singleitem">
            <AccountCircleRoundedIcon className="admin-avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavigationbar;
