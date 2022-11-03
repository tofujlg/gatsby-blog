import React from "react"
import { RiGithubLine } from "@react-icons/all-files/ri/RiGithubLine"
import { RiTwitterLine } from "@react-icons/all-files/ri/RiTwitterLine"
import { Twemoji } from "react-emoji-render"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyles from '../styles/pages/about.module.scss'


const AboutPage = () => {
  return (
    <Layout>
    <Head title="About" />
      <div className={aboutStyles.aboutWrapper}>
      <div className={aboutStyles.heading}>
        <h3>このブログについて</h3>
      </div>
      <div className={aboutStyles.profile}>
      <h3>Blog.author = Kebab<Twemoji text="🥙" /> </h3>
      <p>フロントエンドよりのエンジニアです。</p>
     <a href="https://tofujlg.github.io./" target="_blank" rel="noreferrer">詳しくはこちらのレジュメをご覧ください</a>
      <p>ご連絡はTwitterのDMからお願いします。</p>
      <br/>
      <div className={aboutStyles.snsWrapper}>
      <a
      rel="noreferrer"
      target="_blank"
      href="https://twitter.com/KoheiProgrammi1"
    >
      <RiTwitterLine size="4rem" />
    </a>
    <a rel="noreferrer" target="_blank" href="https://github.com/tofujlg">
      <RiGithubLine size="4rem" />
    </a>
      </div>
      <h3>ぼくの技術スタック</h3>
      <p>2020年より、Gatsbyに魅了されてMERNstackの学習を開始しました。</p>
      <br />
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Gatsby</li>
        <li>Node.js(勉強中）</li>
      </ul>
      <h3>その他</h3>
      <p>いままで4つの（自然）言語を真剣に学んできました。</p>
      <ul>
        <li>日本語</li>
        <li>English</li>
        <li>فارسی (ペルシア語)</li>
        <li>Deutsch (ドイツ語) </li>
      </ul>
      <br />
      <p>どちらもしばらくの間は訳がわからなくても淡々とやり続けるのが大切なところなど、</p>
      <p>言語学習の経験はプログラミング学習に活きているとおもいます。</p>
      <p>基本的に学習するのが好きなのでプログラミングの学習は楽しくやってます。たまにエラーで吐きそうになりますが。</p>
      <br />

      <h3>このブログ</h3>
      <p>Gatsby + Netlify製のブログです。</p>
      <p>画面右上の白いボタンでダークモード適応できます。</p>
      <br />
      <p>このブログはGoogle Analyticsを利用しています。</p>
      </div>
      </div>
    </Layout>
  )
}

export default AboutPage
