import React from "react"
import { Link } from "gatsby"
import { Twemoji } from "react-emoji-render"
import { AiOutlineTag } from "@react-icons/all-files/ai/AiOutlineTag"
import postListStyles from "../styles/components/postList.module.scss"

const PostList = ({ edges }) => {
  return (
    <ol className={postListStyles.posts}>
      {edges.map(edge => {
        return (
          <li key={edge.node.fields.slug} className={postListStyles.postCard}>
            <Link to={`/blog/${edge.node.fields.slug}`}>
              {edge.node.frontmatter.hero ? (
                <div className={postListStyles.postIcon}>
                  <img
                    src={edge.node.frontmatter.hero.publicURL}
                    alt="SVGicon"
                  />
                </div>
              ) : (
                <Twemoji
                  className={postListStyles.postCardEmoji}
                  svg
                  text={edge.node.frontmatter.emoji || "📝"}
                />
              )}
              <div className={postListStyles.postCard__info}>
                <h2>{edge.node.frontmatter.title}</h2>
                <h4>{edge.node.frontmatter.date}</h4>
                <div className={postListStyles.postCard__tags}>
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
