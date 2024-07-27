import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { AuthorApiData } from "../contextApi/author/authorContextApi"
import AuthorSidebar from "../container/authorSideBar"
import Navbar from "../component/navbar"

const AuthorDashboard = () => {
  const { isAuthenticated, userProfile, role, processLogout, logoutStatus } =
    useContext(AuthApiData)
  const {
    authorRole,
    processGetAuthorInfo,
    userAuthorProfile,
    authorInfo,
    setIsAuthorAuthenticated,
    isAuthorAuthenticated,
  } = useContext(AuthorApiData)

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated || isAuthorAuthenticated) {
      if (role == "4" || authorRole == "4") {
        processGetAuthorInfo(userProfile?.id || userAuthorProfile?.id)
        // console.log(userAuthorProfile)
      } else {
        navigate("/")
      }
    } else {
      navigate("/")
    }
  }, [isAuthenticated, isAuthorAuthenticated])

  useEffect(() => {
    if (logoutStatus) {
      setIsAuthorAuthenticated(false)
    }
  }, [logoutStatus])

  return (
    <div className="flex h-screen">
      <AuthorSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar title={authorInfo?.fullName} logout={processLogout} />
        <div className="p-4 flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthorDashboard
