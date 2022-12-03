import "./adminwidgets.css";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import PsychologyIcon from "@mui/icons-material/Psychology";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const AdminWidget = ({ type }) => {
  let data;

  switch (type) {
    case "User":
      data = {
        title: "USERS",
        link: "See all users",
        icon: (
          <PersonOutlineOutlinedIcon
            className="widget-person-icon"
            style={{
              color: "rgb(114, 163, 253)",
              backgroundColor: "lightblue",
            }}
          />
        ),
      };
      break;
    case "Categories":
      data = {
        title: "CATEGORIES",
        link: "See all Categories",
        icon: (
          <CategoryIcon
            className="widget-person-icon"
            style={{
              color: "rgb(114, 163, 253)",
              backgroundColor: "lightblue",
            }}
          />
        ),
      };
      break;
    case "Logs":
      data = {
        title: "LOGS",
        link: "See all Logs",
        icon: (
          <PsychologyIcon
            className="widget-person-icon"
            style={{
              color: "rgb(114, 163, 253)",
              backgroundColor: "lightblue",
            }}
          />
        ),
      };
      break;
    case "Notify":
      data = {
        title: "NOTIFICATION",
        link: "See all Notifications",
        icon: (
          <NotificationsActiveIcon
            className="widget-person-icon"
            style={{
              color: "rgb(114, 163, 253)",
              backgroundColor: "lightblue",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="a-widget">
      <div className="widget-left">
        <span className="widget-title">{data.title}</span>
        <span className="widget-counter">122</span>
        <span className="widget-morelink">{data.link}</span>
      </div>
      <div className="widget-right">
        <span className="widget-percentage">
          <KeyboardArrowUpRoundedIcon />
          20%
        </span>
        {data.icon}
      </div>
    </div>
  );
};

export default AdminWidget;
