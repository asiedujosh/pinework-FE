import { useContext, useEffect, useState } from "react"
import PaginationContainer from "./paginationContainer"
import { CreationApiData } from "../contextApi/creation/creationContextApi"
import SearchContainer from "./searchContainer"
import AuthorBookTable from "../component/authorBookTable"

const AuthorBookTableContainer = () => {
  const { processGetAuthorBooks, paginationData, processSearchBook } =
    useContext(CreationApiData)
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    processSearchBook(searchTerm)
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
        <AuthorBookTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAuthorBooks}
      />
    </div>
  )
}

export default AuthorBookTableContainer
