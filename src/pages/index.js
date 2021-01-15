import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Twemoji } from "react-emoji-render"
import Layout from "../components/layout"
import Head from "../components/head"
import indexStyles from "../styles/index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 5
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              tags
              emoji
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Home" />
      <div className={indexStyles.indexPosts}>
        <div className={indexStyles.heading}>
          <h3>Blog Posts</h3>
        </div>
        <ol className={indexStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className={indexStyles.postCard}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <Twemoji
                    className={indexStyles.postCardEmoji}
                    svg
                    text={edge.node.frontmatter.emoji || "📝"}
                  />
                  <div className={indexStyles.postCardContent}>
                    <h2>{edge.node.frontmatter.title}</h2>
                    <p>{edge.node.frontmatter.date}</p>
                    <p>{edge.node.frontmatter.tags}</p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ol>
        <Link to="/blog/2" className={indexStyles.moreArticles}>
          More Articles
        </Link>
      </div>
    </Layout>
  )
}

export default IndexPage
