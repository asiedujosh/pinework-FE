import axios from "../../utils/axios.config"
import { LISTALL, SUCCESS_STATUS } from "../../constant/constant"

export const addQuestion = async (data) => {
  try {
    let responseOnAddQuestion = await axios.post("/api/storeQuestion", data)
    if (responseOnAddQuestion) {
      if (responseOnAddQuestion.status === SUCCESS_STATUS) {
        return responseOnAddQuestion.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchQuestion = async (data) => {
  try {
    let responseOnSearchQuestion = await axios.get(
      `/api/searchQuestion?keyword=${data}`
    )
    if (responseOnSearchQuestion) {
      if (responseOnSearchQuestion.status === SUCCESS_STATUS) {
        return responseOnSearchQuestion.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const countQuestionsOnPage = async (data) => {
  try {
    let responseOnCountQuestion = await axios.get(
      `/api/countQuestions?pageId=${data.pageId}&bookId=${data.bookId}`
    )
    if (responseOnCountQuestion) {
      if (responseOnCountQuestion.status === SUCCESS_STATUS) {
        return responseOnCountQuestion.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getQuestionOnPage = async (data) => {
  try {
    let responseOnGetQuestionOnPage = await axios.get(
      `/api/getQuestions?bookId=${data.bookId}&pageId=${data.pageId}`
    )
    if (responseOnGetQuestionOnPage) {
      if (responseOnGetQuestionOnPage.status === SUCCESS_STATUS) {
        return responseOnGetQuestionOnPage.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editQuestionOnPage = async (data) => {
  try {
    let responseOnEditQuestionOnPage = await axios.put(
      `/api/updateQuestion/${data.id}`,
      data
    )
    if (responseOnEditQuestionOnPage) {
      if (responseOnEditQuestionOnPage.status === SUCCESS_STATUS) {
        return responseOnEditQuestionOnPage.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteQuestion = async (data) => {
  // console.log(data)
  try {
    let responseOnDeleteQuestion = await axios.delete(
      `/api/deleteQuestion/${data}`
    )

    if (responseOnDeleteQuestion) {
      if (responseOnDeleteQuestion.status === SUCCESS_STATUS) {
        return responseOnDeleteQuestion.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
