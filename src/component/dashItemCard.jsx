import React from "react"
import { Link } from "react-router-dom"

const DashItemCard = ({ title, link, qty, subTitle }) => {
  return (
    <div className="max-w-lg bg-white shadow-lg rounded-lg overflow-hidden mb-6 md:mb-0">
      <Link to={link}>
        <div className="w-full h-40 transition-transform transform hover:scale-105 hover:shadow-md hover:bg-white hover:ring-2 hover:ring-white">
          <div className="flex flex-col items-center justify-center py-10 px-2">
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              {title} {qty && `(${qty})`}
            </h2>
            {subTitle && <p className="text-sm text-gray-500">{subTitle}</p>}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default DashItemCard
