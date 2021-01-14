import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { Twemoji } from "react-emoji-render"
import Layout from "../components/layout"
import tagsStyles from "./tags.module.scss"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <div className={tagsStyles.posts}>
        <h3>{tagHeader}</h3>
        <ol>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            const blogSlug = `/blog/${slug}`
            return (
              <li key={slug} className={tagsStyles.post}>
                <Link to={blogSlug}>
                  <h2>{title}</h2>
                  <Twemoji svg text={node.frontmatter.emoji || "📝"} />
                  <p>{node.frontmatter.date}</p>
                  <p>{node.frontmatter.tags}</p>
                </Link>
              </li>
            )
          })}
        </ol>
        {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
        <Link to="/tags" className={tagsStyles.alltags}>
          Check All tags
        </Link>
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
