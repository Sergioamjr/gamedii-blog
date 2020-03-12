/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  linkStyle,
  secondTitle,
  text,
  mgBottom,
  xLargeMgBottom,
} from "../../design"
import { replaceWpPrefix } from "../../utils"

const BlogCard = ({ title, thumbnail, excerpt, path, label }) => {
  return (
    <div css={xLargeMgBottom}>
      <Link to={`/${replaceWpPrefix(path)}`}>
        <img css={mgBottom} alt="thumbnail" src={thumbnail} />
      </Link>
      <Link to={`/${replaceWpPrefix(path)}`}>
        <p css={secondTitle}>{title}</p>
      </Link>
      <div css={text} dangerouslySetInnerHTML={{ __html: excerpt }} />
      <Link css={linkStyle} to={`/${replaceWpPrefix(path)}`}>
        {label}
      </Link>
    </div>
  )
}

BlogCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string,
  label: PropTypes.string,
  excerpt: PropTypes.string,
  path: PropTypes.string,
}

BlogCard.defaultProps = {
  label: "Continuar lendo",
}

export default BlogCard
