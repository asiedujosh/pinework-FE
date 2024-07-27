import React, { createContext, useState, useEffect } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constant/constant"
import {
  addPage,
  searchPage,
  getBookPages,
  editPage,
  deletePage,
} from "./bookPage"

export const BookPageApiData = createContext()

const BookPageApiDataProvider = (props) => {
  const [bookPages, setBookPages] = useState([])
  const [searchBookPage, setSearchBookPage] = useState([])
  const [paginationData, setPaginationData] = useState()
  const [searchPaginationData, setSearchPaginationData] = useState(null)
  const [prompt, setPrompt] = useState(false)

  const processGetBookPage = async (data, id) => {
    let response = await getBookPages(data || 1, id)
    if (response) {
      setBookPages(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processAddBookPage = async (data) => {
    let response = await addPage(data)
    if (response) {
      processGetBookPage()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processSearchBookPage = async (data) => {
    let response = await searchPage(data)
    if (response) {
      setSearchBookPage(response.data.data)
      setSearchPaginationData(response.data.pagination)
    }
  }

  const processEditBookPage = async (data) => {
    let response = await editPage(data)
    if (response) {
      processGetBookPage()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteBookPage = async (data) => {
    let response = await deletePage(data)
    if (response) {
      processGetBookPage()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <BookPageApiData.Provider
      value={{
        bookPages,
        searchBookPage,
        prompt,
        setPrompt,
        processSearchBookPage,
        processGetBookPage,
        processAddBookPage,
        processEditBookPage,
        processDeleteBookPage,
        paginationData,
        searchPaginationData,
      }}
    >
      {props.children}
    </BookPageApiData.Provider>
  )
}

export default BookPageApiDataProvider
