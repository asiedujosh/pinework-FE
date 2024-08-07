import React, { useContext, useEffect } from "react"
import "react-toastify/dist/ReactToastify.css"
import { AuthorApiData } from "../contextApi/author/authorContextApi"
import { SubscriptionApiData } from "../contextApi/subscription/subscriptionContextApi"
import AuthorSubscriptionTableContainer from "../container/authorSubscriptionTableContainer"

const AuthorSubscription = () => {
  const { authorInfo } = useContext(AuthorApiData)
  const { processGetAuthorSubscription } = useContext(SubscriptionApiData)

  useEffect(() => {
    processGetAuthorSubscription("", authorInfo.userId)
  }, [])

  return (
    <>
      <div>
        <AuthorSubscriptionTableContainer />
      </div>
    </>
  )
}

export default AuthorSubscription
