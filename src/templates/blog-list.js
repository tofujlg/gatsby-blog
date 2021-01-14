import React from "react"
import { graphql, Link } from "gatsby"
//import Image from "gatsby-image"
import { Twemoji } from "react-emoji-render"
import Layout from "../components/layout"
import blogIndexStyles from "./blog-list.module.scss"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    // Vars for pagination
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout>
        <div className={blogIndexStyles.postsList}>
          <h3>Blog Posts</h3>
          <ol>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <li className={blogIndexStyles.postCard}>
                  <Link to={`/blog/${node.fields.slug}`}>
                    <Twemoji
                      className={blogIndexStyles.postCardEmoji}
                      svg
                      text={node.frontmatter.emoji || "📝"}
                    />
                    <div className={blogIndexStyles.postCardContent}>
                      <h2>{title}</h2>
                      <h4>{node.frontmatter.date}</h4>
                      <p>{node.frontmatter.tags}</p>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ol>
        </div>
        <ul className={blogIndexStyles.pagination}>
          <li>
            {!isFirst && (
              <Link to={`/blog/${prevPage}`} rel="prev">
                ← Prev
              </Link>
            )}
          </li>
          <li>
            {!isLast && (
              <Link to={`/blog/${nextPage}`} rel="next">
                Next →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            tags
            emoji
          }
        }
      }
    }
  }
`
