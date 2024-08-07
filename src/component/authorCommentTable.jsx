import React, { useContext } from "react"
import { AUTHORCOMMENTTABLE } from "../constant/commentConstant"
import { CommentApiData } from "../contextApi/comment/commentContextApi"

const AuthorCommentTable = () => {
  const { searchAuthorCommentRecord, authorCommentList } =
    useContext(CommentApiData)
  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {AUTHORCOMMENTTABLE.map((item) => (
              <th className="border border-gray-200 py-4 px-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          {searchAuthorCommentRecord.length > 0
            ? searchAuthorCommentRecord.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">Date</td>
                  <td className="border border-gray-200 py-4 px-2">UserId</td>
                  <td className="border border-gray-200 py-4 px-2">BookName</td>
                  <td className="border border-gray-200 py-4 px-2">Comment</td>
                </tr>
              ))
            : authorCommentList?.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">Date</td>
                  <td className="border border-gray-200 py-4 px-2">UserId</td>
                  <td className="border border-gray-200 py-4 px-2">BookName</td>
                  <td className="border border-gray-200 py-4 px-2">Comment</td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  )
}

export default AuthorCommentTable
