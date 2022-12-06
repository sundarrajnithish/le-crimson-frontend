import React, { useState, useEffect } from "react";
import axios from "axios";

import Request_data from "./request_data";

const FriendRequest = () => {
  const [items, setItems] = useState([]);
  //user data from backend
  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get(
        "https://lecrimson-backend.herokuapp.com/profile/search/category?category=SPORTs"
      );
      console.log(response.data["0"].id, "Category Data");
      console.log(
        JSON.parse(localStorage.getItem("user-db-data")).id,
        "User data at Friend Request"
      );
      setItems(response.data);
      localStorage.setItem("profile-data", JSON.stringify(response.data));
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
    <>
      <Request_data />
      <div key={items.id}>
        <table sx={{ minWidth: 650 }} aria-label="simple table">
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>.</th>
          </tr>

          {items.friends &&
            items.friends
              .filter((friend) => friend.friendStatus === "Pending")
              .map((data) => {
                return (
                  <tr>
                    <td>{data.friendProfileName}</td>
                    <td>{data.friendStatus}</td>
                    <td>
                      <button
                        id={data.id}
                        onClick={clickHandler}
                        className="pro-button"
                      >
                        Accept
                      </button>
                    </td>
                  </tr>
                );
              })}
        </table>
      </div>
    </>
  );
};

export default FriendRequest;
