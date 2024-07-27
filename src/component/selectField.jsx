// InputField.js
import React, { useEffect } from "react"

const SelectField = ({ field, value, change, options }) => {
  useEffect(() => {
    change(options && options[0], field.name)
  }, [])

  const handleInputChange = (e) => {
    change(e.target.value, field.name)
  }

  return (
    <div className="mb-4">
      <label htmlFor={field.label} className="block text-gray-500 text-sm py-2">
        {field.label}
      </label>
      <select
        type={field.type}
        id={field.name}
        name={field.name}
        value={value[field.name]}
        onChange={handleInputChange}
        placeholder={field.placeholder}
        className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 p-2"
      >
        {options &&
          options.map((item) => {
            return <option value={item}>{item}</option>
          })}
      </select>
    </div>
  )
}

export default SelectField
