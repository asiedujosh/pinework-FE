import { useState, useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ADDPAGE } from "../constant/pageConstant"
import InputField from "../component/inputField"
import SubmitBtn from "../component/submitBtn"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { BookPageApiData } from "../contextApi/bookPage/bookPageContextApi"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const CreatePage = () => {
  const { userProfile } = useContext(AuthApiData)
  const { processAddBookPage } = useContext(BookPageApiData)
  const { id, book } = useParams()
  const [error, setError] = useState([])
  const [formData, setFormData] = useState({})

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = (e) => {
    let newData = {
      bookId: id,
      pageNo: formData.pageNo,
      title: formData.pageTitle,
      authorId: userProfile.id,
    }
    // console.log(newData)
    processAddBookPage(newData)
  }

  return (
    <>
      <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
        <div className="flex justify-center align-items mt-4">
          <h2 className="text-gray-600 text-xl font-semibold">
            {`Add A Page To ${book}`}
          </h2>
        </div>
        <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

        <div className="flex flex-col mt-6">
          <div className="flex flex-col md:flex-row justify-center">
            {/* Card 1 */}
            <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
              <div className="space-y-4">
                {ADDPAGE.fieldDetail.map((item) => {
                  return (
                    <InputField
                      field={item}
                      value={formData}
                      defaultVal={item.defaultValue}
                      readOnly={item.readOnly}
                      change={(data, field) => {
                        handleInputChange(data, field)
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mt-2 min-w-full flex items-center justify-center">
            <SubmitBtn text={ADDPAGE.buttonText} submit={handleSubmit} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default CreatePage
