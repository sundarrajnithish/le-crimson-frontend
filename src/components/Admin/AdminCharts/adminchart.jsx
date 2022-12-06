import "./adminchart.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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
const AdminCharts = () => {
  return (
    <div className="admin-chart1">
      <div className="fav-category-chart">Category</div>
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <AreaChart
          width={500}
          height={150}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="rgb(244 131 111 / 60%)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="rgb(244 131 111 / 60%)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          {/*<YAxis />*/}
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stroke="rgb(244 131 111 / 60%)"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default AdminCharts;
