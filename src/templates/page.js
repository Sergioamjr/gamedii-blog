/** @jsx jsx */
import { jsx } from "@emotion/core"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { text } from "../design"

const Page = props => {
  const post = props.data.wordpressPage

  return (
    <div>
      <h1>{post.title}</h1>
      <div css={text} dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    wordpressPage: PropTypes.shape({
      content: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
