import React from "react"
import SubmitBtn from "./submitBtn"

const Card = ({ image, title, description, onAdd, actionText }) => {
  const handleAddBook = () => {
    console.log("We will submit")
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="h-80 w-full overflow-hidden">
        <img className="object-fit h-full w-full" src={image} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4 flex justify-end">
        <SubmitBtn text={actionText} submit={handleAddBook} />
      </div>
    </div>
  )
}

export default Card
