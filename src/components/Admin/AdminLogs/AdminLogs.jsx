import "./AdminLogs.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminLogs = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get(
        "https://lecrimson-backend.herokuapp.com/application/logs"
      );
      console.log(response.data, "Data at AdminLogs");
      setItems(response.data);
    };
    getItems();
  }, []);

  return (
    <div>
      <table
        sx={{ Width: 800 }}
        aria-label="simple table"
        className="tablelogs"
      >
        <tr>
          <th className="th2">ID</th>

          <th className="th2">TimeStamp</th>
          <th className="th2">UserId</th>
          <th className="th2">Response</th>
          <th className="th2">Type</th>
        </tr>
        <hr />
        {items &&
          items.map((record) => {
            return (
              <tr>
                <td className="td2">{record.id}</td>

                <td className="td2">{record.timestamp}</td>
                <td className="td2">{record.userId}</td>
                <td className="td2">{record.response}</td>
                <td className="td2">{record.type}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default AdminLogs;
