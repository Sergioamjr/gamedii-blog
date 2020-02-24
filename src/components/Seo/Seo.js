/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, title, thumbnail, origin, href }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const websiteTitle = title || site.siteMetadata.title

  return (
    <Helmet defaultTitle={websiteTitle} titleTemplate={`%s | ${websiteTitle}`}>
      <html lang="pt-br" />
      <meta property="og:title" content={websiteTitle} />
      <meta name="description" content={metaDescription} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={href} />

      {thumbnail && (
        <meta property="og:image" content={`${origin}${thumbnail}`} />
      )}
      {thumbnail && (
        <meta property="witter:image" content={`${origin}${thumbnail}`} />
      )}

      <meta property="og:site_name" content={site.siteMetadata.title} />
    </Helmet>
  )
}

SEO.defaultProps = {
  description: "",
  thumbnail: "",
}

SEO.propTypes = {
  href: PropTypes.string,
  origin: PropTypes.string,
  thumbnail: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default SEO
