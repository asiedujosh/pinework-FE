import React from "react"
import { Link } from "react-router-dom"

const AuthorSidebar = () => {
  // Add your sidebar links here
  const links = [
    { id: 1, label: "Books", link: "authorBooks" },
    { id: 2, label: "Publish", link: "authorPublish" },
    { id: 3, label: "Subscription", link: "authorSubscription" },
    { id: 4, label: "Comment", link: "authorComment" },
    { id: 5, label: "Reports", link: "" },
    { id: 6, label: "Settings", link: "" },
  ]

  return (
    <div className="sidebarBg text-white overflow-hidden w-48">
      <Link
        to={"/authorDashboard"}
        className="flex w-full items-center justify-center text-lg font-bold border-b h-20 border-gray-500 sidebarBg hover:bg-gray-600"
      >
        <span className="w-1/2 text-xl">Home</span>
      </Link>
      <div>
        {links.map((item) => (
          <Link
            key={item.id}
            to={`/authorDashboard/${item.link}`}
            className="flex items-center justify-center w-full text-gray-400 border-b border-gray-500 sidebarBg hover:text-white h-20 hover:bg-gray-600"
          >
            <span className="w-1/2 text-xl text-white">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AuthorSidebar
