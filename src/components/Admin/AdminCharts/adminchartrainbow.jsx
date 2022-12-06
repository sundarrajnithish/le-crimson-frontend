import "./adminchart.css";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "World",
    total: 1200,
    fill: "#8884d8",
  },
  {
    name: "Business",
    total: 1500,
    fill: "#83a6ed",
  },
  {
    name: "Sports",
    total: 1200,
    fill: "#8dd1e1",
  },
  {
    name: "Politics",
    total: 200,
    fill: "#82ca9d",
  },
  {
    name: "Health",
    total: 500,
    fill: "#82ca9d",
  },
  {
    name: "Science",
    total: 100,
    fill: "#a4de6c",
  },
  {
    name: "Technology",
    total: 1300,
    fill: "#d0ed57",
  },
  {
    name: "Entertainment",
    total: 200,
    fill: "#ffc658",
  },
];

const AdminRainbowChart = () => {
  return (
    <div className="admin-chart1">
      <div className="fav-category-chart">Category</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <RadialBarChart
          style={{ width: 200, height: 500 }}
          width={830}
          height={250}
          innerRadius="10%"
          outerRadius="80%"
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            minAngle={15}
            label={{ fill: "#666", position: "insideStart" }}
            background
            clockWise={true}
            dataKey="total"
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default AdminRainbowChart;
