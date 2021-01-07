import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import blogStyles from "./blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <div className={blogStyles.post}>
        <Head title={props.data.markdownRemark.frontmatter.title} />
        <h1 className={blogStyles.title}>
          {props.data.markdownRemark.frontmatter.title}
        </h1>
        <p className={blogStyles.date}>
          {props.data.markdownRemark.frontmatter.date}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          className={blogStyles.blogPost}
        ></div>
      </div>
    </Layout>
  )
}

export default Blog
