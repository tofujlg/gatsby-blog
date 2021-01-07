import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>K-log</h1>
      <h2>Blog Posts</h2>
      <p>
        Check out<Link to="/blog">My blog posts</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
