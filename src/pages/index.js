/* eslint-disable quotes */
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { graphql } from "gatsby"
import Header from "./../components/Header"
import { Container, pageTitle, grid, Row } from "./../design"
import BlogCard from "./../components/BlogCard"

const footer = css`
  padding: 40px 0;
  text-align: center;
  background: #212121;
  color: #fff;
`

const input = css`
  padding: 0 12px;
  width: calc(100% - 123px);
  height: 40px;
  border-radius: 4px 0 0 4px;
  border: 0;
  max-width: 400px;
`

const button = css`
  background: #41a7d5;
  border: 0;
  padding: 0 24px;
  height: 40px;
  border-radius: 0 4px 4px 0;
  color: #fff;
  font-size: 16px;
  position: relative;
  top: 1px;
`

const Home = props => {
  const data = props.data.allWordpressPost.edges
  return (
    <div className="App">
      <Header />
      <Container>
        <h2 css={pageTitle}>Publicações</h2>
        <div css={grid}>
          {data.map(({ node }) => {
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
      </Container>
      <div css={footer}>
        <Container>
          <p
            css={css`
              margin-bottom: 16px;
            `}
          >
            Cadastre seu e-mail e fique por dentro das novidades.
          </p>
          <input css={input} type="text" placeholder="Seu e-mail" />
          <button css={button}>Cadastrar</button>
        </Container>
      </div>
    </div>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          title
          path
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
