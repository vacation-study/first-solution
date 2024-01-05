import { createBrowserRouter } from "react-router-dom"
import App from "@/App"
import Main from "@main"
import { lazy } from "react"
import importComponent from "../import"
const NotPage = lazy(() => import("@not"))
const Error = lazy(() => import("@error"))
const Assignment = lazy(() => import("@assignment"))

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: importComponent(NotPage),
    children: [
      {
        path: "",
        element: <Main />,
        errorElement: importComponent(Error)
      },
      {
        path: "/assignment",
        element: importComponent(Assignment),
        errorElement: importComponent(Error)
      }
    ]
  }
])

export default Routes
