import React, { useState } from "react"

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked)
  }

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="subscribe"
        name="subscribe"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="subscribe" className="mx-2 text-gray-500">
        Terms and conditions
      </label>
    </div>
  )
}

export default CheckBox
