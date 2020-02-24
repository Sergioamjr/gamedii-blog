/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import { Container } from "../../design"
import logo from "./../../assets/logop.jpg"

const headerStyle = css`
  height: 60px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`

const alignCenter = css`
  display: flex;
  align-items: center;
`

const justifyContent = css`
  display: flex;
  justify-content: space-between;
`

const liStyle = css`
  margin-left: 15px;
`

const lightColor = css`
  color: #606062;
`

const titleStyle = css`
  ${lightColor}
  font-size: 0;
  width: 140px;
  height: 42px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${logo});
`

const Header = () => {
  return (
    <header css={headerStyle}>
      <Container css={justifyContent}>
        <Link to="/">
          <h1 css={titleStyle}>GAMEDII</h1>
        </Link>
        <nav css={alignCenter}>
          <ul css={justifyContent}>
            <li css={liStyle}>
              <Link className="font-1" css={lightColor} to="/">
                Início
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
