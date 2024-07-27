import React from "react"
import { Link } from "react-router-dom"

const AuthorSidebar = () => {
  // Add your sidebar links here
  const links = ["Books", "Live", "Publish", "Comments", "Reports", "Settings"]

  return (
    <div className="sidebarBg text-white overflow-hidden w-48">
      <Link
        to={"/authorDashboard"}
        className="flex w-full items-center justify-center text-lg font-bold border-b h-20 border-gray-500 sidebarBg hover:bg-gray-600"
      >
        <span className="w-1/2 text-xl">Home</span>
      </Link>
      <div>
        {links.map((link) => (
          <Link
            key={link}
            to={`/authorDashboard/${link}`}
            className="flex items-center justify-center w-full text-gray-400 border-b border-gray-500 sidebarBg hover:text-white h-20 hover:bg-gray-600"
          >
            <span className="w-1/2 text-xl text-white">{link}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AuthorSidebar
