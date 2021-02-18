import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
  `)
  return (
    <Helmet
      title={`${title} | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          property: `og:image`,
          content: `${data.site.siteMetadata.siteUrl}/images/tube.png`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: `${data.site.siteMetadata.description}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    />
  )
}

Head.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``,
}

// Head.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
//   image: PropTypes.string, //追加
//   location: PropTypes.string, //なければ追加
// }

export default Head
