import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title, description, lang, meta, schemaMarkup }) => {
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
      htmlAttributes={{
        lang,
      }}
      title={`${title} | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: `${data.site.siteMetadata.description}`,
        },
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
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: `${data.site.siteMetadata.description}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `thumbnail`,
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
    >
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  )
}

Head.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``,
}

export default Head
