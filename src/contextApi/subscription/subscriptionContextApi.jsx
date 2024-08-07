import React, { createContext, useState } from "react"
import {
  searchAuthorSubscription,
  countAuthorSubscription,
  getAuthorSubscriptions,
} from "./subscription"

export const SubscriptionApiData = createContext()

const SubscriptionApiDataProvider = (props) => {
  const [authorSubscriptionList, setAuthorSubscriptionList] = useState([])
  const [noOfAuthorSubscription, setNoOfAuthorSubscription] = useState(0)
  const [paginationData, setPaginationData] = useState()
  const [searchAuthorSubscriptionRecord, setSearchAuthorSubscriptionRecord] =
    useState([])
  const [searchPaginationData, setSearchPaginationData] = useState(null)

  const processCountAuthorSubscription = async (id) => {
    let response = await countAuthorSubscription(id)
    if (response) {
      setNoOfAuthorSubscription(response.data.data)
    }
  }

  const processGetAuthorSubscription = async (data, authorId) => {
    let response = await getAuthorSubscriptions(data || 1, authorId)
    if (response) {
      setAuthorSubscriptionList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processSearchAuthorSubscription = async (data) => {
    let responseOnSearchAuthorSubscription = await searchAuthorSubscription(
      data
    )
    if (responseOnSearchAuthorSubscription) {
      setSearchAuthorSubscriptionRecord(
        responseOnSearchAuthorSubscription.data.data
      )
      setSearchPaginationData(response.data.pagination)
    }
  }

  return (
    <SubscriptionApiData.Provider
      value={{
        authorSubscriptionList,
        noOfAuthorSubscription,
        paginationData,
        searchAuthorSubscriptionRecord,
        searchPaginationData,
        processCountAuthorSubscription,
        processGetAuthorSubscription,
        processSearchAuthorSubscription,
      }}
    >
      {props.children}
    </SubscriptionApiData.Provider>
  )
}

export default SubscriptionApiDataProvider
