import { Link } from "react-router-dom"
import "./main.moudule.css"
const Main = () => {
  return (
    <section>
      <article>
        <fieldset className="main-box">
          <legend className="main-title">
            <h1> study - assignment </h1>
          </legend>
          <Link to="/assignment" className="s-button">
            시작하기
          </Link>
        </fieldset>
      </article>
    </section>
  )
}

export default Main
