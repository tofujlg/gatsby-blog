import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

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
          <img
            src="/static/aab4da6911d4e45342c4e7d8638881de/logo.png"
            alt="logo"
            className={headerStyles.img}
          />
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              <img
                src="/static/50934264b068c36ad33b3c245446f882/about-icon.png"
                alt="about-icon"
              />
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/categories"
            >
              <img
                src="/static/799acfe67a317ab4a4ab5f9d9fc22ddb/categories-icon.png"
                alt="categories-icon"
              />
              Categories
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
