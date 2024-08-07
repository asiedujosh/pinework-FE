import "./App.css"
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import EditQuestion from "./pages/editQuestion"

const SchoolHome = React.lazy(() => import("./pages/schoolHome"))
const SchoolBook = React.lazy(() => import("./pages/schoolBook"))
const SchoolDashboard = React.lazy(() => import("./pages/schoolDashboard"))
const SchoolWork = React.lazy(() => import("./pages/schoolWork"))
const SchoolWorkDashboard = React.lazy(() =>
  import("./pages/schoolWorkDashboard")
)
const AuthorDashboard = React.lazy(() => import("./pages/authorDashboard"))
const StudentDashboard = React.lazy(() => import("./pages/studentDashboard"))
const AdminDashboard = React.lazy(() => import("./pages/adminDashboard"))
const AdminHome = React.lazy(() => import("./pages/adminHome"))
const StudentHome = React.lazy(() => import("./pages/studentHome"))
const EditBook = React.lazy(() => import("./pages/editBook"))
const AuthorHome = React.lazy(() => import("./pages/authorHome"))
const AuthorBooks = React.lazy(() => import("./pages/authorBooks"))
const AuthorSubscription = React.lazy(() =>
  import("./pages/authorSubscription")
)
const AuthorComment = React.lazy(() => import("./pages/authorComment"))
const AuthorPublish = React.lazy(() => import("./pages/authorPublishBook"))
const CreateBook = React.lazy(() => import("./pages/createBook"))
const CreateQuestion = React.lazy(() => import("./pages/createQuestion"))
const CreateBookType = React.lazy(() => import("./pages/createBookType"))
const CreateClass = React.lazy(() => import("./pages/createClass"))
const CreatePage = React.lazy(() => import("./pages/createPage"))
const EditPage = React.lazy(() => import("./pages/editPage"))
const BookPage = React.lazy(() => import("./pages/bookPage"))
const Question = React.lazy(() => import("./pages/questions"))

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/schoolDashboard"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <SchoolDashboard />
            </React.Suspense>
          }
        >
          <Route
            index
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <SchoolHome />
              </React.Suspense>
            }
          />
          <Route
            path="book"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <SchoolBook />
              </React.Suspense>
            }
          />
          <Route
            path="works"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <SchoolWork />
              </React.Suspense>
            }
          />
          <Route
            path="works/workDashboard"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <SchoolWorkDashboard />
              </React.Suspense>
            }
          />
        </Route>
        <Route
          path="/authorDashboard"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <AuthorDashboard />
            </React.Suspense>
          }
        >
          <Route
            index
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AuthorHome />
              </React.Suspense>
            }
          />
          <Route
            path="page/:id/edit/:book/publish/:status"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <BookPage />
              </React.Suspense>
            }
          />
          <Route
            path="editPage/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditPage />
              </React.Suspense>
            }
          />
          <Route
            path="createBook"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <CreateBook />
              </React.Suspense>
            }
          />
          <Route
            path="questions/book/:bookId/page/:pageId/status/:status"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Question />
              </React.Suspense>
            }
          />
          <Route
            path="editQuestion/:questionId/page/:pageId/book/:bookId"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditQuestion />
              </React.Suspense>
            }
          />
          <Route
            path="addPage/:id/createPage/:book"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <CreatePage />
              </React.Suspense>
            }
          />
          <Route
            path="createQuestion/:createBookId/page/:pageId/author/:authorId"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <CreateQuestion />
              </React.Suspense>
            }
          />
          <Route
            path="authorBooks"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AuthorBooks />
              </React.Suspense>
            }
          />
          <Route
            path="authorPublish"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AuthorPublish />
              </React.Suspense>
            }
          />
          <Route
            path="authorSubscription"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AuthorSubscription />
              </React.Suspense>
            }
          />
          <Route
            path="authorComment"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AuthorComment />
              </React.Suspense>
            }
          />
          <Route
            path="editBook/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditBook />
              </React.Suspense>
            }
          />
        </Route>
        <Route
          path="/adminDashboard"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <AdminDashboard />
            </React.Suspense>
          }
        >
          <Route
            index
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AdminHome />
              </React.Suspense>
            }
          />

          <Route
            path="createClass"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <CreateClass />
              </React.Suspense>
            }
          />

          <Route
            path="createSubject"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <CreateBookType />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
