import React, { useState } from "react"
import SearchField from "../component/searchField"
import TabBtn from "../component/tabBtn"
import SubmitBtn from "../component/submitBtn"
import StudentWorkCard from "../component/studentWorkCard"

const SchoolWorkDashboard = () => {
  const [tab, setTab] = useState(1)

  const handleTabChange = () => {
    setTab((prev) => (prev == 1 ? 2 : 1))
  }

  return (
    <>
      <div className="w-full flex items-center">
        <div className="w-1/4">
          <h2 className="text-3xl font-semibold">Class Two </h2>
        </div>
        <div className="w-3/4 mx-4">
          <SearchField sw="w-full" />
        </div>
      </div>
      <hr className="mt-4" />
      <div className="flex">
        <TabBtn text="Current" tabId="1" state={tab} submit={handleTabChange} />
        <TabBtn text="History" tabId="2" state={tab} submit={handleTabChange} />
      </div>

      <div className="mt-4">
        <StudentWorkCard />
      </div>
    </>
  )
}

export default SchoolWorkDashboard
