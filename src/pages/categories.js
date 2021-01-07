import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import categoriesIcon from "../imgages/categories-icon.png"
import categoriesStyles from "./categories.module.scss"

const BlogPage = () => {
  return (
    <Layout>
      <Head title="Categories" />
      <div className={categoriesStyles.heading}>
        <img src={categoriesIcon} alt="categoriesIcon" />
        <h1>Categories Page</h1>
      </div>
      <p>このページは現在追加中です。</p>
      <p>しばらくお待ちください。</p>
    </Layout>
  )
}

export default BlogPage
