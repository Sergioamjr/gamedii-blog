/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import PropTypes from "prop-types"
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
const Share = ({ link, title }) => {
  if (!link) {
    return null
  }
  return (
    <div>
      <p css={text} className="font-1">
        Compartilhe com seus amigos
      </p>
      <ul
        css={css`
          padding: 0;
        `}
      >
        <li css={list}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`whatsapp://send?text=Olá, encontrei artigo ${title} e gostaria de compartilhar com você ${link}`}
          >
            <WhatsAppIcon />
          </a>
        </li>
        <li css={list}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.facebook.com/sharer/sharer.php?u=#${link}`}
          >
            <FacebookIcon />
          </a>
        </li>
        <li css={list}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/intent/tweet?text=Veja sobre ${title} no blog da Gamedii ${link}`}
          >
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Share

Share.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}
