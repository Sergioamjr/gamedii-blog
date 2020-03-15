/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import { secondTitle, xLargeMgBottom, Row, grid } from "../../design"
import BlogCard from "../BlogCard/BlogCard"

const Recommendation = props => {
  return (
    <div css={xLargeMgBottom}>
      <p css={secondTitle}>Leia também</p>
      <div css={grid}>
        {props.itens.map(({ node }) => {
          const { title, id, path, featured_media } = node
          const thumbnail =
            featured_media.localFile.childImageSharp.original.src
          return (
            <Row sm={50} md={33} key={id}>
              <BlogCard
                isOnCard
                thumbnail={thumbnail}
                path={path}
                title={title}
              />
            </Row>
          )
        })}
      </div>
    </div>
  )
}

Recommendation.propTypes = {
  itens: PropTypes.arrayOf({
    node: PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      featured_media: PropTypes.shape({
        localFile: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            original: PropTypes.shape({
              src: PropTypes.string.isRequired,
            }),
          }),
        }),
      }),
    }),
  }),
}

export default Recommendation
