import "./adminfeatures.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AdminFeatures = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get(
        "https://lecrimson-backend.herokuapp.com/admin/profile/all/count"
      );
      console.log(response.data, "usercount");
      setItems(response.data);
    };
    getItems();
  }, []);

  return (
    <div className="admin-features">
      <div className="featured-top">
        <h1 className="total-views">Users</h1>
      </div>
      <div className="featured-bottom">
        <div className="featured-chart" style={{ width: 300, height: 200 }}>
          <hr />
          <CircularProgressbar value={items} text={items} strokeWidth={7} />
        </div>
        <p className="featured-title">Total Users</p>
      </div>
    </div>
  );
};

export default AdminFeatures;
