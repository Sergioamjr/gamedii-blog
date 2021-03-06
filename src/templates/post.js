/* eslint-disable quotes */
/** @jsx jsx */
import { jsx } from "@emotion/core"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import { pageTitle, text, linkStyle, xLargeMgBottom } from "./../design"
import Share from "../components/Share"
import Wrapper from "../components/Wrapper"
import { returnLocationProperty } from "../utils"
import Disqus from "../components/Discus"
import Recommendation from "../components/Recommendation"

const Single = ({ data }) => {
  const {
    wordpressPost: { title, content, featured_media, id, excerpt },
  } = data
  const thumbnail = featured_media.localFile.childImageSharp.original.src

  const href = returnLocationProperty("href")

  return (
    <Wrapper small thumbnail={thumbnail} title={title} description={excerpt}>
      <div>
        <Link css={linkStyle} to="/">
          Voltar
        </Link>
        <article className="post-content" css={xLargeMgBottom}>
          <h2 data-testid="article-title" css={pageTitle}>
            {title}
          </h2>
          <Share title={title} link={href} />
          <img src={thumbnail} />
          <div
            data-testid="article-content"
            css={text}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          {false && <Disqus url={href} id={id} />}
        </article>
        <Recommendation itens={data.allWordpressPost.edges} />
      </div>
    </Wrapper>
  )
}

export default Single

Single.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.arrayOf({
        node: PropTypes.shape({
          title: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
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
    wordpressPost: PropTypes.shape({
      content: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
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
}

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      content
      excerpt
      date(formatString: "MM-DD-YYYY")
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
    allWordpressPost(limit: 3, filter: { id: { ne: $id } }) {
      edges {
        node {
          id
          title
          path
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
