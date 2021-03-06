import React from "react"
import { Link } from "react-scroll"
import tableOfContentsStyles from "../styles/components/tableOfContents.module.scss"

const TableOfContents = props => {
  return (
    <div className={tableOfContentsStyles.tableOfContents}>
      <h2 className={tableOfContentsStyles.title}>もくじ</h2>
      {props.headings.map(heading => (
        <Link
          key={heading.id}
          smooth={true}
          to={heading.id}
          duration={1000}
          //When using Gatsby Link
          //to={`/blog/${props.slug}/#${heading.id}`}
          className={tableOfContentsStyles.heading}
        >
          {heading.value}
        </Link>
      ))}
    </div>
  )
}

export default TableOfContents
