import axios from "../../utils/axios.config"
import { LISTALL, LISTONPAGES, SUCCESS_STATUS } from "../../constant/constant"

export const addPage = async (data) => {
  try {
    let responseOnAddPage = await axios.post("/api/storePage", data)
    if (responseOnAddPage) {
      if (responseOnAddPage.status === SUCCESS_STATUS) {
        return responseOnAddPage.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchPage = async (data, bookId) => {
  try {
    let responseOnSearchPage = await axios.get(
      `/api/searchPage?keyword=${data}&bookId=${bookId}`
    )
    if (responseOnSearchPage) {
      if (responseOnSearchPage.status === SUCCESS_STATUS) {
        return responseOnSearchPage.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getBookPages = async (data, id) => {
  try {
    let responseOnGetBookPage = await axios.get(
      `/api/getBookPage?page=${data}&perPage=${LISTONPAGES}&bookId=${id}`
    )
    if (responseOnGetBookPage) {
      if (responseOnGetBookPage.status === SUCCESS_STATUS) {
        return responseOnGetBookPage.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editPage = async (data) => {
  try {
    let responseOnEditPage = await axios.put(`/api/updatePage/${data.id}`, data)
    if (responseOnEditPage) {
      if (responseOnEditPage.status === SUCCESS_STATUS) {
        return responseOnEditPage.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deletePage = async (data) => {
  // console.log(data)
  try {
    let responseOnDeletePage = await axios.delete(`/api/deletePage/${data}`)

    if (responseOnDeletePage) {
      if (responseOnDeletePage.status === SUCCESS_STATUS) {
        return responseOnDeletePage.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
