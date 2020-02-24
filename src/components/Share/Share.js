/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { WhatsAppIcon, FacebookIcon, TwitterIcon } from "../../design/icons"

const list = css`
  display: inline;
  margin-right: 10px;
  a {
    text-decoration: none;
    border: 0;
  }
`

const text = css`
  color: #333;
`
const Share = () => {
  return (
    <div>
      <p css={text} className="font-1">
        Compartilhe com seus amigos
      </p>
      <ul>
        <li css={list}>
          <a href="#">
            <WhatsAppIcon />
          </a>
        </li>
        <li css={list}>
          <a href="#">
            <FacebookIcon />
          </a>
        </li>
        <li css={list}>
          <a href="#">
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Share
