import React, { useContext } from "react"
import { BOOKTABLE } from "../constant/books"
import { CreationApiData } from "../contextApi/creation/creationContextApi"
import { ClassesApiData } from "../contextApi/classes/classesContextApi"
import { BookTypeApiData } from "../contextApi/bookType/bookTypeContextApi"
import bookToId from "../utils/bookToId"
import classToId from "../utils/classToId"
import { Link } from "react-router-dom"

const AuthorBookTable = () => {
  const { authorBookList, searchAuthorBookRecord } = useContext(CreationApiData)
  const { allClassesList } = useContext(ClassesApiData)
  const { allBookTypeList } = useContext(BookTypeApiData)

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
                    {bookToId(allBookTypeList, item.bookType)}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {classToId(allClassesList, item.class)}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.status}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    <div className="flex space-x-2">
                      <Link
                        to={`/authorDashboard/page/${item.id}/edit/${item.bookName}`}
                        className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded"
                      >
                        View
                      </Link>
                      <Link
                        to={`/dashboard/pages/${item.contact}/edit`}
                        className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded"
                      >
                        Edit
                      </Link>
                      <Link
                        to={`/dashboard/pages/${item.contact}/edit`}
                        className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded"
                      >
                        Delete
                      </Link>
                      <Link
                        to={`/authorDashboard/page/${item.id}/edit/${item.bookName}`}
                        className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded"
                      >
                        Publish
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            : authorBookList?.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.bookName}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {bookToId(allBookTypeList, item.bookType)}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {classToId(allClassesList, item.class)}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.status}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    <div className="flex space-x-2">
                      <Link
                        to={`/authorDashboard/page/${item.id}/edit/${item.bookName}`}
                        className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 rounded"
                      >
                        View
                      </Link>
                      <Link
                        to={`/dashboard/pages/${item.contact}/edit`}
                        className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 rounded"
                      >
                        Edit
                      </Link>
                      <Link
                        to={`/dashboard/pages/${item.contact}/edit`}
                        className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded"
                      >
                        Delete
                      </Link>
                      <Link
                        to={`/authorDashboard/page/${item.id}/edit/${item.bookName}`}
                        className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded"
                      >
                        Publish
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  )
}

export default AuthorBookTable
