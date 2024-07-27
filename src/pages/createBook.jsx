import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ADDBOOK } from "../constant/books"
import InputField from "../component/inputField"
import SelectField from "../component/selectField"
import UploadImage from "../component/uploadImage"
import SubmitBtn from "../component/submitBtn"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { BookTypeApiData } from "../contextApi/bookType/bookTypeContextApi"
import { BookPageApiData } from "../contextApi/bookPage/bookPageContextApi"
import { ClassesApiData } from "../contextApi/classes/classesContextApi"
import { CreationApiData } from "../contextApi/creation/creationContextApi"
import CurtainPrompt from "../component/curtainPrompt"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const CreateBook = () => {
  const { userProfile } = useContext(AuthApiData)
  const { processGetAllBookType, bookTypeOptions, allBookTypeList } =
    useContext(BookTypeApiData)
  const { processGetAllClasses, classOptions, allClassesList } =
    useContext(ClassesApiData)
  const { processAddBook, prompt } = useContext(CreationApiData)
  const [formData, setFormData] = useState({
    bookTypeId: null,
    classId: null,
  })

  const navigate = useNavigate()

  useEffect(() => {
    processGetAllBookType()
    processGetAllClasses()

    setFormData({
      ...formData,
      bookTypeId: bookTypeOptions[0],
      classId: classOptions[0],
    })
  }, [])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const goToAddPage = () => {
    navigate("/authorDashboard")
  }

  const handleSubmit = async () => {
    let bookTypeId = allBookTypeList.filter(
      (item) => item.bookType == formData.bookTypeId
    )[0].id

    let classId = allClassesList.filter(
      (item) => item.classes == formData.classId
    )[0].id

    formData.bookType = bookTypeId
    formData.class = classId
    formData.authorId = userProfile.id
    formData.coverImage = formData.imageUpload

    // console.log(formData)

    processAddBook(formData)
  }

  return (
    <>
      <div className="checkPoint">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDBOOK.title}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <div className="space-y-2">
                  {ADDBOOK.fieldDetail.map((item) => {
                    return item.type === "select" ? (
                      <SelectField
                        key={item.id}
                        field={item}
                        value={formData}
                        options={
                          item.name === "bookType"
                            ? bookTypeOptions
                            : classOptions
                        }
                        change={(data, field) => {
                          handleInputChange(data, field)
                        }}
                      />
                    ) : (
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
                <div className="mt-4">
                  <UploadImage
                    change={(data, field) => {
                      handleInputChange(data, field)
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-2 min-w-full flex items-center justify-center">
              <SubmitBtn text={ADDBOOK.buttonText} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      {prompt && (
        <CurtainPrompt
          promptTitle={
            "Congratulations on adding a book, start adding a page to your books"
          }
          yesFunction={goToAddPage}
        />
      )}
    </>
  )
}

export default CreateBook
