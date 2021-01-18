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
      <h3>このブログ</h3>
      <p>Gatsby製のブログです。</p>
      <p>主にWeb開発について書いていく予定です。</p>
      <p>このブログはGoogle Analyticsを利用しています。</p>
      <h3>Me: Kebab<Twemoji text="🥙" /> </h3>
      <p>フロントエンドよりのエンジニアです。</p>
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
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Gatsby</li>
      </ul>
      <h3>その他の特徴</h3>
      <h4>けっこうわかる言語</h4>
      <ul>
        <li>日本語</li>
        <li>English</li>
      </ul>
      <h4>ぼちぼちわかる言語</h4>
      <ul>
      <li>فارسی</li>
      <li>Deutsch</li>
      <h4>好きな映画</h4>
        <ul>
          <li>影の列車</li>
          <li>桜桃の味</li>
        </ul>
        <h4>好きな本</h4>
        <ul>
        <li>カラマーゾフの兄弟</li>
        <li>戦争と平和</li>
        <li>ズボンを履いた猫</li>
        <li></li>
      </ul>
      <h4>尊敬</h4>
      <ul>
      <li>アッバス・キアロスタミ</li>
      <li>ホセ・ルイス・ゲリン</li>
      <li>小津安二郎</li>
      <li>レフ・トルストイ</li>
      <li>ヒョードル・ドストエフスキー</li>
    </ul>
    </ul>
      </div>
      </div>
    </Layout>
  )
}

export default AboutPage
