import React from 'react'
import { Pie } from "react-chartjs-2";


const PieChart = ({ chartData , topic}) => {
  return (
    <div className="chart-container">
      <h2 className="text-left font-bold pt-4 pl-4">{topic}</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            }
          }
        }}
      />
    </div>
  )
}

export default PieChart