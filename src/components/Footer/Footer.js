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
              Blog destinado para pacientes portadores de Doenças Inflamatórias
              Intestinais, escrito por Sérgio Júnior, também autor do blog{" "}
              <a
                css={linkStyle}
                rel="noopener noreferrer"
                href="http://diariodeumcrohnista.com.br/"
                target="_blank"
              >
                Diário de um Crohnista
              </a>
              , com suporte da GAMEDII - Grupo de Assistência Multiprofissional
              em Estomias e Doença Inflamatória Intestinal da cidade de
              Guarulhos.
            </p>
          </Row>
          <Row sm={50} md={30}>
            <p className="font-1" css={mgBottom}>
              Nos siga nas redes sociais:
            </p>
            <ul>
              <li>
                <a
                  css={linkStyle}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/gamedii/"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  css={linkStyle}
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/gamedii/"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  css={linkStyle}
                  rel="noopener noreferrer"
                  href="https://www.gamedii.com.br/"
                >
                  Website Oficial
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
