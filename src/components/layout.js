import React from "react"
import Header from "./header"
import Footer from "./footer"
import Bio from "./Bio"
import "../styles/index.scss"
import layoutStyles from "../styles/components/layout.module.scss"

const Layout = props => {
  return (
    <div>
      <Header />
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>{props.children}</div>
      </div>
      <Bio />
      <Footer />
    </div>
  )
}

export default Layout
