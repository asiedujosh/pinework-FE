import { useContext, useEffect, useState } from "react"
import PaginationContainer from "./paginationContainer"
import SearchContainer from "./searchContainer"
import { BookPageApiData } from "../contextApi/bookPage/bookPageContextApi"
import BookPageTable from "../component/bookPageTable"

const BookPageTableContainer = ({bookId}) => {
  const { processGetBookPage, paginationData, processSearchBookPage } =
    useContext(BookPageApiData)
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    processSearchBookPage(searchTerm)
  }

  return (
    <div
      className="w-90 m-6 p-4 bg-white rounded shadow-lg"
      style={{ height: "73%" }}
    >
      <SearchContainer
        value={searchTerm}
        change={(data) => {
          handleSearchChange(data)
        }}
        submitSearch={() => {
          handleSearchSubmit()
        }}
      />
      <div className="overflow-auto" style={{ height: "80%" }}>
        <BookPageTable bookId = {bookId} />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetBookPage}
      />
    </div>
  )
}

export default BookPageTableContainer
