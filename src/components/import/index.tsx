import Loading from "@/pages/loading"
import { Suspense } from "react"

const importComponent = (Components: React.ComponentType) => {
  const WithLoading = () => {
    return (
      <Suspense fallback={<Loading />}>
        <Components />
      </Suspense>
    )
  }
  return <WithLoading />
}

export default importComponent
