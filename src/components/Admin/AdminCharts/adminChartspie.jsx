import "./adminchart.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Entertainment",
    value: 1200,
  },
  {
    name: "Politics",
    value: 120,
  },
  {
    name: "Business",
    value: 800,
  },
  {
    name: "Sports",
    value: 2000,
  },
  {
    name: "Stock",
    value: 900,
  },
  {
    name: "Lifestyle",
    value: 1700,
  },
  {
    name: "Health",
    value: 200,
  },
];

const COLORS = ["#0088FE", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const AdminCharts1 = () => {
  return (
    <div className="admin-chart1">
      <div className="fav-category-chart">Category</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <PieChart width={600} height={600}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default AdminCharts1;
