import { useContext, useEffect, useState } from "react"
import PaginationContainer from "./paginationContainer"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { CommentApiData } from "../contextApi/comment/commentContextApi"
import SearchContainer from "./searchContainer"
import AuthorCommentTable from "../component/authorCommentTable"

const AuthorCommentTableContainer = () => {
  const { userProfile } = useContext(AuthApiData)
  const {
    processGetAuthorComment,
    paginationData,
    processSearchAuthorComment,
  } = useContext(CommentApiData)
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    processSearchAuthorComment(searchTerm, userProfile.id)
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
        <AuthorCommentTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAuthorComment}
      />
    </div>
  )
}

export default AuthorCommentTableContainer
