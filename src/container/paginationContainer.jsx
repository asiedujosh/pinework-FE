import PaginationButton from "../component/paginationButton"

const PaginationContainer = ({ paginationData, paginationFunction }) => {
  return (
    <div className="flex justify-between mt-2">
      <div className="flex space-x-2 justify-center items-center">
        <PaginationButton
          direction={"prev"}
          paginationData={paginationData}
          paginationFunction={paginationFunction}
        />
        <PaginationButton
          paginationData={paginationData}
          paginationFunction={paginationFunction}
        />
      </div>
      <div>
        <p className="text-gray-500">
          Total {paginationData ? paginationData.total : "0"}
        </p>
      </div>
      <p className="text-gray-500">
        Page {paginationData ? paginationData.current_page : "0"} of{" "}
        {paginationData ? paginationData.last_page : "0"}
      </p>
    </div>
  )
}

export default PaginationContainer
