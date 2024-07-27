import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
import SchoolSidebar from "../container/schoolSideBar"
import Navbar from "../component/navbar"

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      <SchoolSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="p-4 flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
