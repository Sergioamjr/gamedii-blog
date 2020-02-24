/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { Container, grid, Row, linkStyle, mgBottom } from "../../design"
import BlackAndWhite from "./../../assets/black-and-white.png"

const footer = css`
  padding: 40px 0;
  background: #212121;
  color: #fff;
`

const GamediiLogo = css`
  background-image: url(${BlackAndWhite});
  font-size: 0;
  width: 170px;
  height: 51px;
  background-size: cover;
  margin-bottom: 20px;
`

const Footer = () => {
  return (
    <div css={footer}>
      <Container>
        <div css={grid}>
          <Row sm={50} md={70}>
            <p className="font-1" css={GamediiLogo}>
              Gamedii
            </p>
            <p className="font-1" css={mgBottom}>
              GAMEDII - Grupo de Assistência Multiprofissional em Estomias e
              Doença Inflamatória Intestinal
            </p>
          </Row>
          <Row sm={50} md={30}>
            <p className="font-1" css={mgBottom}>
              Nos siga nas redes sociais:
            </p>
            <ul>
              <li>
                <a css={linkStyle} href="/">
                  Facebook
                </a>
              </li>
              <li>
                <a css={linkStyle} href="/">
                  Twitter
                </a>
              </li>
            </ul>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Footer
