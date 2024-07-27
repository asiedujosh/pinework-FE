import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts"

const RenderBarChart = () => {
  const data = [
    { name: "February", users: 400, pv: 2400, amt: 2400 },
    { name: "March", users: 300, pv: 1400, amt: 1400 },
    { name: "April", users: 200, pv: 1800, amt: 1500 },
    { name: "May", users: 100, pv: 2000, amt: 2000 },
  ]

  return (
    <BarChart width={800} height={500} data={data}>
      <XAxis dataKey="name" stroke="#1f2937" />
      <YAxis />
      <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
      <Legend
        width={100}
        wrapperStyle={{
          top: 40,
          right: 20,
          backgroundColor: "#f5f5f5",
          border: "1px solid #d5d5d5",
          borderRadius: 3,
          lineHeight: "40px",
        }}
      />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="users" fill="#1f2937" barSize={100} />
    </BarChart>
  )
}

export default RenderBarChart
