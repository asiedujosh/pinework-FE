import React, { useContext, useState } from "react"
import { BookPageApiData } from "../contextApi/bookPage/bookPageContextApi"
import { PAGETABLE } from "../constant/pageConstant"
import CurtainPrompt from "./curtainPrompt"
import { ToastContainer } from "react-toastify"
import { Link } from "react-router-dom"

const BookPageTable = () => {
  const {
    bookPages,
    searchBookPage,
    prompt,
    setPrompt,
    processDeleteBookPage,
  } = useContext(BookPageApiData)
  const [deleteId, setDeleteId] = useState()

  const proceedSubmit = () => {
    processDeleteBookPage(deleteId)
    setPrompt(false)
  }

  const dontProceedSubmit = () => {
    setPrompt(false)
  }

  const handleDeletePage = (id) => {
    setDeleteId(id)
    setPrompt(true)
  }

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {PAGETABLE.map((item) => (
              <th className="border border-gray-200 py-4 px-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          {searchBookPage.length > 0
            ? searchBookPage.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.pageNo}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.title}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    <div className="flex space-x-2">
                      <Link
                        to={`/authorDashboard/questions/book/${item.bookId}/page/${item.id}`}
                        className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded"
                      >
                        View
                      </Link>
                      <Link
                        to={`/authorDashboard/createQuestion/${item.bookId}/page/${item.id}/author/${item.authorId}`}
                        className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded"
                      >
                        Add Question
                      </Link>
                      <Link
                        to={`/authorDashboard/editPage/${item.id}/edit`}
                        className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded"
                      >
                        Edit
                      </Link>
                      <div
                        onClick={() => {
                          handleDeletePage(item.id)
                        }}
                        className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                      >
                        Delete
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            : bookPages?.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.pageNo}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.title}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    <div className="flex space-x-2">
                      <Link
                        to={`/authorDashboard/questions/book/${item.bookId}/page/${item.id}`}
                        className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded"
                      >
                        View
                      </Link>
                      <Link
                        to={`/authorDashboard/createQuestion/${item.bookId}/page/${item.id}/author/${item.authorId}`}
                        className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded"
                      >
                        Add Question
                      </Link>
                      <Link
                        to={`/authorDashboard/editPage/${item.id}/edit`}
                        className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded"
                      >
                        Edit
                      </Link>
                      <div
                        onClick={() => {
                          handleDeletePage(item.id)
                        }}
                        className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                      >
                        Delete
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      <ToastContainer />
      {prompt && (
        <CurtainPrompt
          promptTitle={
            "By deleting the page, all related questions will be deleted"
          }
          yesFunction={proceedSubmit}
          noFunction={dontProceedSubmit}
        />
      )}
    </>
  )
}

export default BookPageTable
