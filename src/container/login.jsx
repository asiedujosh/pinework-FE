import React, { useState, useContext, useEffect } from "react"
import { LOGINSYSTEM } from "../constant/loginConstant"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { useNavigate } from "react-router-dom"
import InputField from "../component/inputField"
import SelectField from "../component/selectField"
import SubmitBtn from "../component/submitBtn"

const Login = ({ setCardType }) => {
  const { processLogin, isAuthenticated, role } = useContext(AuthApiData)
  const [formData, setFormData] = useState({})
  const [error, setError] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    if (role) {
      switch (role) {
        case "1":
          navigate("/adminDashboard")
          break
        case "2":
          navigate("/studentDashboard")
          break
        case "3":
          navigate("/schoolDashboard")
        case "4":
          navigate("/authorDashboard")
          break
        default:
          navigate("/")
      }
    } else {
      navigate("/")
    }
  }, [isAuthenticated])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleClickRegister = () => {
    setCardType(2)
  }

  const handleSubmit = () => {
    processLogin(formData)
  }

  return (
    <div className="bg-white rounded-lg py-6 px-8">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold text-gray-500 mb-4">
          {LOGINSYSTEM.title}
        </h2>
        <span
          className="text-slate-500 cursor-pointer"
          onClick={handleClickRegister}
        >
          Register
        </span>
      </div>
      <div>
        {LOGINSYSTEM.fieldDetail.map((item) => {
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
      <div className="mt-6">
        <SubmitBtn text={LOGINSYSTEM.btnText} submit={handleSubmit} />
      </div>
    </div>
  )
}

export default Login
