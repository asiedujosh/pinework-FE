import React, { createContext, useState, useEffect } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS } from "../../constant/constant"
import axios from "../../utils/axios.config"

import { login, retrieve, logout } from "./auth"
import cookieMethods from "../../utils/cookieUtils"

export const AuthApiData = createContext()

const AuthApiDataProvider = (props) => {
  const [userProfile, setUserProfile] = useState(null)
  const [role, setRole] = useState(null)
  const [logoutStatus, setLogoutStatus] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    if (!isAuthenticated) {
      const userSession = await processRetrieve()
      if (userSession) {
        setIsAuthenticated(true)
      }
    }
  }

  //   const router = useRouter()

  const processLogin = async (data) => {
    let response = await login(data)
    if (response) {
      setUserProfile(response.data.data)
      // set the cookie
      cookieMethods.setCookies(
        response.data.access_token,
        response.data.refresh_token
      )
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.accessToken}`
      setRole(response.data.data.roleId)
      setLogoutStatus(false)
      setIsAuthenticated(true)
      setIsLoading(false)
    } else {
      setIsLoading(false)
      notify(BAD_REQUEST_STATUS, "Invalid Username/Password")
    }
  }

  const processRetrieve = async () => {
    let cookieData = cookieMethods.getCookies()
    if (!cookieData.refreshToken) return false
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${cookieData.refreshToken}`

    let response = await retrieve()
    if (response) {
      setUserProfile(response.user)
      setRole(response.user.roleId)
      setIsAuthenticated(true)
      return true
    } else {
      return false
    }
  }

  const processLogout = async () => {
    let cookieData = cookieMethods.getCookies()
    if (!cookieData.refreshToken) return false
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${cookieData.refreshToken}`
    let response = await logout()
    if (response) {
      cookieMethods.deleteCookies()
      setUserProfile(null)
      setRole(null)
      setIsAuthenticated(false)
      setLogoutStatus(true)
      return false
    }
  }

  return (
    <AuthApiData.Provider
      value={{
        role,
        userProfile,
        setUserProfile,
        isAuthenticated,
        setIsAuthenticated,
        logoutStatus,
        setLogoutStatus,
        processRetrieve,
        processLogin,
        processLogout,
      }}
    >
      {props.children}
    </AuthApiData.Provider>
  )
}

export default AuthApiDataProvider
