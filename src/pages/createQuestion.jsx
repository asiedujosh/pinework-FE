import { useState, useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { BookPageApiData } from "../contextApi/bookPage/bookPageContextApi"
import { CreationApiData } from "../contextApi/creation/creationContextApi"
import { QuestionApiData } from "../contextApi/question/questionContextApi"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { getBookTitle } from "../utils/getBookTitle"
import { getPageTitle } from "../utils/getPageTitle"
import InputField from "../component/inputField"
import SelectField from "../component/selectField"
import TextAreaField from "../component/textAreaField"
import OptionAnsInput from "../component/optionAnsInputField"
import UploadImage from "../component/uploadImage"
import LoadingBtn from "../component/loadingBtn"
import SubmitBtn from "../component/submitBtn"
import CreatePage from "./createPage"
import { ADDQUESTIONS } from "../constant/questionConstant"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const CreateQuestion = () => {
  const { createBookId, pageId, authorId } = useParams()
  const { bookPages } = useContext(BookPageApiData)
  const { authorBookList } = useContext(CreationApiData)
  const { processAddQuestion } = useContext(QuestionApiData)
  const { userProfile } = useContext(AuthApiData)

  const [formData, setFormData] = useState({
    answer: "None",
  })

  const [options, setOptions] = useState([
    {
      id: 1,
      value: null,
    },
    {
      id: 2,
      value: null,
    },
    {
      id: 3,
      value: null,
    },
    {
      id: 4,
      value: null,
    },
  ])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleAddOption = () => {
    setOptions([...options, { id: options.length + 1 }])
  }

  const handleOptionChange = (data, id) => {
    const index = options.findIndex((option) => option.id === id)

    if (index !== -1) {
      // If option with given ID exists, replace it
      const updatedOptions = [...options]
      updatedOptions[index] = { id: id, value: data }
      setOptions(updatedOptions)
    } else {
      // If option with given ID doesn't exist, add it
      setOptions([...options, { id: id, value: data }])
    }
  }

  const handleOptionAssign = (item) => {
    let Option
    switch (item.name) {
      case "examType":
        Option = examOptions
        break
      case "subject":
        Option = subjectOptions
        break
      case "year":
        Option = yearOptions
        break
      case "topic":
        Option = topicOptions
        break
      default:
        Option = ["None", "A", "B", "C", "D", "E", "F", "G", "H"]
    }
    return Option
  }

  const handleSubmit = () => {
    let optionalAns = []
    options.map((item) => optionalAns.push(`${item.value}*`))
    let optionalAnsString = optionalAns.join("*")

    let newData = {
      bookId: createBookId,
      pageId: pageId,
      authorId: authorId,
      questionNo: formData.questionNo,
      questionHint: formData.questionHint,
      question: formData.question.level.content,
      options: optionalAnsString.slice(0, -1),
      imageUpload: formData.imageUpload ? formData.imageUpload : null,
      answer: formData.answer,
    }
    //console.log(newData)
    processAddQuestion(newData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-between items-center mt-4 mx-5">
            <div>
              <h2 className="text-gray-600 text-xl font-semibold">
                {`Add Question To ${getBookTitle(
                  authorBookList,
                  createBookId
                )}, Page No ${getPageTitle(bookPages, pageId)?.no}, Title ${
                  getPageTitle(bookPages, pageId)?.title
                }`}
              </h2>
              {/* <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" /> */}
            </div>
            <div className="w-1/3">
              <SubmitBtn text={"Go To Pages"} submit={""} />
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                {/* <h2 className="text-lg font-semibold mb-2">
                  {"Question Detail"}
                </h2> */}

                <div className="">
                  <div className="flex w-full space-x-4">
                    {ADDQUESTIONS.fieldDetail0.map((item) => {
                      return (
                        (item.type === "text" && (
                          <div className="w-full">
                            <InputField
                              key={item.id}
                              field={item}
                              value={formData}
                              defaultVal={item.defaultValue}
                              readOnly={item.readOnly}
                              change={(data, field) => {
                                handleInputChange(data, field)
                              }}
                            />
                          </div>
                        )) ||
                        (item.type === "select" && (
                          <div className="w-full">
                            <SelectField
                              key={item.id}
                              field={item}
                              value={formData}
                              options={handleOptionAssign(item)}
                              change={(data, field) => {
                                handleInputChange(data, field)
                              }}
                            />
                          </div>
                        ))
                      )
                    })}
                  </div>

                  <div>
                    <h6 className="text-lg font-bold my-2">Question Section</h6>
                    {ADDQUESTIONS.fieldDetail1.map((item) => {
                      return (
                        (item.type === "text" && (
                          <InputField
                            key={item.id}
                            field={item}
                            value={formData}
                            defaultVal={item.defaultValue}
                            readOnly={item.readOnly}
                            change={(data, field) => {
                              handleInputChange(data, field)
                            }}
                          />
                        )) ||
                        (item.type === "select" && (
                          <SelectField
                            key={item.id}
                            field={item}
                            value={formData}
                            options={handleOptionAssign(item)}
                            change={(data, field) => {
                              handleInputChange(data, field)
                            }}
                          />
                        )) ||
                        (item.type === "textArea" && (
                          <TextAreaField
                            key={item.id}
                            field={item}
                            value={formData}
                            options={item.options}
                            change={(data, field) => {
                              handleInputChange(data, field)
                            }}
                          />
                        ))
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

                  <div className="mt-10">
                    <h6 className="text-lg font-bold my-2">
                      Optional Answers Section
                    </h6>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                      {options?.map((option) => {
                        // console.log(option)
                        return (
                          <OptionAnsInput
                            key={option}
                            field={option}
                            value={option}
                            change={(data, field) => {
                              handleOptionChange(data, field)
                            }}
                          />
                        )
                      })}
                    </div>

                    <button
                      type="button"
                      onClick={handleAddOption}
                      className="bg-gray-800 py-2 rounded-md px-4 text-white"
                    >
                      Add Option
                    </button>
                  </div>

                  <div className="mt-6">
                    <div className="flex w-full space-x-4">
                      {ADDQUESTIONS.fieldDetail3.map((item) => {
                        return (
                          item.type === "select" && (
                            <div className="w-full">
                              <SelectField
                                key={item.id}
                                field={item}
                                value={formData}
                                options={handleOptionAssign(item)}
                                change={(data, field) => {
                                  handleInputChange(data, field)
                                }}
                              />
                            </div>
                          )
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className="mt-2 min-w-full flex items-center justify-center">
                  {/* {loading ? (
                    <LoadingBtn />
                  ) : ( */}
                  <SubmitBtn
                    text={ADDQUESTIONS.buttonText}
                    submit={handleSubmit}
                  />
                  {/* )} */}
                </div>
              </div>
              {/* <CreatePage /> */}
              {/**Card 2 */}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default CreateQuestion
