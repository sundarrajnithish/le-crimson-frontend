import Records from "./data.json";
import "./friends.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Friends = () => {
  const [items, setItems] = useState([]);
  //user data from backend
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
  //remove and update user details
  const clickHandler = (event) => {
    const newFriendsList = items.friends.filter(
      (friend) => friend.id !== parseInt(event.target.id)
    );

    setItems((prev) => ({
      ...prev,
      friends: newFriendsList,
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

        {items.friends &&
          items.friends.map((data) => {
            return (
              <tr>
                <td className="td">{data.friendProfileName}</td>
                <td className="td">{data.friendStatus}</td>
                <td className="td">
                  <button
                    id={data.id}
                    onClick={clickHandler}
                    className="pro-button"
                  >
                    Unfriend
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default Friends;