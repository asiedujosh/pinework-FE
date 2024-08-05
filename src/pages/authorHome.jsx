import React, { useContext, useEffect } from "react"
import DashItemCard from "../component/dashItemCard"
import RenderBarChart from "../component/barChart"
import { useNavigate } from "react-router-dom"
import { AuthorApiData } from "../contextApi/author/authorContextApi"
import { CreationApiData } from "../contextApi/creation/creationContextApi"
import SubmitBtn from "../component/submitBtn"

const AuthorHome = () => {
  const { authorInfo } = useContext(AuthorApiData)
  const { noOfBooksPublished, noOfBooksNotPublished } =
    useContext(CreationApiData)
  const navigate = useNavigate()

  const goToCreateBook = () => {
    navigate("createBook")
  }

  return (
    <div className="w-full">
      <div>
        <SubmitBtn text={"Create A Book"} submit={goToCreateBook} />
      </div>
      <div className="flex mt-2">
        <div className="w-1/4 mx-2">
          <DashItemCard
            title={"Books"}
            subTitle={"Incomplete"}
            link={"authorBooks"}
            qty={noOfBooksNotPublished}
          />
        </div>
        <div className="w-1/4 mx-2">
          <DashItemCard
            title={"Published"}
            subTitle={"Complete"}
            link={"authorPublish"}
            qty={noOfBooksPublished}
          />
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

export default AuthorHome
