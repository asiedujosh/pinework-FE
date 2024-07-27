const SubmitBtn = ({ text, submit, color }) => {
  const handleSubmit = () => {
    submit()
  }
  return (
    <button
      className={`${
        color ? color : "submitBtn"
      } my-2 h-10 w-full rounded-lg text-white`}
      onClick={(e) => {
        handleSubmit(e)
      }}
    >
      <span>{text}</span>
    </button>
  )
}

export default SubmitBtn
