import React from "react"
import { Link } from "gatsby"
import "../style.css"

const Layout = props => {
  return (
    <>
      <header>
        <nav className="nav">
          <Link to="/"><h1 className="nav__logo">Home</h1></Link>
          <div className="nav__links">
            <Link to="/projects">Projects</Link>
            <a href="https://github.com/cindyztran">Github</a>
            <a href="https://www.linkedin.com/in/cindyztran/">LinkedIN</a>
          </div>
        </nav>
      </header>
      <main className="main">{props.children}</main>
      <footer className="footer">
      <a href="https://github.com/cindyztran">
        <img className="footer-image" src="https://img.icons8.com/material-outlined/24/000000/github.png" alt=""/>
      </a>
      <a href="https://www.linkedin.com/in/cindyztran/">
        <img className="footer-image" src="https://img.icons8.com/material-outlined/24/000000/linkedin--v1.png" alt=""/>
      </a>
      <a href="mailto:cindyztran@gmail.com">
        <img className="footer-image" src="https://img.icons8.com/material-rounded/24/000000/mail.png" alt=""/></a>
      </footer>
    </>
  )
}

export default Layout
