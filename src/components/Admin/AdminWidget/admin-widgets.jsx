import "./adminwidgets.css";
import { Link } from "react-router-dom";

const AdminWidget = ({ type }) => {
  let data;

  switch (type) {
    case "Categories":
      data = {
        title: "CATEGORIES",
        link: "See all Categories",
        R: "/categories",
        count: "8",
      };
      break;
    case "User":
      data = {
        title: "USERS",
        link: "See all users",
        R: "/users",
      };
      break;
    case "Logs":
      data = {
        title: "LOGS",
        link: "See all Logs",
        R: "/logs",
      };
      break;
    case "Admin Users":
      data = {
        title: "ADMIN USERS",
        link: "See all Admin Users",
        R: "/adminuser",
        count: "5",
      };
      break;
    default:
      break;
  }

  return (
    <div className="a-widget">
      <div className="widget-left">
        <span className="widget-title">{data.title}</span>
        <span className="widget-counter">{data.count}</span>
        <Link to={data.R} style={{ textDecoration: "none" }}>
          <span className="widget-morelink">{data.link}</span>
        </Link>
      </div>
      <div className="widget-right"></div>
    </div>
  );
};

export default AdminWidget;
