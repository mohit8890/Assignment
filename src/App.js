import React, {useState} from 'react'
import './App.css'
import TransactionsTable from './components/TransactionsTable'
import StatisticsBox from './components/StatisticsBox'
import BarChart from './components/BarChart'

function App() {
  const [selectedMonth, setSelectedMonth] = useState('March')

  const handleMonthChange = e => {
    setSelectedMonth(e.target.value)
  }

  return (
    <div className="App">
      <h1>Transactions Dashboard</h1>
      <label>Select Month:</label>
      <select value={selectedMonth} onChange={handleMonthChange}>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>

      <TransactionsTable selectedMonth={selectedMonth} />
      <StatisticsBox selectedMonth={selectedMonth} />
      <BarChart selectedMonth={selectedMonth} />
    </div>
  )
}

export default App
