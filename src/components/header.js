import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"
import DarkmodeToggle from "./darkModeToggle"
//import logo from "../imgages/logo.png"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <Link className={headerStyles.title} to="/">
        {/*
<img src={logo} alt="logo" className={headerStyles.img} />*/}
        {data.site.siteMetadata.title}
      </Link>
      <nav>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.about}>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className={headerStyles.tags}>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/tags"
            >
              Tags
            </Link>
          </li>
          <li className={headerStyles.toggle}>
            <DarkmodeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
