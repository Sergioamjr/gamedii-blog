/* eslint-disable quotes */
/** @jsx jsx */
import { jsx } from "@emotion/core"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { grid, Row, pageTitle } from "./../design"
import BlogCard from "./../components/BlogCard"
import Wrapper from "../components/Wrapper"
import { orderByDate } from "./../utils"

const Home = props => {
  const data = props.data.allWordpressPost.edges

  return (
    <Wrapper>
      <h2 css={pageTitle} data-testid="page-title">
        Publicações
      </h2>
      <div css={grid}>
        {orderByDate(data).map(({ node }) => {
          const { title, id, path, excerpt, featured_media } = node
          const thumbnail =
            featured_media.localFile.childImageSharp.original.src
          return (
            <Row sm={50} md={33} key={id}>
              <BlogCard
                thumbnail={thumbnail}
                path={path}
                title={title}
                excerpt={excerpt}
              />
            </Row>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default Home

Home.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.arrayOf({
        node: PropTypes.shape({
          title: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          excerpt: PropTypes.string.isRequired,
          featured_media: PropTypes.shape({
            localFile: PropTypes.shape({
              childImageSharp: PropTypes.shape({
                original: PropTypes.shape({
                  src: PropTypes.string.isRequired,
                }),
              }),
            }),
          }),
        }),
      }),
    }),
  }),
}

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          title
          path
          date
          excerpt
          featured_media {
            alt_text
            caption
            localFile {
              childImageSharp {
                original {
                  width
                  height
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
