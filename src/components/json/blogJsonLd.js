import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const PostJsonLD = ({ title, date, url }) => {
  return (
    <StaticQuery
      query={jsonLdPostQuery}
      render={data => {
        const { siteUrl, author, description } = data.site.siteMetadata
        const dateFormatted = date.replace(/\./g, "-")
        const publisher = {
          "@type": "Organization",
          name: author,
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/images/tube.png`,
            width: 150,
            height: 150,
          },
        }
        const authorData = {
          "@type": "Person",
          name: author,
          image: `${siteUrl}/images/tube.png`,
        }
        const jsonLd = {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          headline: title,
          image: `${siteUrl}/images/tube.png`,
          editor: author,
          url: url,
          datePublished: dateFormatted,
          dateCreated: dateFormatted,
          dateModified: dateFormatted,
          description: description,
          author: authorData,
          publisher,
        }

        //bread crumbs
        const jsonBreadCrumbs = {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": siteUrl,
                name: "HOME",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@id": url,
                name: title,
              },
            },
          ],
        }
        return (
          <Helmet>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            <script type="application/ld+json">
              {JSON.stringify(jsonBreadCrumbs)}
            </script>
          </Helmet>
        )
      }}
    />
  )
}

export default PostJsonLD

const jsonLdPostQuery = graphql`
  query JsonLdPostQuery {
    site {
      siteMetadata {
        siteUrl
        author
        description
      }
    }
  }
`
