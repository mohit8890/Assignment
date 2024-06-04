import React, {useState, useEffect} from 'react'
import {Bar} from 'react-chartjs-2' // Import Bar from react-chartjs-2
import axios from 'axios'

const BarChart = ({selectedMonth}) => {
  const [barChartData, setBarChartData] = useState([])

  useEffect(() => {
    fetchBarChartData()
  }, [selectedMonth])

  const fetchBarChartData = async () => {
    try {
      const response = await axios.get(`/api/bar-chart?month=${selectedMonth}`)
      setBarChartData(response.data)
    } catch (error) {
      console.error('Failed to fetch bar chart data:', error)
    }
  }

  const chartData = {
    labels: barChartData.map(range => range.label),
    datasets: [
      {
        label: 'Number of Items',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.4)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: barChartData.map(range => range.count),
      },
    ],
  }

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            precision: 0,
          },
        },
      ],
    },
  }

  return (
    <div className="bar-chart">
      <h2>Bar Chart for {selectedMonth}</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  )
}

export default BarChart
