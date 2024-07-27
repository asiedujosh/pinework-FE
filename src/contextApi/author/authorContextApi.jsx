import React, { createContext, useState, useEffect } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS } from "../../constant/constant"
import cookieMethods from "../../utils/cookieUtils"
import axios from "../../utils/axios.config"

import { retrieve } from "../auth/auth"
import { getAuthorInfo, registerAuthor } from "./author"

export const AuthorApiData = createContext()

const AuthorApiDataProvider = (props) => {
  const [registerStatus, setRegisterStatus] = useState(false)
  const [isAuthorAuthenticated, setIsAuthorAuthenticated] = useState(false)
  const [userAuthorProfile, setUserAuthorProfile] = useState(null)
  const [authorRole, setAuthorRole] = useState(null)
  const [authorInfo, setAuthorInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchUser()
  }, [])

  const fetchUser = async () => {
    if (!isAuthorAuthenticated) {
      const userSession = await processRetrieve()
      if (userSession) {
        setIsAuthorAuthenticated(true)
      }
    }
  }

  const processRegisterAuthor = async (data) => {
    let response = await registerAuthor(data)
    if (response) {
      setUserAuthorProfile(response.data.data)
      processGetAuthorInfo(response.data.data.id)
      cookieMethods.setCookies(
        response.data.access_token,
        response.data.refresh_token
      )
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.access_token}`
      setRegisterStatus(true)
      setAuthorRole(response.data.data.roleId)
      setIsAuthorAuthenticated(true)
      // console.log(response)
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
      setUserAuthorProfile(response.user)
      setAuthorRole(response.user.roleId)
      setIsAuthorAuthenticated(true)
      return true
    } else {
      return false
    }
  }

  const processGetAuthorInfo = async (data) => {
    let response = await getAuthorInfo(data)
    if (response) {
      setAuthorInfo(response.data.data)
    }
  }

  return (
    <AuthorApiData.Provider
      value={{
        registerStatus,
        processRegisterAuthor,
        processGetAuthorInfo,
        processRetrieve,
        authorRole,
        authorInfo,
        userAuthorProfile,
        setUserAuthorProfile,
        isAuthorAuthenticated,
        setIsAuthorAuthenticated,
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </AuthorApiData.Provider>
  )
}

export default AuthorApiDataProvider
