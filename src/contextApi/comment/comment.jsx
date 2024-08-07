import axios from "../../utils/axios.config"
import { LISTALL, LISTONPAGES, SUCCESS_STATUS } from "../../constant/constant"

export const searchAuthorComment = async (data, id) => {
  try {
    let responseOnSearchAuthorComment = await axios.get(
      `/api/searchAuthorComment?keyword=${data}&authorId=${id}`
    )
    if (responseOnSearchAuthorComment) {
      if (responseOnSearchAuthorComment.status === SUCCESS_STATUS) {
        return responseOnSearchAuthorComment.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const countAuthorComment = async (id) => {
  try {
    let responseOnCountAuthorComment = await axios.get(
      `/api/countAuthorComment/${id}`
    )
    if (responseOnCountAuthorComment) {
      if (responseOnCountAuthorComment.status === SUCCESS_STATUS) {
        return responseOnCountAuthorComment.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAuthorComment = async (data, authorId) => {
  try {
    let responseOnGetAuthorComment = await axios.get(
      `/api/getAuthorComment?page=${data}&perPage=${LISTONPAGES}&authorId=${authorId}`
    )
    if (responseOnGetAuthorComment) {
      if (responseOnGetAuthorComment.status === SUCCESS_STATUS) {
        return responseOnGetAuthorComment.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}
