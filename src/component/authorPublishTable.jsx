import React, { useContext, useState } from "react"
import { BOOKTABLE } from "../constant/books"
import { AuthorApiData } from "../contextApi/author/authorContextApi"
import { CreationApiData } from "../contextApi/creation/creationContextApi"
import { ClassesApiData } from "../contextApi/classes/classesContextApi"
import { BookTypeApiData } from "../contextApi/bookType/bookTypeContextApi"
import { UNPUBLISH } from "../constant/statusConstant"
import CurtainPrompt from "./curtainPrompt"
import { ToastContainer } from "react-toastify"
import idToBookType from "../utils/idToBookType"
import idToClass from "../utils/idToClass"
import { Link, useNavigate } from "react-router-dom"

const AuthorPublishTable = () => {
  const {
    authorPublishList,
    searchAuthorPublishRecord,
    processGetAuthorPublish,
    bookPrompt,
    setBookPrompt,
    processPublish,
  } = useContext(CreationApiData)
  const { authorInfo } = useContext(AuthorApiData)
  const { allClassesList } = useContext(ClassesApiData)
  const { allBookTypeList } = useContext(BookTypeApiData)

  const handleUnpublish = (id) => {
    processPublish(id, { status: UNPUBLISH })
    processGetAuthorPublish("", authorInfo.userId)
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
          {searchAuthorPublishRecord.length > 0
            ? searchAuthorPublishRecord.map((item) => (
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
                    <div className="flex space-x-2">
                      <Link
                        to={`/authorDashboard/page/${item.id}/edit/${
                          item.bookName
                        }/publish/${"true"}`}
                        className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                      >
                        View
                      </Link>

                      <span
                        onClick={() => {
                          handleUnpublish(item.id)
                        }}
                        className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                      >
                        Unpublish
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            : authorPublishList?.map((item) => (
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
                    <div className="flex space-x-2">
                      <Link
                        to={`/authorDashboard/page/${item.id}/edit/${
                          item.bookName
                        }/publish/${"true"}`}
                        className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                      >
                        View
                      </Link>

                      <span
                        onClick={() => {
                          handleUnpublish(item.id)
                        }}
                        className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                      >
                        Unpublish
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      <ToastContainer />
      {bookPrompt && (
        <CurtainPrompt
          promptTitle={"By unpublishing you might lose all subscribers"}
          yesFunction={() => {
            console.log("Yes Function")
          }}
          noFunction={() => {
            console.log("No Function")
          }}
        />
      )}
    </>
  )
}

export default AuthorPublishTable
