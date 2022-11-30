import "./adminfeatures.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AdminFeatures = () => {
  return (
    <div className="admin-features">
      <div className="featured-top">
        <h1 className="total-views">Total Views</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="featured-bottom">
        <div className="featured-chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="featured-title">total traffic</p>
        <p className="featured-desc">
          total traffictotal traffictotal traffictotal traffic
        </p>
      </div>
    </div>
  );
};

export default AdminFeatures;
