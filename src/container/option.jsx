import SubmitBtn from "../component/submitBtn"

const Option = ({ setCardType }) => {
  const handleClickSignIn = () => {
    setCardType(1)
  }

  const handleRegisterStudent = () => {
    setCardType(3)
  }

  const handleRegisterSchool = () => {
    setCardType(4)
  }

  const handleRegisterAuthor = () => {
    setCardType(5)
  }

  return (
    <div className="bg-white rounded-lg py-6 px-8">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold text-gray-500 mb-4">SIGN UP AS</h2>
        <span
          className="text-slate-500 cursor-pointer"
          onClick={handleClickSignIn}
        >
          Sign In
        </span>
      </div>
      <div>
        <div>
          <SubmitBtn text={"Student"} submit={handleRegisterStudent} />
          <hr />
          <SubmitBtn text={"Institution"} submit={handleRegisterSchool} />
          <hr />
          <SubmitBtn text={"Author"} submit={handleRegisterAuthor} />
        </div>
      </div>
    </div>
  )
}

export default Option
