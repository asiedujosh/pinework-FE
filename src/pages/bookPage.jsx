import React, { useContext, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useParams, useNavigate } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import { BookPageApiData } from "../contextApi/bookPage/bookPageContextApi"
import BookPageTableContainer from "../container/bookPageTableContainer"
import SubmitBtn from "../component/submitBtn"

const BookPage = () => {
  const { processGetBookPage } = useContext(BookPageApiData)
  const { id, book } = useParams()

  const navigate = useNavigate()


  //authorInfo.userId

  useEffect(() => {
    processGetBookPage("", id)
  }, [])

  const handleSubmit = async () => {
    navigate(`/authorDashboard/addPage/${id}/createPage/${book}`)
  }

  return (
    <>
      <div className="flex justify-between mx-10 items-center">
        <h4 className="text-gray-500 text-xl font-medium">{book}</h4>
        <div className="w-1/6">
          <SubmitBtn text={"New Page"} submit={handleSubmit} />
        </div>
      </div>

      <div>
        <BookPageTableContainer bookId={id} />
      </div>
      <ToastContainer />
    </>
  )
}

export default BookPage
