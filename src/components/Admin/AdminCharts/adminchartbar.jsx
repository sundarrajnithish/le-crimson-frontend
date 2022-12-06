import "./adminchart.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AdminCharts2 = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get(
        "https://lecrimson-backend.herokuapp.com/admin/category/all/count"
      );
      console.log(response.data, "Data at AdminlistTable");
      setItems(response.data);
    };
    getItems();
  }, []);

  return (
    <div className="admin-chart1">
      <div className="fav-category-chart">Category</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <BarChart width={730} height={250} data={items}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default AdminCharts2;
