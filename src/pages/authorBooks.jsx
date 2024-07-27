import React, { useContext, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { AuthorApiData } from "../contextApi/author/authorContextApi"
import { CreationApiData } from "../contextApi/creation/creationContextApi"
import AuthorBookTableContainer from "../container/authorBookTableContainer"

const AuthorBooks = () => {
  const { authorInfo } = useContext(AuthorApiData)
  const { processGetAuthorBooks } = useContext(CreationApiData)

  useEffect(() => {
    processGetAuthorBooks("", authorInfo.userId)
  }, [])

  return (
    <>
      <div>
        <AuthorBookTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default AuthorBooks
