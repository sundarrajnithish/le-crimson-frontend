import Records from "./data.json";
import "./followers.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Followers = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get(
        "https://lecrimson-backend.herokuapp.com/admin/profile/all"
      );
      console.log(response.data, "Data at followTable");
      localStorage.setItem("profile-data", JSON.stringify(response.data));
      setItems(response.data);
      // console.log(items, "Before Shuffling")
      // items = arrayShuffle(items)
      // console.log(shuffleItem, "Shuffled")
    };
    getItems();
  }, []);
  let test = JSON.parse(localStorage.getItem("profile-data"));
  console.log(test, "this is test");
  console.log(Records, "this is records");

  return (
    <div>
      {Records &&
        Records.map((record) => {
          return (
            <div key={record.id}>
              <table sx={{ minWidth: 650 }} aria-label="simple table">
                <tr>
                  <th>ID</th>

                  <th>Name</th>
                  <th>Status</th>
                  <th>.</th>
                </tr>

                {record.followers &&
                  record.followers.map((data) => {
                    return (
                      <tr>
                        <td>{data.id}</td>
                        {/*<TableCell>
                              <span className="user-logo">
                                <img
                                  src={require("./Profile-icon.png")}
                                  alt="i"
                                  className="pro-img"
                                ></img>
                              </span>
                      </TableCell>*/}
                        <td>{data.followerProfileName}</td>
                        <td>Following</td>
                        <td>
                          <button className="pro-button">Unfollow</button>
                        </td>
                      </tr>
                    );
                  })}
              </table>
            </div>
          );
        })}
    </div>
  );
};

export default Followers;
