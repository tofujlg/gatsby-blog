import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import DarkmodeStyles from "./darkModeToggle.module.scss"

class DarkmodeToggle extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className={DarkmodeStyles.suicchi}>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />
            <div>
              <span></span>
            </div>
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default DarkmodeToggle
