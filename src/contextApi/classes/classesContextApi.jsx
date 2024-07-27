import React, { createContext, useState, useEffect } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constant/constant"
import {
  getAllClasses,
  getClasses,
  addClasses,
  searchClasses,
  editClasses,
  deleteClasses,
} from "./classes"

export const ClassesApiData = createContext()

const ClassesApiDataProvider = (props) => {
  const [allClassesList, setAllClassesList] = useState([])
  const [searchClassesRecord, setSearchClassesRecord] = useState([])
  const [searchPaginationData, setSearchPaginationData] = useState(null)
  const [classesList, setClassesList] = useState([])
  const [classOptions, setClassOptions] = useState([])
  const [paginationData, setPaginationData] = useState()

  useEffect(() => {
    processGetAllClasses()
  }, [])

  const processGetClasses = async (data) => {
    let response = await getClasses(data || 1)
    if (response) {
      setClassesList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processSearchClasses = async (data) => {
    let responseOnSearchClasses = await searchClasses(data)
    if (responseOnSearchClasses) {
      setSearchClassesRecord(responseOnSearchClasses.data.data)
      setSearchPaginationData(response.data.pagination)
    }
  }

  const processGetAllClasses = async () => {
    let response = await getAllClasses()
    if (response) {
      setAllClassesList(response.data.data)
      let dummy = []
      response.data.data.map((item) => dummy.push(item.classes))
      setClassOptions(dummy)
    }
  }

  const processAddClasses = async (data) => {
    let response = await addClasses(data)
    if (response) {
      processGetAllClasses()
      processGetClasses()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateClasses = async (data) => {
    let response = await editClasses(data)
    if (response) {
      processGetAllClasses()
      processGetClasses()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteClasses = async (data) => {
    // console.log(data)
    let response = await deleteClasses(data)
    if (response) {
      processGetAllClasses()
      processGetClasses()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <ClassesApiData.Provider
      value={{
        processGetClasses,
        processGetAllClasses,
        processAddClasses,
        processUpdateClasses,
        processDeleteClasses,
        processSearchClasses,
        classOptions,
        allClassesList,
        classesList,
        paginationData,
        searchClassesRecord,
        searchPaginationData,
      }}
    >
      {props.children}
    </ClassesApiData.Provider>
  )
}

export default ClassesApiDataProvider
