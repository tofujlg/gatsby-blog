import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import indexStyles from "./index.module.scss"
import blogIcon from "../imgages/blog-icon.png"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date
              tags
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
      <div className={indexStyles.heading}>
        <img src={blogIcon} alt="blog-icon" />
        <h2>Blog Posts</h2>
      </div>

      <ol className={indexStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li className={indexStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
                <p>{edge.node.frontmatter.tags}</p>
              </Link>
            </li>
          )
        })}
      </ol>
      <p>ここには最新10記事ぐらいにして下から/blogへ</p>
      <Link to="/blog">Read More</Link>
    </Layout>
  )
}

export default IndexPage
