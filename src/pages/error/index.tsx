import { useNavigate } from "react-router-dom"

const Error = () => {
  const navigate = useNavigate()
  return (
    <section>
      <div className="problem h-w-full flex-center">
        <div className="problem-page"> Error!</div>
        <input type="button" value="reload" onClick={() => navigate(0)} className="problem-btn" />
      </div>
    </section>
  )
}

export default Error
