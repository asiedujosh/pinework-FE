import axios from "../../utils/axios.config"
import { SUCCESS_STATUS } from "../../constant/constant"

export const login = async (data) => {
  try {
    let responseOnLogin = await axios.post("/api/login", data)
    if (responseOnLogin) {
      if (responseOnLogin.status === SUCCESS_STATUS) {
        return responseOnLogin.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const retrieve = async () => {
  try {
    let responseOnRetrieve = await axios.get("/api/retrieve")
    if (responseOnRetrieve) {
      if (responseOnRetrieve.status === SUCCESS_STATUS) {
        return responseOnRetrieve.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const logout = async () => {
  try {
    let responseOnLogout = await axios.post("/api/logout")
    if (responseOnLogout) {
      if (responseOnLogout.status === SUCCESS_STATUS) {
        return responseOnLogout.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}
