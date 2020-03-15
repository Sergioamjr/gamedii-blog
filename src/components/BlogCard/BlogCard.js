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
  secondTitleSmall,
} from "../../design"
import { replaceWpPrefix } from "../../utils"

const BlogCard = ({ title, thumbnail, excerpt, path, label, isOnCard }) => {
  return (
    <div css={xLargeMgBottom}>
      <Link to={`/${replaceWpPrefix(path)}`}>
        <img css={mgBottom} alt="thumbnail" src={thumbnail} />
      </Link>
      <Link to={`/${replaceWpPrefix(path)}`}>
        <p css={isOnCard ? secondTitleSmall : secondTitle}>{title}</p>
      </Link>
      <div css={text} dangerouslySetInnerHTML={{ __html: excerpt }} />
      {!isOnCard && (
        <Link css={linkStyle} to={`/${replaceWpPrefix(path)}`}>
          {label}
        </Link>
      )}
    </div>
  )
}

BlogCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string,
  label: PropTypes.string,
  excerpt: PropTypes.string,
  path: PropTypes.string,
  isOnCard: PropTypes.bool,
}

BlogCard.defaultProps = {
  label: "Continuar lendo",
  isOnCard: false,
}

export default BlogCard
