import React, { useContext } from "react"
import { Link } from "react-router-dom"

const Navbar = ({ title, logout }) => {
  const handleLogout = () => {
    logout()
  }

  return (
    <div className="navbar w-full h-20 flex items-center justify-between px-6">
      <div className="text-white text-3xl font-bold">
        {title ? `Hi ${title},` : "Pineworks"}
      </div>
      <div className="flex mx-4">
        <Link to="" className="text-white text-lg font-semibold px-2">
          Info
        </Link>
        <span className="text-white">|</span>
        <span
          className="text-white text-lg font-semibold px-2 cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </span>
      </div>
    </div>
  )
}

export default Navbar
