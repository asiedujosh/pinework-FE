import React, { createContext, useState } from "react"
import {
  searchAuthorComment,
  countAuthorComment,
  getAuthorComment,
} from "./comment"

export const CommentApiData = createContext()

const CommentApiDataProvider = (props) => {
  const [authorCommentList, setAuthorCommentList] = useState([])
  const [noOfAuthorComment, setNoOfAuthorComment] = useState(0)
  const [paginationData, setPaginationData] = useState()
  const [searchAuthorCommentRecord, setSearchAuthorCommentRecord] = useState([])
  const [searchPaginationData, setSearchPaginationData] = useState(null)

  const processCountAuthorComment = async (id) => {
    let response = await countAuthorComment(id)
    if (response) {
      setNoOfAuthorComment(response.data.data)
    }
  }

  const processGetAuthorComment = async (data, authorId) => {
    let response = await getAuthorComment(data || 1, authorId)
    if (response) {
      setAuthorCommentList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processSearchAuthorComment = async (data) => {
    let responseOnSearchAuthorComment = await searchAuthorComment(data)
    if (responseOnSearchAuthorComment) {
      setSearchAuthorCommentRecord(responseOnSearchAuthorComment.data.data)
      setSearchPaginationData(response.data.pagination)
    }
  }

  return (
    <CommentApiData.Provider
      value={{
        authorCommentList,
        noOfAuthorComment,
        paginationData,
        searchAuthorCommentRecord,
        searchPaginationData,
        processCountAuthorComment,
        processGetAuthorComment,
        processSearchAuthorComment,
      }}
    >
      {props.children}
    </CommentApiData.Provider>
  )
}

export default CommentApiDataProvider
