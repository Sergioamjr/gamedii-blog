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

const BlogCard = ({ title, thumbnail, excerpt, path, label }) => {
  return (
    <div css={xLargeMgBottom}>
      <img css={mgBottom} alt="thumbnail" src={thumbnail} />
      <p css={secondTitle}>{title}</p>
      <div css={text} dangerouslySetInnerHTML={{ __html: excerpt }} />
      <Link css={linkStyle} to={`/${path}`}>
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
