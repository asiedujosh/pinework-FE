import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constant/constant"

export const getAllSchool = async (data) => {
  try {
    let responseOnGetAllSchool = await axios.get(
      `/api/getAllSchool?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetAllSchool) {
      if (responseOnGetAllSchool.status === SUCCESS_STATUS) {
        return responseOnGetAllSchool.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getSchoolInfo = async (data) => {
  try {
    let responseOnSchoolInfo = await axios.get(`/api/schoolInfo/${data}`)
    if (responseOnSchoolInfo) {
      if (responseOnSchoolInfo.status === SUCCESS_STATUS) {
        return responseOnSchoolInfo.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const registerSchool = async (data) => {
  try {
    let responseOnRegisterSchool = await axios.post("/api/storeSchool", data)
    if (responseOnRegisterSchool) {
      if (responseOnRegisterSchool.status === SUCCESS_STATUS) {
        return responseOnRegisterSchool.data
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
export const editSchool = async (data) => {
  try {
    let responseOnEditSchool = await axios.put(
      `/api/updateSchool/${data.id}`,
      data
    )
    if (responseOnEditSchool) {
      if (responseOnEditSchool.status === SUCCESS_STATUS) {
        return responseOnEditSchool.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteSchool = async (data) => {
  // console.log(data)
  try {
    let responseOnDeleteSchool = await axios.delete(
      `/api/deleteSchool/${data.id}`
    )

    if (responseOnDeleteSchool) {
      if (responseOnDeleteSchool.status === SUCCESS_STATUS) {
        return responseOnDeleteSchool.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
