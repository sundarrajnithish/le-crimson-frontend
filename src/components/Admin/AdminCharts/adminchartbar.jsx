import "./adminchart.css";
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

const data = [
  {
    name: "Entertainment",
    total: 1200,
  },
  {
    name: "Politics",
    total: 120,
  },
  {
    name: "Business",
    total: 800,
  },
  {
    name: "Sports",
    total: 2000,
  },
  {
    name: "Stock",
    total: 900,
  },
  {
    name: "Lifestyle",
    total: 1700,
  },
  {
    name: "Health",
    total: 200,
  },
];

const AdminCharts2 = () => {
  return (
    <div className="admin-chart1">
      <div className="fav-category-chart">Category</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default AdminCharts2;
