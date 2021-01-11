import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyles from './about.module.scss'


const AboutPage = () => {
  return (
    <Layout>
    <Head title="About" />
      <div className={aboutStyles.heading}>
      <h3>About Me</h3>
      </div>
      <div className={aboutStyles.profile}>
      <h3>Hi I'm Kohei, web developer.</h3>
      <p>ここブログには僕がウェブ開発で勉強したことを書いています。</p>
      <p>ご連絡はツイッターのDMからお願いします。</p>
      <h3>技術スタック</h3>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Gatsby</li>
      </ul>
      <h3>SNS</h3>
      <a rel="noreferrer" target="_blank" href="https://twitter.com/KoheiProgrammi1">Twitter</a>
      </div>
    </Layout>
  )
}

export default AboutPage
