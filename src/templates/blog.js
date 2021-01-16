import React from "react"
import { Link, graphql } from "gatsby"
//import Image from "gatsby-image"
import { Twemoji } from "react-emoji-render"
import _ from "lodash"
import "prismjs/themes/prism-tomorrow.css"
import Layout from "../components/layout"
import Head from "../components/head"
import TableOfContents from "../components/tableOfContents"
import Bio from "../components/Bio"
import blogStyles from "../styles/templates/blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        tags
        emoji
      }
      html
      fields {
        slug
      }
      headings {
        id
        value
      }
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <div className={blogStyles.postWrapper}>
        <Twemoji
          className={blogStyles.emoji}
          svg
          text={props.data.markdownRemark.frontmatter.emoji || "📝"}
        />
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
        <div className={blogStyles.textWrapper}>
          <div
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
            className={blogStyles.blogPost}
          ></div>
          <div className={blogStyles.tocWrapper}>
            <TableOfContents
              className={blogStyles.toc}
              headings={props.data.markdownRemark.headings}
            />
          </div>
        </div>
      </div>
      <ul className={blogStyles.prevNext}>
        <li>
          {props.pageContext.prev && (
            <Link to={`/blog/${props.pageContext.prev.fields.slug}`}>
              <p>←Next Post</p>
              <h3>{props.pageContext.prev.frontmatter.title}</h3>
            </Link>
          )}
        </li>
        <li>
          {props.pageContext.next && (
            <Link to={`/blog/${props.pageContext.next.fields.slug}`}>
              <p>Previous Post→</p>
              <h3>{props.pageContext.next.frontmatter.title}</h3>
            </Link>
          )}
        </li>
      </ul>
      <Bio />
    </Layout>
  )
}

export default Blog
