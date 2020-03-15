/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { Container, grid, Row, linkStyle, mgBottom } from "../../design"
import BlackAndWhite from "./../../assets/black-and-white.png"

const footer = css`
  padding: 40px 0;
  background: #212121;
  color: #fff;
  a {
    color: #3498db;
    &:hover {
      color: #2980b9;
    }
  }
`

const GamediiLogo = css`
  background-image: url(${BlackAndWhite});
  font-size: 0;
  width: 170px;
  height: 51px;
  background-size: cover;
  margin-bottom: 20px;
`

const footerText = css`
  font-family: "Open Sans", sans-serif;
  line-height: 1.8;
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
            <p
              css={css`
                ${footerText}
                ${mgBottom}
              `}
              className="font-1"
            >
              Blog destinado para pacientes portadores de Doenças Inflamatórias
              Intestinais, escrito por Sérgio Júnior, também autor do blog{" "}
              <a
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
            <p className="font-1" css={footerText}>
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
              {false && (
                <li>
                  <a
                    css={linkStyle}
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/gamedii/"
                  >
                    Instagram
                  </a>
                </li>
              )}
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
