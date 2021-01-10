import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"
import DarkmodeToggle from "./darkModeToggle"
import logo from "../imgages/logo.png"
import aboutIcon from "../imgages/about-icon.png"
import categoriesIcon from "../imgages/categories-icon.png"

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
      <h1>
        <Link className={headerStyles.title} to="/">
          <img src={logo} alt="logo" className={headerStyles.img} />
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.about}>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              <img src={aboutIcon} alt="about-icon" />
              About
            </Link>
          </li>
          <li className={headerStyles.tags}>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/tags"
            >
              <img src={categoriesIcon} alt="categories-icon" />
              Tags
            </Link>
          </li>
          <li>
            <DarkmodeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
