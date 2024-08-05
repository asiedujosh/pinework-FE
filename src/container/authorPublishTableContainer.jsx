import { useContext, useEffect, useState } from "react"
import PaginationContainer from "./paginationContainer"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { CreationApiData } from "../contextApi/creation/creationContextApi"
import SearchContainer from "./searchContainer"
import AuthorPublishTable from "../component/authorPublishTable"

const AuthorPublishTableContainer = () => {
  const { userProfile } = useContext(AuthApiData)
  const {
    processGetAuthorPublish,
    paginationData,
    processSearchAuthorPublish,
  } = useContext(CreationApiData)
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    processSearchAuthorPublish(searchTerm, userProfile.id)
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
        <AuthorPublishTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAuthorPublish}
      />
    </div>
  )
}

export default AuthorPublishTableContainer
