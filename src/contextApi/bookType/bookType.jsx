import axios from "../../utils/axios.config"
import { LISTALL, SUCCESS_STATUS } from "../../constant/constant"

export const addBookType = async (data) => {
  try {
    let responseOnAddBookType = await axios.post("/api/storeBookType", data)
    if (responseOnAddBookType) {
      if (responseOnAddBookType.status === SUCCESS_STATUS) {
        return responseOnAddBookType.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchBookType = async (data) => {
  try {
    let responseOnSearchBookType = await axios.get(
      `/api/searchBookType?keyword=${data}`
    )
    if (responseOnSearchBookType) {
      if (responseOnSearchBookType.status === SUCCESS_STATUS) {
        return responseOnSearchBookType.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAllBookType = async () => {
  try {
    let responseOnGetAllBookType = await axios.get(`/api/getAllBookType`)
    if (responseOnGetAllBookType) {
      if (responseOnGetAllBookType.status === SUCCESS_STATUS) {
        return responseOnGetAllBookType.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getBookType = async (data) => {
  try {
    let responseOnGetBookType = await axios.get(
      `/api/getBookType?page=${data}&perPage=${LISTALL}`
    )
    if (responseOnGetBookType) {
      if (responseOnGetBookType.status === SUCCESS_STATUS) {
        return responseOnGetBookType.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editBookType = async (data) => {
  try {
    let responseOnEditBookType = await axios.put(
      `/api/updateBookType/${data.id}`,
      data
    )
    if (responseOnEditBookType) {
      if (responseOnEditBookType.status === SUCCESS_STATUS) {
        return responseOnEditBookType.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteBookType = async (data) => {
  // console.log(data)
  try {
    let responseOnDeleteBookType = await axios.delete(
      `/api/deleteBookType/${data.id}`
    )

    if (responseOnDeleteBookType) {
      if (responseOnDeleteBookType.status === SUCCESS_STATUS) {
        return responseOnDeleteBookType.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
