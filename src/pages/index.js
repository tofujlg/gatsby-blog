import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import indexStyles from "../styles/pages/index.module.scss"
import Bio from "../components/Bio"
import IndexJsonLd from "../components/json/IndexJsonLd"
import PostList from "../components/postList"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 7
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              tags
              emoji
              hero {
                publicURL
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <Head title="Home" />
      <IndexJsonLd />
      <div className={indexStyles.indexWrapper}>
        <h3>Latest Posts</h3>
        <PostList edges={edges} />
        <div className={indexStyles.moreArticles}>
          <Link to="/blog/2">
            <p>More Posts</p>
          </Link>
        </div>
        <Bio />
      </div>
    </Layout>
  )
}
export default IndexPage
