// components/BarChart.js
import { Bar } from "react-chartjs-2";
export const BarChart = (props) => {
  const {chartData, topic} = props

  return (
    <div className="chart-container">
      <h2 className="text-left font-bold">{topic}</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};