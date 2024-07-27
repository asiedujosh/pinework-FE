import axios from "../../utils/axios.config"
import { LISTALL, LISTONPAGES, SUCCESS_STATUS } from "../../constant/constant"

export const addBook = async (data) => {
  try {
    let responseOnAddBook = await axios.post("/api/storeBook", data)
    if (responseOnAddBook) {
      if (responseOnAddBook.status === SUCCESS_STATUS) {
        return responseOnAddBook.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchBook = async (data) => {
  try {
    let responseOnSearchBook = await axios.get(
      `/api/searchBook?keyword=${data}`
    )
    if (responseOnSearchBook) {
      if (responseOnSearchBook.status === SUCCESS_STATUS) {
        return responseOnSearchBook.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const searchAuthorBook = async (data) => {
  try {
    let responseOnSearchAuthorBook = await axios.get(
      `/api/searchAuthorBook?keyword=${data}&authorId=${data.authorId}`
    )
    if (responseOnSearchAuthorBook) {
      if (responseOnSearchAuthorBook.status === SUCCESS_STATUS) {
        return responseOnSearchAuthorBook.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getBook = async (data) => {
  try {
    let responseOnGetBook = await axios.get(
      `/api/getBook?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetBook) {
      if (responseOnGetBook.status === SUCCESS_STATUS) {
        return responseOnGetBook.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAuthorBooks = async (data, authorId) => {
  try {
    let responseOnGetAuthorBook = await axios.get(
      `/api/getAuthorBooks?page=${data}&perPage=${LISTONPAGES}&authorId=${authorId}`
    )
    if (responseOnGetAuthorBook) {
      if (responseOnGetAuthorBook.status === SUCCESS_STATUS) {
        return responseOnGetAuthorBook.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editBook = async (data) => {
  try {
    let responseOnEditBook = await axios.put(`/api/updateBook/${data.id}`, data)
    if (responseOnEditBook) {
      if (responseOnEditBook.status === SUCCESS_STATUS) {
        return responseOnEditBook.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const changeBookStatus = async (data) => {
  try {
    let responseOnEditBookStatus = await axios.put(
      `/api/updateBookStatus/${data.id}`,
      data
    )
    if (responseOnEditBookStatus) {
      if (responseOnEditBookStatus.status === SUCCESS_STATUS) {
        return responseOnEditBookStatus.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteBook = async (data) => {
  // console.log(data)
  try {
    let responseOnDeleteBook = await axios.delete(`/api/deleteBook/${data.id}`)

    if (responseOnDeleteBook) {
      if (responseOnDeleteBook.status === SUCCESS_STATUS) {
        return responseOnDeleteBook.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
