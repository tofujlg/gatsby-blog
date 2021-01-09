import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

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
        <ol>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <li>
                <Link to={`/blog/${node.fields.slug}`}>
                  <h2>{title}</h2>
                  <p>{node.fields.date}</p>
                  <p>{node.fields.tags}</p>
                </Link>
              </li>
            )
          })}
        </ol>
        {!isFirst && (
          <Link to={`/blog/${prevPage}`} rel="prev">
            ← Prev
          </Link>
        )}
        {!isLast && (
          <Link to={`/blog/${nextPage}`} rel="next">
            Next →
          </Link>
        )}
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
          }
        }
      }
    }
  }
`
