import React, { useState } from "react"
import { Alphabets } from "../utils/options"

const OptionAnsInput = ({ field, value, change, defaultVal }) => {
  //   const [optionValue, setOptionValue] = useState("")

  //console.log(defaultVal)

  const handleInputChange = (e) => {
    //console.log(e.target.value)
    change(e.target.value, field.id)
  }

  return (
    <div className="mb-2">
      <label className="block text-gray-500 text-sm py-2">{`Option ${
        Alphabets[field.id]
      }`}</label>
      <input
        type="text"
        id={`option${field.id}`}
        name={`option${field.id}`}
        value={value[field.value] || defaultVal}
        onChange={handleInputChange}
        className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 p-2"
      />
    </div>
  )
}

export default OptionAnsInput
