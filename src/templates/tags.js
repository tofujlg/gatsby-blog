import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { Twemoji } from "react-emoji-render"
import { AiOutlineTag } from "@react-icons/all-files/ai/AiOutlineTag"
import Layout from "../components/layout"
import Head from "../components/head"
import tagsStyles from "../styles/templates/tags.module.scss"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <Head title="tags" />
      <div className={tagsStyles.postsWrapper}>
        <h3>{tagHeader}</h3>
        <ol className={tagsStyles.posts}>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            const blogSlug = `/blog/${slug}`
            return (
              <li key={slug} className={tagsStyles.postCard}>
                <Link to={blogSlug}>
                  {node.frontmatter.hero ? (
                    <div className={tagsStyles.postIcon}>
                      <img
                        src={node.frontmatter.hero.publicURL}
                        alt="SVGicon"
                      />
                    </div>
                  ) : (
                    <Twemoji
                      className={tagsStyles.postCardEmoji}
                      svg
                      text={node.frontmatter.emoji || "📝"}
                    />
                  )}
                  <div className={tagsStyles.postCard__info}>
                    <h2>{title}</h2>
                    <h4>{node.frontmatter.date}</h4>
                    <div className={tagsStyles.postCard__tags}>
                      <p>
                        <AiOutlineTag size="2rem" />
                        {node.frontmatter.tags}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ol>
        {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
        <div className={tagsStyles.toCenter}>
          <Link to="/tags" className={tagsStyles.alltags}>
            Check All tags
          </Link>
        </div>
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
            hero {
              publicURL
            }
          }
        }
      }
    }
  }
`
