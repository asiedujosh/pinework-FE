const TabBtn = ({ text, submit, state, tabId }) => {
  const handleSubmit = () => {
    submit()
  }
  return (
    <button
      className={`${
        state == tabId ? "sidebarBg" : "tabNotCurrent"
      } my-2 mx-2 h-10 w-full rounded-lg text-white`}
      onClick={(e) => {
        handleSubmit(e)
      }}
    >
      <span>{text}</span>
    </button>
  )
}

export default TabBtn
