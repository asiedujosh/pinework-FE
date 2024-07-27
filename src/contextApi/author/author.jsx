import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constant/constant"

export const getAllAuthor = async (data) => {
  try {
    let responseOnGetAllAuthor = await axios.get(
      `/api/getAllAuthor?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetAllAuthor) {
      if (responseOnGetAllAuthor.status === SUCCESS_STATUS) {
        return responseOnGetAllAuthor.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAuthorInfo = async (data) => {
  try {
    let responseOnAuthorInfo = await axios.get(`/api/authorInfo/${data}`)
    if (responseOnAuthorInfo) {
      if (responseOnAuthorInfo.status === SUCCESS_STATUS) {
        return responseOnAuthorInfo.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const registerAuthor = async (data) => {
  try {
    let responseOnRegisterAuthor = await axios.post("/api/storeAuthor", data)
    if (responseOnRegisterAuthor) {
      if (responseOnRegisterAuthor.status === SUCCESS_STATUS) {
        return responseOnRegisterAuthor.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

// update api /updateUser/{id} and delete ai '/deleteUser/{id}
export const editAuthor = async (data) => {
  try {
    let responseOnEditAuthor = await axios.put(
      `/api/updateAuthor/${data.id}`,
      data
    )
    if (responseOnEditAuthor) {
      if (responseOnEditAuthor.status === SUCCESS_STATUS) {
        return responseOnEditAuthor.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteAuthor = async (data) => {
  // console.log(data)
  try {
    let responseOnDeleteAuthor = await axios.delete(
      `/api/deleteAuthor/${data.id}`
    )

    if (responseOnDeleteAuthor) {
      if (responseOnDeleteAuthor.status === SUCCESS_STATUS) {
        return responseOnDeleteAuthor.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
