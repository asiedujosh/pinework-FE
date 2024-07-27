import React, { useState, useContext, useEffect } from "react"
import { REGISTERSYSTEM } from "../constant/authorSignConstant"
import { AuthorApiData } from "../contextApi/author/authorContextApi"
import { useNavigate } from "react-router-dom"
import InputField from "../component/inputField"
import SelectField from "../component/selectField"
import SubmitBtn from "../component/submitBtn"
import CheckBox from "../component/checkbox"

const AuthorRegister = ({ setCardType }) => {
  const { processRegisterAuthor, isAuthorAuthenticated } =
    useContext(AuthorApiData)
  const [formData, setFormData] = useState({})
  const [error, setError] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthorAuthenticated) {
      navigate("/authorDashboard")
    }
  }, [isAuthorAuthenticated])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleClickSignIn = () => {
    setCardType(1)
  }

  const handleSubmit = () => {
    console.log(formData)
    processRegisterAuthor(formData)
  }

  return (
    <div className="bg-white rounded-lg py-6 px-8">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold text-gray-500 mb-4">
          {REGISTERSYSTEM.title}
        </h2>
        <span
          className="text-slate-500 cursor-pointer"
          onClick={handleClickSignIn}
        >
          Sign In
        </span>
      </div>
      <div>
        {REGISTERSYSTEM.fieldDetail.map((item) => {
          return item.type === "select" ? (
            <SelectField
              key={item.id}
              field={item}
              value={formData}
              options={item.options}
              change={(data, field) => {
                handleInputChange(data, field)
              }}
            />
          ) : (
            <InputField
              field={item}
              value={formData}
              defaultVal={item.defaultValue}
              readOnly={item.readOnly}
              change={(data, field) => {
                handleInputChange(data, field)
              }}
            />
          )
        })}
      </div>
      <div>
        <CheckBox />
      </div>
      <div className="mt-6">
        <SubmitBtn text={REGISTERSYSTEM.btnText} submit={handleSubmit} />
      </div>
    </div>
  )
}

export default AuthorRegister
