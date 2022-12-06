import Records from "./data.json";
import "./Blockeduser.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const BlockedUser = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get(
        "https://lecrimson-backend.herokuapp.com/profile?userId=14"
      );
      console.log(response.data, "Data at blockTable");
      setItems(response.data);
    };
    getItems();
  }, []);

  const clickHandler = (event) => {
    const newBlockedList = items.blocked.filter(
      (block) => block.id !== parseInt(event.target.id)
    );

    setItems((prev) => ({
      ...prev,
      blocked: newBlockedList,
    }));
  };

  return (
    <div key={items.id}>
      <table sx={{ minWidth: 650 }} aria-label="simple table">
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>.</th>
        </tr>

        {items.blocked &&
          items.blocked.map((data) => {
            return (
              <tr>
                <td>{data.BlockedProfileName}</td>
                <td>Blocked</td>
                <td>
                  <button
                    id={data.id}
                    onClick={clickHandler}
                    className="pro-button"
                  >
                    UnBlock
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default BlockedUser;
