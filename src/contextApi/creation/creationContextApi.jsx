import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constant/constant"
import {
  addBook,
  searchBook,
  searchAuthorBook,
  countBooksNotPublishedByAuthor,
  countBooksPublishedByAuthor,
  getBook,
  getAuthorBooks,
  editBook,
  changeBookStatus,
  deleteBook,
} from "./creation"

export const CreationApiData = createContext()

const CreationApiDataProvider = (props) => {
  const [bookList, setBookList] = useState([])
  const [noOfBooksNotPublished, setNoOfBooksNotPublished] = useState(0)
  const [noOfBooksPublished, setNoOfBooksPublished] = useState(0)
  const [authorBookList, setAuthorBookList] = useState([])
  const [bookToEdit, setBookToEdit] = useState()
  const [bookPrompt, setBookPrompt] = useState(false)
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

  const processCountBooksNotPublished = async (id) => {
    let response = await countBooksNotPublishedByAuthor(id)
    if (response) {
      setNoOfBooksNotPublished(response.data.data)
    }
  }

  const processCountBooksPublished = async (id) => {
    let response = await countBooksPublishedByAuthor(id)
    if (response) {
      setNoOfBooksPublished(response.data.data)
    }
  }

  const processGetAuthorBooks = async (data, authorId) => {
    let response = await getAuthorBooks(data || 1, authorId)
    if (response) {
      setAuthorBookList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processAuthorBookToEdit = async (id) => {
    let authorBookToEdit = authorBookList.filter((item) => item.id == id)[0]
    setBookToEdit(authorBookToEdit)
  }

  const processSearchBook = async (data) => {
    let responseOnSearchBook = await searchBook(data)
    if (responseOnSearchBook) {
      setSearchBookRecord(responseOnSearchBook.data.data)
      setSearchPaginationData(response.data.pagination)
    }
  }

  const processSearchAuthorBook = async (data, id) => {
    let responseOnSearchAuthorBook = await searchAuthorBook(data, id)
    if (responseOnSearchAuthorBook) {
      setSearchAuthorBookRecord(responseOnSearchAuthorBook.data.data)
      setSearchPaginationData(responseOnSearchAuthorBook.data.pagination)
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

  const processPublish = async (id, data) => {
    let response = await changeBookStatus(id, data)
    if (response) {
      //processGetBook()
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
        bookPrompt,
        setBookPrompt,
        authorBookList,
        noOfBooksNotPublished,
        noOfBooksPublished,
        bookToEdit,
        processAddBook,
        processGetBook,
        processGetAuthorBooks,
        processSearchBook,
        processSearchAuthorBook,
        processPublish,
        processAuthorBookToEdit,
        processCountBooksNotPublished,
        processCountBooksPublished,
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
