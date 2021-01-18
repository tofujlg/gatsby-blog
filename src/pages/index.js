import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Twemoji } from "react-emoji-render"
import { AiOutlineTag } from "@react-icons/all-files/ai/AiOutlineTag"
import Layout from "../components/layout"
import Head from "../components/head"
import indexStyles from "../styles/pages/index.module.scss"
import Bio from "../components/Bio"

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
  return (
    <Layout>
      <Head title="Home" />
      <div className={indexStyles.indexWrapper}>
        <div className={indexStyles.heading}>
          <h3>Latest Posts</h3>
        </div>
        <ol className={indexStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li key={edge.node.fields.slug} className={indexStyles.postCard}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  {edge.node.frontmatter.hero ? (
                    <div className={indexStyles.postIcon}>
                      <img
                        src={edge.node.frontmatter.hero.publicURL}
                        alt="SVGicon"
                      />
                    </div>
                  ) : (
                    <Twemoji
                      className={indexStyles.postCardEmoji}
                      svg
                      text={edge.node.frontmatter.emoji || "📝"}
                    />
                  )}
                  <div className={indexStyles.postCard__info}>
                    <h2>{edge.node.frontmatter.title}</h2>
                    <h4>{edge.node.frontmatter.date}</h4>
                    <div className={indexStyles.postCard__tags}>
                      <p>
                        <AiOutlineTag size="2rem" />
                        {edge.node.frontmatter.tags}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ol>
        <ul className={indexStyles.moreArticles}>
          {" "}
          <li></li>
          <li>
            <Link to="/blog/2">
              <p>→</p>
            </Link>
          </li>
        </ul>
        <Bio />
      </div>
    </Layout>
  )
}

export default IndexPage
