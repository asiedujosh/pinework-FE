import React, { useContext, useEffect } from "react"
import "react-toastify/dist/ReactToastify.css"
import { AuthorApiData } from "../contextApi/author/authorContextApi"
import { CommentApiData } from "../contextApi/comment/commentContextApi"
import AuthorCommentTableContainer from "../container/authorCommentTableContainer"

const AuthorComment = () => {
  const { authorInfo } = useContext(AuthorApiData)
  const { processGetAuthorComment } = useContext(CommentApiData)

  useEffect(() => {
    processGetAuthorComment("", authorInfo.userId)
  }, [])

  return (
    <>
      <div>
        <AuthorCommentTableContainer />
      </div>
    </>
  )
}

export default AuthorComment
