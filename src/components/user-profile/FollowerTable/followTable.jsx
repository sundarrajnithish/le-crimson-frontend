import Records from "./data.json";
import "./followers.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Followers = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get(
        "https://lecrimson-backend.herokuapp.com/profile?userId=14"
      );
      console.log(response.data, "Data at followTable");
      setItems(response.data);
    };
    getItems();
  }, []);

  const clickHandler = (event) => {
    const newFollowerList = items.followers.filter(
      (follower) => follower.id !== parseInt(event.target.id)
    );

    setItems((prev) => ({
      ...prev,
      followers: newFollowerList,
    }));
  };

  return (
    <div key={items.id}>
      <table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        className="table12"
      >
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>.</th>
        </tr>

        {items.followers &&
          items.followers.map((data) => {
            return (
              <tr>
                <td className="td">{data.followerProfileName}</td>
                <td className="td">Following</td>
                <td className="td">
                  <button
                    id={data.id}
                    onClick={clickHandler}
                    className="pro-button"
                  >
                    Unfollow
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default Followers;
