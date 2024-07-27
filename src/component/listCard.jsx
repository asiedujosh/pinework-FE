import SubmitBtn from "./submitBtn"
import { useNavigate } from "react-router-dom"

const ListCard = ({ block, noWorks }) => {
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate("workDashboard")
  }

  return (
    <div className="classes h-20 w-full flex items-center mt-4 px-10">
      <div className="w-3/4">
        <h3 className="text-2xl text-white font-semibold">
          {`${block} (${noWorks})`}
        </h3>
      </div>
      <div className="w-1/4">
        <SubmitBtn text="Check" submit={handleSubmit} />
      </div>
    </div>
  )
}

export default ListCard
