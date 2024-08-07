import React, { useContext } from "react"
import { AUTHORSUBSCRIPTIONTABLE } from "../constant/subscriptionConstant"
import { SubscriptionApiData } from "../contextApi/subscription/subscriptionContextApi"

const AuthorSubscriptionTable = () => {
  const { searchAuthorSubscriptionRecord, authorSubscriptionList } =
    useContext(SubscriptionApiData)
  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {AUTHORSUBSCRIPTIONTABLE.map((item) => (
              <th className="border border-gray-200 py-4 px-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          {searchAuthorSubscriptionRecord.length > 0
            ? searchAuthorSubscriptionRecord.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.created_at}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.userId}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.bookName}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.status}
                  </td>
                </tr>
              ))
            : authorSubscriptionList?.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.created_at}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.userId}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.bookName}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.status}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  )
}

export default AuthorSubscriptionTable
