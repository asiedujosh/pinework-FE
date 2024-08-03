import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ADDBOOK } from "../constant/books"
import InputField from "../component/inputField"
import SelectField from "../component/selectField"
import UploadImage from "../component/uploadImage"
import SubmitBtn from "../component/submitBtn"
import idToBookType from "../utils/idToBookType"
import bookTypeToId from "../utils/bookTypeToId"
import classToId from "../utils/classToId"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { BookTypeApiData } from "../contextApi/bookType/bookTypeContextApi"
import { ClassesApiData } from "../contextApi/classes/classesContextApi"
import { CreationApiData } from "../contextApi/creation/creationContextApi"
import CurtainPrompt from "../component/curtainPrompt"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const EditBook = () => {
  const { id } = useParams()
  const { userProfile } = useContext(AuthApiData)
  const { processGetAllBookType, bookTypeOptions, allBookTypeList } =
    useContext(BookTypeApiData)
  const { processGetAllClasses, classOptions, allClassesList } =
    useContext(ClassesApiData)
  const { processUpdateBook, prompt, bookToEdit } = useContext(CreationApiData)
  const [formData, setFormData] = useState({
    bookName: bookToEdit.bookName,
    bookTypeId: idToBookType(allBookTypeList, bookToEdit.bookType),
    classId: bookToEdit.class,
    description: bookToEdit.description,
    imageUpload: bookToEdit.coverImage,
  })

  //console.log(allBookTypeList)

  useEffect(() => {
    processGetAllBookType()
    processGetAllClasses()

    setFormData({
      ...formData,
      classId: classOptions[0],
    })
  }, [])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = async () => {
    let newEditData = {
      id: id,
      bookName: formData.bookName,
      bookType: formData.bookType || formData.bookTypeId,
      classId: formData.targetClass || formData.classId,
      description: formData.description,
      imageUpload: formData.imageUpload || formData.image,
    }

    let bookTypeId = bookTypeToId(allBookTypeList, newEditData.bookType)
    let classId = classToId(allClassesList, newEditData.classId)

    newEditData.bookType = bookTypeId
    newEditData.classId = classId

    processUpdateBook(newEditData)

    //processAddBook(newEditData)
  }

  return (
    <>
      <div className="checkPoint">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {"Edit Book"}
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
                    imagePreview={formData.imageUpload || formData.image}
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

export default EditBook
