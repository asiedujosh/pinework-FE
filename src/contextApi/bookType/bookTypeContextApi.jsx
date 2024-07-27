import React, { createContext, useState, useEffect } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constant/constant"
import {
  getAllBookType,
  getBookType,
  searchBookType,
  addBookType,
  editBookType,
  deleteBookType,
} from "./bookType"

export const BookTypeApiData = createContext()

const BookTypeApiDataProvider = (props) => {
  const [allBookTypeList, setAllBookTypeList] = useState([])
  const [bookTypeList, setBookTypeList] = useState([])
  const [bookTypeOptions, setBookTypeOptions] = useState([])
  const [paginationData, setPaginationData] = useState()

  useEffect(() => {
    processGetAllBookType()
  }, [])

  const processGetBookType = async (data) => {
    let response = await getBookType(data || 1)
    if (response) {
      setBookTypeList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processGetAllBookType = async () => {
    let response = await getAllBookType()
    if (response) {
      setAllBookTypeList(response.data.data)
      let dummy = []
      response.data.data.map((item) => dummy.push(item.bookType))
      setBookTypeOptions(dummy)
    }
  }

  const processAddBookType = async (data) => {
    let response = await addBookType(data)
    if (response) {
      processGetAllBookType()
      processGetBookType()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateBookType = async (data) => {
    let response = await editBookType(data)
    if (response) {
      processGetAllBookType()
      processGetBookType()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteBookType = async (data) => {
    // console.log(data)
    let response = await deleteBookType(data)
    if (response) {
      processGetAllBookType()
      processGetBookType()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <BookTypeApiData.Provider
      value={{
        allBookTypeList,
        bookTypeList,
        bookTypeOptions,
        processGetAllBookType,
        processAddBookType,
        processUpdateBookType,
        processDeleteBookType,
        paginationData,
      }}
    >
      {props.children}
    </BookTypeApiData.Provider>
  )
}

export default BookTypeApiDataProvider
