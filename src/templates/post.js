/* eslint-disable quotes */
/** @jsx jsx */
import { jsx } from "@emotion/core"
import { graphql, Link } from "gatsby"
import Header from "./../components/Header"
import {
  Container,
  pageTitle,
  largeMgBottom,
  text,
  linkStyle,
  xLargeMgBottom,
} from "./../design"

const Single = ({ data }) => {
  const {
    wordpressPost: { title, content, featured_media },
  } = data
  const thumbnail = featured_media.localFile.childImageSharp.original.src

  return (
    <div className="App">
      <Header />
      <Container id="conteudo" small>
        <Link css={linkStyle} to="/">
          Voltar
        </Link>
        <article className="post-content" css={xLargeMgBottom}>
          <h2 css={pageTitle}>{title}</h2>
          <img src={thumbnail} />
          <div css={text} dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </Container>
    </div>
  )
}

export default Single

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
  }
`
