import { Link } from "react-router-dom"
import "./layout.moudule.css"
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="header full-width pos-fix bg-blue">
        {[
          { to: "/", text: "main" },
          { to: "/assignment", text: "assignment" }
        ].map(item => (
          <Link to={item.to} key={item.to} className="white-font">
            {item.text}
          </Link>
        ))}
      </header>
      <main className="main full-width jus-center">{children}</main>
      <footer className="footer white-font full-width pos-fix jus-center bg-blue">footer</footer>
    </>
  )
}

export default Layout
