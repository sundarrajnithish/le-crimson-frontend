import "./AdminTable1.css";
import Table from "react-bootstrap/Table";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Records from "./table.json";

const AdminTable1 = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get(
        "https://lecrimson-backend.herokuapp.com/admin/profile/all"
      );
      console.log(response.data, "Data at AdminlistTable");
      setItems(response.data);
    };
    getItems();
  }, []);

  return (
    <div>
      <table sx={{ Width: 800 }} aria-label="simple table" className="table">
        <tr>
          <th className="th2">Name</th>

          <th className="th2">Email</th>
          <th className="th2">Location</th>
          <th className="th2">Source</th>
        </tr>
        <hr />
        {items &&
          items.map((record) => {
            return (
              <tr>
                <td className="td2">{record.firstName}</td>

                <td className="td2">{record.email}</td>
                <td className="td2">{record.location}</td>
                <td className="td2">{record.loginSource}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default AdminTable1;
