import React from "react"
import { Link } from "gatsby"
import { Twemoji } from "react-emoji-render"
import { RiGithubLine } from "@react-icons/all-files/ri/RiGithubLine"
import { RiTwitterLine } from "@react-icons/all-files/ri/RiTwitterLine"
import bioStyles from "../styles/components/Bio.module.scss"

const Bio = () => {
  return (
    <div className={bioStyles.bioWrapper}>
      <div className={bioStyles.header}>
        <Twemoji className={bioStyles.emoji} svg text="🥙" />
        <h3>Kebab</h3>
      </div>
      <div className={bioStyles.main}>
        <p>FrontendよりのEngineer</p>
        <p>
          詳しくは<Link to="/about">こちら</Link>へ
        </p>
        <div className={bioStyles.snsWrapper}>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/KoheiProgrammi1"
          >
            <RiTwitterLine size="3rem" />
          </a>
          <a rel="noreferrer" target="_blank" href="https://github.com/tofujlg">
            <RiGithubLine size="3rem" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Bio
