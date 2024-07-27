import axios from "../../utils/axios.config"
import { LISTALL, SUCCESS_STATUS } from "../../constant/constant"

export const addClasses = async (data) => {
  try {
    let responseOnAddClasses = await axios.post("/api/storeClasses", data)
    if (responseOnAddClasses) {
      if (responseOnAddClasses.status === SUCCESS_STATUS) {
        return responseOnAddClasses.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchClasses = async (data) => {
  try {
    let responseOnSearchClasses = await axios.get(
      `/api/searchClasses?keyword=${data}`
    )
    if (responseOnSearchClasses) {
      if (responseOnSearchClasses.status === SUCCESS_STATUS) {
        return responseOnSearchClasses.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAllClasses = async () => {
  try {
    let responseOnGetAllClasses = await axios.get(`/api/getAllClasses`)
    if (responseOnGetAllClasses) {
      if (responseOnGetAllClasses.status === SUCCESS_STATUS) {
        return responseOnGetAllClasses.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getClasses = async (data) => {
  try {
    let responseOnGetClasses = await axios.get(
      `/api/getClasses?page=${data}&perPage=${LISTALL}`
    )
    if (responseOnGetClasses) {
      if (responseOnGetClasses.status === SUCCESS_STATUS) {
        return responseOnGetClasses.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editClasses = async (data) => {
  try {
    let responseOnEditClasses = await axios.put(
      `/api/updateClasses/${data.id}`,
      data
    )
    if (responseOnEditClasses) {
      if (responseOnEditClasses.status === SUCCESS_STATUS) {
        return responseOnEditClasses.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteClasses = async (data) => {
  // console.log(data)
  try {
    let responseOnDeleteClasses = await axios.delete(
      `/api/deleteClasses/${data.id}`
    )

    if (responseOnDeleteClasses) {
      if (responseOnDeleteClasses.status === SUCCESS_STATUS) {
        return responseOnDeleteClasses.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
