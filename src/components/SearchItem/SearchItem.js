/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import { secondTitle, text, linkStyle, xLargeMgBottom } from "./../../design"
import { replaceWpPrefix } from "./../../utils"

const SearchItem = ({ link, title, excerpt }) => {
  return (
    <div data-testid="search-result-item" css={xLargeMgBottom}>
      <a href={replaceWpPrefix(link)}>
        <h1 css={secondTitle}>{title}</h1>
      </a>
      <div css={text} dangerouslySetInnerHTML={{ __html: excerpt }} />
      <a css={linkStyle} href={replaceWpPrefix(link)}>
        Ler mais
      </a>
    </div>
  )
}

SearchItem.propTypes = {
  excerpt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default SearchItem
