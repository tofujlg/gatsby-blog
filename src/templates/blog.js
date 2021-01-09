import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import blogStyles from "./blog.module.scss"
import _ from "lodash"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        tags
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
        <div className={blogStyles.tagsWrapper}>
          {props.data.markdownRemark.frontmatter.tags.map(tag => {
            return (
              <Link
                className={blogStyles.tag}
                to={`/tags/${_.kebabCase(tag)}/`}
              >
                {tag}
              </Link>
            )
          })}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          className={blogStyles.blogPost}
        ></div>
        {console.log(props.pageContext.prev)}
        {console.log(props.pageContext.next)}
      </div>
      <div>
        {props.pageContext.prev && (
          <Link to={`/blog/${props.pageContext.prev.fields.slug}`}>
            {props.pageContext.prev.frontmatter.title}
          </Link>
        )}
        <br />
        {props.pageContext.next && (
          <Link to={`/blog/${props.pageContext.next.fields.slug}`}>
            {props.pageContext.next.frontmatter.title}
          </Link>
        )}
      </div>
    </Layout>
  )
}

export default Blog
