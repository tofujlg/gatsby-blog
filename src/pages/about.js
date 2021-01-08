import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutIcon from "../imgages/about-icon.png"
import aboutStyles from './about.module.scss'


const AboutPage = () => {
  return (
    <Layout>
    <Head title="About" />
      <div className={aboutStyles.heading}>
      <img src={aboutIcon} alt="about-icon" />
      <h3>About Me</h3>
      </div>
      <div className={aboutStyles.profile}>
      <h3>プロフィール</h3>
      <p>いらっしゃいませ。フロンドエンドエンジニアのコウヘイです。</p>
      <p>このブログには僕がウェブ開発で勉強したことを書いています。</p>
      <p>僕にコンタクトするにはツイッターからお願いします。</p>
      <h3>スキル</h3>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Gatsby</li>
      </ul>
      <h3>SNS</h3>
      <p>Twitter</p>
      </div>
    </Layout>
  )
}

export default AboutPage
