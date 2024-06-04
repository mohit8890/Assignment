import React, {useState, useEffect} from 'react'
import axios from 'axios' // Import Axios

const TransactionsTable = ({selectedMonth}) => {
  const [transactions, setTransactions] = useState([])
  const [searchText, setSearchText] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchTransactions()
  }, [selectedMonth, searchText, currentPage])

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(
        `/api/transactions?month=${selectedMonth}&search=${searchText}&page=${currentPage}`,
      )
      setTransactions(response.data)
    } catch (error) {
      console.error('Failed to fetch transactions:', error)
    }
  }

  const handleSearchChange = e => {
    setSearchText(e.target.value)
  }

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1)
  }

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1))
  }

  return (
    <div className="table-container">
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Search transactions..."
        className="search-input"
      />

      <table className="transactions-table">{/* Table content */}</table>

      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={handleNextPage}>Next</button>
    </div>
  )
}

export default TransactionsTable
