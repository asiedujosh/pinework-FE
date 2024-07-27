import { useContext, useEffect, useState } from "react"
import { QuestionApiData } from "../contextApi/question/questionContextApi"

const CountOnPage = async (data) => {
    const {processCountQuestion} = useContext(QuestionApiData)
    let countQuest = await processCountQuestion(data)
    return countQuest
}

export default CountOnPage