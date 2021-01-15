import React from "react"
import { Link } from "gatsby"
import { Twemoji } from "react-emoji-render"
import bioStyles from "../styles/components/Bio.module.scss"

const Bio = () => {
  return (
    <div className={bioStyles.bioWrapper}>
      <div className={bioStyles.header}>
        <Twemoji svg text="👱‍♂️" />
        <h3>コーヘイ</h3>
        <p>フロントエンドエンジニア</p>
        <p>プログラミングと自然言語</p>
        <p>
          詳しくは<Link to="/about">こちら</Link>へ
        </p>
        <p>Twitter</p>
        <p>GitHub</p>
      </div>
      <div className={bioStyles.main}></div>
    </div>
  )
}

export default Bio
