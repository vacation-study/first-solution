import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { RecoilRoot } from "recoil"
import Routes from "./components/routs/index.tsx"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <RouterProvider router={Routes} />
  </RecoilRoot>
)
