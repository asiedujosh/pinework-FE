import DashItemCard from "../component/dashItemCard"
import RenderBarChart from "../component/barChart"
import { useNavigate } from "react-router-dom"
import SubmitBtn from "../component/submitBtn"

const AdminHome = () => {
  const navigate = useNavigate()

  const goToCreateClass = () => {
    navigate("createClass")
  }

  const goToCreateSubject = () => {
    navigate("createSubject")
  }

  return (
    <div className="w-full">
      <div className="flex space-x-4">
        <SubmitBtn text={"Create Class"} submit={goToCreateClass} />
        <SubmitBtn text={"Create Subject"} submit={goToCreateSubject} />
      </div>
      <div className="flex mt-2">
        <div className="w-1/4 mx-2">
          <DashItemCard title={"Live"} link={"liveBooks"} qty={"12"} />
        </div>
        <div className="w-1/4 mx-2">
          <DashItemCard title={"Publish"} link={"liveBooks"} qty={"12"} />
        </div>
        <div className="w-1/4 mx-2">
          <DashItemCard title={"Subscribers"} link={"liveBooks"} qty={"12"} />
        </div>
        <div className="w-1/4 mx-2">
          <DashItemCard title={"Comments"} link={"comments"} qty={"12"} />
        </div>
      </div>
      <div className="flex mt-20">
        <div>
          <RenderBarChart />
        </div>
        <div className="w-full  ml-4">
          <div className="flex">
            <div className="w-1/2 mx-2">
              <DashItemCard title={"Transactions"} link={"transaction"} />
            </div>
            <div className="w-1/2 mx-2">
              <DashItemCard title={"Reports"} link={"report"} />
            </div>
          </div>
          <div className="flex mt-6">
            <div className="w-1/2 mx-2">
              <DashItemCard title={"Policy"} link={"liveBooks"} />
            </div>
            <div className="w-1/2 mx-2">
              <DashItemCard title={"Features"} link={"liveBooks"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHome
