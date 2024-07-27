import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constant/constant"
import {
  addQuestion,
  searchQuestion,
  deleteQuestion,
  getQuestionOnPage,
  countQuestionsOnPage,
  editQuestionOnPage,
} from "./question"

export const QuestionApiData = createContext()

const QuestionApiDataProvider = (props) => {
  const [questionList, setQuestionList] = useState([])
  const [questions, setAllQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState()

  const processGetQuestions = async (data) => {
    let response = await getQuestionOnPage(data)
    if (response) {
      let qList = []
      let qQuest = []
      response.data.data.map((item) => {
        qList.push({ id: item.id, questionNo: item.questionNo })
        qQuest.push(item)
      })

      setQuestionList(qList)
      setAllQuestions(qQuest)
      let questionNo = qQuest[0]?.questionNo || 0
      console.log(questionNo)
      setSelectedQuestion(questionNo || 0)
    }
  }

  const processCountQuestion = async (data) => {
    try {
      let responseOnCountQuestion = await countQuestionsOnPage(data)
      if (responseOnCountQuestion) {
        return responseOnCountQuestion.data.data
      }
    } catch (err) {
      console.log(err)
    }
  }

  const processAddQuestion = async (data) => {
    let response = await addQuestion(data)
    if (response) {
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processEditQuestion = async (data) => {
    let response = await editQuestionOnPage(data)
    if (response) {
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteQuestion = async (data) => {
    let response = await deleteQuestion(data.id)
    if (response) {
      processGetQuestions(data)
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST)
    }
  }

  return (
    <QuestionApiData.Provider
      value={{
        processAddQuestion,
        questionList,
        questions,
        selectedQuestion,
        setSelectedQuestion,
        setAllQuestions,
        processGetQuestions,
        processCountQuestion,
        processEditQuestion,
        processDeleteQuestion,
      }}
    >
      {props.children}
    </QuestionApiData.Provider>
  )
}

export default QuestionApiDataProvider
