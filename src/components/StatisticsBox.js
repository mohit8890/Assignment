import React, {useState, useEffect} from 'react'
import axios from 'axios'

const StatisticsBox = ({selectedMonth}) => {
  const [statistics, setStatistics] = useState({
    totalSaleAmount: 0,
    totalSoldItems: 0,
    totalNotSoldItems: 0,
  })

  useEffect(() => {
    fetchStatistics()
  }, [selectedMonth])

  const fetchStatistics = async () => {
    try {
      const response = await axios.get(`/api/statistics?month=${selectedMonth}`)
      setStatistics(response.data)
    } catch (error) {
      console.error('Failed to fetch statistics:', error)
    }
  }

  return (
    <div className="statistics-box">
      <h2>Statistics for {selectedMonth}</h2>
      <p>Total Sale Amount: ${statistics.totalSaleAmount.toFixed(2)}</p>
      <p>Total Sold Items: {statistics.totalSoldItems}</p>
      <p>Total Not Sold Items: {statistics.totalNotSoldItems}</p>
    </div>
  )
}

export default StatisticsBox
