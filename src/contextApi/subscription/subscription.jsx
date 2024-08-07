import axios from "../../utils/axios.config"
import { LISTALL, LISTONPAGES, SUCCESS_STATUS } from "../../constant/constant"

export const searchAuthorSubscription = async (data, id) => {
  try {
    let responseOnSearchAuthorSubscription = await axios.get(
      `/api/searchAuthorSubscription?keyword=${data}&authorId=${id}`
    )
    if (responseOnSearchAuthorSubscription) {
      if (responseOnSearchAuthorSubscription.status === SUCCESS_STATUS) {
        return responseOnSearchAuthorSubscription.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const countAuthorSubscription = async (id) => {
  try {
    let responseOnCountAuthorSubscribers = await axios.get(
      `/api/countAuthorSubscribers/${id}`
    )
    if (responseOnCountAuthorSubscribers) {
      if (responseOnCountAuthorSubscribers.status === SUCCESS_STATUS) {
        return responseOnCountAuthorSubscribers.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAuthorSubscriptions = async (data, authorId) => {
  try {
    let responseOnGetAuthorSubscriptions = await axios.get(
      `/api/getAuthorSubscribers?page=${data}&perPage=${LISTONPAGES}&authorId=${authorId}`
    )
    if (responseOnGetAuthorSubscriptions) {
      if (responseOnGetAuthorSubscriptions.status === SUCCESS_STATUS) {
        return responseOnGetAuthorSubscriptions.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}
