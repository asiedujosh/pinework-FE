import React, { useContext, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Alphabets } from "../utils/options"
import { QuestionApiData } from "../contextApi/question/questionContextApi"
import classNames from "classnames"
import SubmitBtn from "../component/submitBtn"

const Questions = () => {
  const {
    processGetQuestions,
    processDeleteQuestion,
    questionList,
    questions,
    selectedQuestion,
    setSelectedQuestion,
  } = useContext(QuestionApiData)
  const { bookId, pageId } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    let data = {
      bookId,
      pageId,
    }
    processGetQuestions(data)
  }, [])

  let Image = questions.filter((item) => item.questionNo == selectedQuestion)[0]
    ?.images

  const submitToEdit = async (data) => {
    navigate(
      `/authorDashboard/editQuestion/${data}/page/${pageId}/book/${bookId}`
    )
  }

  const deleteQuestion = async (id) => {
    let data = {
      id: id,
      bookId: bookId,
      pageId: pageId,
    }
    //console.log(data)
    processDeleteQuestion(data)
  }

  return (
    <>
      {selectedQuestion == "0" ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">No Questions Available</h1>
        </div>
      ) : (
        <div className="flex h-screen">
          {/* Main display */}
          <div className="w-4/5 p-4 overflow-auto px-10">
            <div className="flex justify-between">
              <div className="w-3/4">
                <h1 className="text-2xl font-bold mb-4">
                  Question {selectedQuestion}
                </h1>
              </div>
              <div className="w-1/4 flex space-x-2">
                <SubmitBtn
                  text={"Edit"}
                  submit={() => {
                    submitToEdit(selectedQuestion)
                  }}
                  color={"bg-yellow-500 hover:bg-yellow-400"}
                />
                <SubmitBtn
                  text={"Delete"}
                  submit={() => {
                    deleteQuestion(
                      questions.filter(
                        (item) => item.questionNo == selectedQuestion
                      )[0].id
                    )
                  }}
                  color={"bg-red-500 hover:bg-red-400"}
                />
              </div>
            </div>
            <p>
              {/* Rendering out question */}
              <div
                dangerouslySetInnerHTML={{
                  __html: questions.filter(
                    (item) => item.questionNo == selectedQuestion
                  )[0]?.question,
                }}
              />
            </p>
            <div>
              {Image && <img src={Image} className="object-fit mt-4" />}
            </div>
            {/* Options  */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {questions
                .filter((item) => item.questionNo == selectedQuestion)[0]
                ?.options?.split("**")
                ?.map((item, index) => (
                  <div className="px-8 py-4 text-white bg-slate-500 cursor-pointer hover:bg-slate-400">
                    {`${Alphabets[index + 1]}. ${item}`}
                  </div>
                ))}
            </div>
            {/* Answer */}
            <div className="mt-4">
              <span className="text-gray-500 font-xl">
                Answer provided is{" "}
                {
                  questions.filter(
                    (item) => item.questionNo == selectedQuestion
                  )[0]?.answer
                }
              </span>
            </div>
          </div>

          {/* Sidebar */}
          <div className="absolute right-0 w-1/5 bg-gray-200 p-4 overflow-hidden">
            {questionList.map((item, index) => (
              <div
                key={index}
                className={classNames(
                  "p-2 mb-2 cursor-pointer",
                  {
                    "bg-blue-500 text-white":
                      selectedQuestion === item.questionNo,
                  },
                  { "bg-white": selectedQuestion !== item.questionNo }
                )}
                onClick={() => setSelectedQuestion(item.questionNo)}
              >
                {`Question ${item.questionNo}`}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Questions
