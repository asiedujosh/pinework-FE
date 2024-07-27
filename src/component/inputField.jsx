// InputField.js
import React from "react"

const InputField = ({ field, value, change, errors }) => {
  const handleInputChange = (e) => {
    change(e.target.value, field.name)
  }

  return (
    <div className="mb-4">
      <label htmlFor={field.label} className="block text-gray-500 text-sm py-2">
        {field.label}
      </label>
      <input
        type={field.type}
        id={field.name}
        name={field.name}
        value={value[field.name]}
        onChange={handleInputChange}
        placeholder={field.placeholder}
        className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 p-2"
      />
      {errors && errors.length !== 0 && (
        <p class="text-red-600 text-sm">*{errors.message}</p>
      )}
    </div>
  )
}

export default InputField
