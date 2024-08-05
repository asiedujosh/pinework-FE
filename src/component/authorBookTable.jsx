import React, { useContext, useState } from "react"
import { BOOKTABLE } from "../constant/books"
import { AuthorApiData } from "../contextApi/author/authorContextApi"
import { CreationApiData } from "../contextApi/creation/creationContextApi"
import { ClassesApiData } from "../contextApi/classes/classesContextApi"
import { BookTypeApiData } from "../contextApi/bookType/bookTypeContextApi"
import { PUBLISH, LIVE } from "../constant/statusConstant"
import CurtainPrompt from "./curtainPrompt"
import { ToastContainer } from "react-toastify"
import idToBookType from "../utils/idToBookType"
import idToClass from "../utils/idToClass"
import { Link, useNavigate } from "react-router-dom"

const AuthorBookTable = () => {
  const {
    authorBookList,
    searchAuthorBookRecord,
    processAuthorBookToEdit,
    processDeleteBook,
    processGetAuthorBooks,
    bookPrompt,
    setBookPrompt,
    processPublish,
  } = useContext(CreationApiData)
  const { authorInfo } = useContext(AuthorApiData)
  const { allClassesList } = useContext(ClassesApiData)
  const { allBookTypeList } = useContext(BookTypeApiData)
  const [deleteId, setDeleteId] = useState()

  const navigate = useNavigate()

  const handleEditBook = (id) => {
    processAuthorBookToEdit(id)
    navigate(`/authorDashboard/editBook/${id}/edit`)
  }

  const handlePublish = (id) => {
    processPublish(id, { status: PUBLISH })
    processGetAuthorBooks("", authorInfo.userId)
  }

  const proceedSubmit = () => {
    processDeleteBook(deleteId)
    setBookPrompt(false)
  }

  const dontProceedSubmit = () => {
    setBookPrompt(false)
  }

  const handleDeleteBook = (id) => {
    setDeleteId(id)
    setBookPrompt(true)
  }

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {BOOKTABLE.map((item) => (
              <th className="border border-gray-200 py-4 px-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          {searchAuthorBookRecord.length > 0
            ? searchAuthorBookRecord.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.bookName}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {idToBookType(allBookTypeList, item.bookType)}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {idToClass(allClassesList, item.class)}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.status}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.status === PUBLISH ? (
                      <span>Not available for edit</span>
                    ) : (
                      <div className="flex space-x-2">
                        <Link
                          to={`/authorDashboard/page/${item.id}/edit/${
                            item.bookName
                          }/publish/${item.status !== LIVE ? "false" : "true"}`}
                          className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                        >
                          View
                        </Link>
                        <span
                          onClick={() => {
                            handleEditBook(item.id)
                          }}
                          className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                        >
                          Edit
                        </span>
                        <span
                          onClick={() => {
                            handleDeleteBook(item.id)
                          }}
                          className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                        >
                          Delete
                        </span>
                        <span
                          onClick={() => {
                            handlePublish(item.id)
                          }}
                          className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                        >
                          Publish
                        </span>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            : authorBookList?.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.bookName}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {idToBookType(allBookTypeList, item.bookType)}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {idToClass(allClassesList, item.class)}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.status}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.status === PUBLISH ? (
                      <span>Not available for edit</span>
                    ) : (
                      <div className="flex space-x-2">
                        <Link
                          to={`/authorDashboard/page/${item.id}/edit/${
                            item.bookName
                          }/publish/${item.status !== LIVE ? "false" : "true"}`}
                          className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                        >
                          View
                        </Link>
                        <span
                          onClick={() => {
                            handleEditBook(item.id)
                          }}
                          className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                        >
                          Edit
                        </span>
                        <span
                          onClick={() => {
                            handleDeleteBook(item.id)
                          }}
                          className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                        >
                          Delete
                        </span>
                        <span
                          onClick={() => {
                            handlePublish(item.id)
                          }}
                          className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                        >
                          Publish
                        </span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      <ToastContainer />
      {bookPrompt && (
        <CurtainPrompt
          promptTitle={
            "By deleting the book, all related pages and questions will be deleted"
          }
          yesFunction={proceedSubmit}
          noFunction={dontProceedSubmit}
        />
      )}
    </>
  )
}

export default AuthorBookTable
