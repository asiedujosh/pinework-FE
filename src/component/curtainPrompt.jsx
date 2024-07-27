import React from "react"
import SubmitBtn from "./submitBtn"

const CurtainPrompt = ({ promptTitle, yesFunction, noFunction }) => {
  return (
    <div
      id="overlay"
      className="fixed bg-black bg-opacity-50 inset-0 z-40 flex justify-center items-center"
    >
      <div className="bg-gray-200 max-w-sm py-2 px-3 rounded shadow-xl">
        <div className="w-full flex items-center">
          <div className="w-full">
            <h4 className="font-semibold text-2xl">Notice</h4>
            <span className="font-3xl text-xl">{promptTitle}</span>
            <div className="flex space-x-2 my-4">
              <SubmitBtn text="Yes" submit={yesFunction} />
              <SubmitBtn text="No" submit={noFunction} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurtainPrompt
