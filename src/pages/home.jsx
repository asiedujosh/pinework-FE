import React, { useState } from "react"
import Navbar from "../component/navbar"
import Login from "../container/login"
import SchoolRegister from "../container/schoolRegister"
import Option from "../container/option"
import StudentRegister from "../container/studentRegister"
import AuthorRegister from "../container/authorRegister"

const Home = () => {
  const [cardType, setCardType] = useState(1)
  return (
    <>
      <Navbar />
      <div className="flex mt-10 justify-center">
        <div className="card-display w-2/4 bg-white rounded-lg mr-4"></div>
        <div className="w-1/4 ml-4">
          {cardType == 1 && <Login setCardType={setCardType} />}
          {cardType == 2 && <Option setCardType={setCardType} />}
          {cardType == 3 && <StudentRegister setCardType={setCardType} />}
          {cardType == 4 && <SchoolRegister setCardType={setCardType} />}
          {cardType == 5 && <AuthorRegister setCardType={setCardType} />}
        </div>
      </div>
    </>
  )
}

export default Home
