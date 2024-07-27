import SubmitBtn from "./submitBtn"

const WorkTableResult = () => {
  const handleAdd = () => {
    console.log("We are working")
  }
  return (
    <div className="mt-4">
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            <th className="border border-gray-200 py-4 px-2">Date</th>
            <th className="border border-gray-200 py-4 px-2">
              Book Title & Page
            </th>
            <th className="border border-gray-200 py-4 px-2">Result</th>
            <th className="border border-gray-200 py-4 px-2">Seen</th>
            <th className="border border-gray-200 py-4 px-2">Action</th>
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          <tr className="border-t border-gray-200">
            <td className="border border-gray-200 py-4 px-2">
              July / 28 / 2024
            </td>
            <td className="border border-gray-200 py-4 px-2">
              English Language For Dummy
            </td>
            <td className="border border-gray-200 py-4 px-2">
              <div className="w-full flex justify-center">6/10</div>
            </td>
            <td className="border border-gray-200 py-4 px-2">
              <div className="w-full flex justify-center">
                <input type="checkbox" checked={false} />
              </div>
            </td>
            <td className="border border-gray-200 py-4 px-2">
              <SubmitBtn text={"View"} submit={handleAdd} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WorkTableResult
