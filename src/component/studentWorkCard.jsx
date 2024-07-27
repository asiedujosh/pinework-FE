import WorkTableResult from "./workTableResult"

const StudentWorkCard = () => {
  return (
    <div className="w-full mx-auto bg-white rounded-xl py-10 px-10">
      <h2 className="text-2xl font-semibold">Joshua Asiedu</h2>
      <hr className="mt-4" />
      <div className="mt-4">
        <WorkTableResult />
      </div>
    </div>
  )
}

export default StudentWorkCard
