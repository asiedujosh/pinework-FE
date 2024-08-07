import React from "react"
import ReactDOM from "react-dom/client"
import AuthApiDataProvider from "./contextApi/auth/authContextApi.jsx"
import AuthorApiDataProvider from "./contextApi/author/authorContextApi.jsx"
import QuestionApiDataProvider from "./contextApi/question/questionContextApi.jsx"
import CreationApiDataProvider from "./contextApi/creation/creationContextApi.jsx"
import ClassesApiDataProvider from "./contextApi/classes/classesContextApi.jsx"
import BookTypeApiDataProvider from "./contextApi/bookType/bookTypeContextApi.jsx"
import BookPageApiDataProvider from "./contextApi/bookPage/bookPageContextApi.jsx"
import SubscriptionApiDataProvider from "./contextApi/subscription/subscriptionContextApi.jsx"
import CommentApiDataProvider from "./contextApi/comment/commentContextApi.jsx"
import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthApiDataProvider>
      <AuthorApiDataProvider>
        <SubscriptionApiDataProvider>
          <CommentApiDataProvider>
            <QuestionApiDataProvider>
              <BookPageApiDataProvider>
                <CreationApiDataProvider>
                  <BookTypeApiDataProvider>
                    <ClassesApiDataProvider>
                      <App />
                    </ClassesApiDataProvider>
                  </BookTypeApiDataProvider>
                </CreationApiDataProvider>
              </BookPageApiDataProvider>
            </QuestionApiDataProvider>
          </CommentApiDataProvider>
        </SubscriptionApiDataProvider>
      </AuthorApiDataProvider>
    </AuthApiDataProvider>
  </React.StrictMode>
)
