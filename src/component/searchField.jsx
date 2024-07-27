import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const SearchField = ({ sw }) => {
  const [query, setQuery] = useState("")

  let iconSize = "w-4 h-4 text-white"

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", query)
  }

  return (
    <div className="flex justify-center mt-4">
      <form onSubmit={handleSearch} className={sw}>
        <div className="flex items-center rounded-3xl bg-white border-white py-2 px-4">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-1 leading-tight focus:outline-none"
            placeholder="Search Book"
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-slate-500 hover:bg-slate-700 border-slate-500 hover:border-slate-700 text-sm border-4 text-white py-1 px-2 rounded-3xl"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className={iconSize} />
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchField
