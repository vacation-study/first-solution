import { useNavigate } from "react-router-dom"
const NotPage = () => {
  const navigate = useNavigate()
  return (
    <section>
      <div className="problem h-w-full flex-center">
        <div className="problem-page"> 404 NotPage</div>
        <input type="button" value="main" onClick={() => navigate("/")} className="problem-btn" />
      </div>
    </section>
  )
}

export default NotPage
