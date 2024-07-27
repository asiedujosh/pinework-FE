import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constant/constant"
import {
  addBook,
  searchBook,
  searchAuthorBook,
  getBook,
  getAuthorBooks,
  editBook,
  changeBookStatus,
  deleteBook,
} from "./creation"

export const CreationApiData = createContext()

const CreationApiDataProvider = (props) => {
  const [bookList, setBookList] = useState([])
  const [authorBookList, setAuthorBookList] = useState([])
  const [prompt, setPrompt] = useState(false)
  const [paginationData, setPaginationData] = useState()
  const [searchBookRecord, setSearchBookRecord] = useState([])
  const [searchAuthorBookRecord, setSearchAuthorBookRecord] = useState([])
  const [searchPaginationData, setSearchPaginationData] = useState(null)

  const processGetBook = async (data) => {
    let response = await getBook(data || 1)
    if (response) {
      setBookList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processGetAuthorBooks = async (data, authorId) => {
    let response = await getAuthorBooks(data || 1, authorId)
    if (response) {
      setAuthorBookList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processSearchBook = async (data) => {
    let responseOnSearchBook = await searchBook(data)
    if (responseOnSearchBook) {
      setSearchBookRecord(responseOnSearchBook.data.data)
      setSearchPaginationData(response.data.pagination)
    }
  }

  const processSearchAuthorBook = async (data) => {
    let responseOnSearchAuthorBook = await searchAuthorBook(data)
    if (responseOnSearchAuthorBook) {
      setSearchAuthorBookRecord(responseOnSearchAuthorBook.data.data)
      setSearchPaginationData(response.data.pagination)
    }
  }

  const processAddBook = async (data) => {
    let response = await addBook(data)
    if (response) {
      setPrompt((prev) => !prev)
      processGetBook()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processAddBookStatus = async (data) => {
    let response = await changeBookStatus(data)
    if (response) {
      processGetBook()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateBook = async (data) => {
    let response = await editBook(data)
    if (response) {
      processGetBook()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteBook = async (data) => {
    // console.log(data)
    let response = await deleteBook(data)
    if (response) {
      processGetBook()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <CreationApiData.Provider
      value={{
        bookList,
        prompt,
        setPrompt,
        authorBookList,
        processAddBook,
        processGetBook,
        processGetAuthorBooks,
        processSearchBook,
        processSearchAuthorBook,
        processAddBookStatus,
        searchBookRecord,
        searchAuthorBookRecord,
        searchPaginationData,
        processUpdateBook,
        processDeleteBook,
        paginationData,
      }}
    >
      {props.children}
    </CreationApiData.Provider>
  )
}

export default CreationApiDataProvider
