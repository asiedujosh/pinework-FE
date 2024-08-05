import React, { useContext, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { AuthorApiData } from "../contextApi/author/authorContextApi"
import { CreationApiData } from "../contextApi/creation/creationContextApi"
import AuthorPublishTableContainer from "../container/authorPublishTableContainer"

const AuthorPublish = () => {
  const { authorInfo } = useContext(AuthorApiData)
  const { processGetAuthorPublish } = useContext(CreationApiData)

  useEffect(() => {
    processGetAuthorPublish("", authorInfo.userId)
  }, [])

  return (
    <>
      <div>
        <AuthorPublishTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default AuthorPublish
