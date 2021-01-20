import React from "react"
import { graphql, Link } from "gatsby"
import { Twemoji } from "react-emoji-render"
import { IoMdArrowRoundBack } from "@react-icons/all-files/io/IoMdArrowRoundBack"
import { IoMdArrowRoundForward } from "@react-icons/all-files/io/IoMdArrowRoundForward"
import Layout from "../components/layout"
import blogIndexStyles from "../styles/templates/blog-list.module.scss"

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
        <div className={blogIndexStyles.postsWrapper}>
          <h3>Blog Posts</h3>
          <ol className={blogIndexStyles.posts}>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <li key={node.fields.slug} className={blogIndexStyles.postCard}>
                  <Link to={`/blog/${node.fields.slug}`}>
                    {node.frontmatter.hero ? (
                      <div className={blogIndexStyles.postIcon}>
                        <img
                          src={node.frontmatter.hero.publicURL}
                          alt="SVGicon"
                        />
                      </div>
                    ) : (
                      <Twemoji
                        className={blogIndexStyles.postCardEmoji}
                        svg
                        text={node.frontmatter.emoji || "📝"}
                      />
                    )}
                    <div className={blogIndexStyles.postCard__info}>
                      <h2>{title}</h2>
                      <h4>{node.frontmatter.date}</h4>
                      <p>{node.frontmatter.tags}</p>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ol>

          <ul className={blogIndexStyles.pagination}>
            <li>
              {!isFirst && (
                <Link to={`/blog/${prevPage}`} rel="prev">
                  <IoMdArrowRoundBack size="4rem" />
                </Link>
              )}
            </li>
            <li>
              {!isLast && (
                <Link to={`/blog/${nextPage}`} rel="next">
                  <IoMdArrowRoundForward size="4rem" />
                </Link>
              )}
            </li>
          </ul>
        </div>
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
            hero {
              publicURL
            }
          }
        }
      }
    }
  }
`
