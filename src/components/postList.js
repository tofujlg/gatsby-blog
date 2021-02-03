import React from "react"
import { Link } from "gatsby"
import { Twemoji } from "react-emoji-render"
import { AiOutlineTag } from "@react-icons/all-files/ai/AiOutlineTag"
import indexStyles from "../styles/pages/index.module.scss"

const PostList = ({ edges }) => {
  return (
    <ol className={indexStyles.posts}>
      {edges.map(edge => {
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
  )
}

export default PostList
