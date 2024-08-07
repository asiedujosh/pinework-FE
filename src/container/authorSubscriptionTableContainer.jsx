import { useContext, useEffect, useState } from "react"
import PaginationContainer from "./paginationContainer"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { SubscriptionApiData } from "../contextApi/subscription/subscriptionContextApi"
import SearchContainer from "./searchContainer"
import AuthorSubscriptionTable from "../component/authorSubscriptionTable"

const AuthorSubscriptionTableContainer = () => {
  const { userProfile } = useContext(AuthApiData)
  const {
    processGetAuthorSubscription,
    paginationData,
    processSearchAuthorSubscription,
  } = useContext(SubscriptionApiData)
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    processSearchAuthorSubscription(searchTerm, userProfile.id)
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
        <AuthorSubscriptionTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAuthorSubscription}
      />
    </div>
  )
}

export default AuthorSubscriptionTableContainer
