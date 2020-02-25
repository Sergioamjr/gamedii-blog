/* eslint-disable quotes */
/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import PropTypes from "prop-types"
import Header from "../Header"
import Footer from "../Footer"
import { Container } from "../../design"
import SEO from "../Seo/Seo"
import { returnLocationProperty } from "../../utils"

const layout = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

const Wrapper = ({ title, children, ...props }) => {
  const href = returnLocationProperty("href")
  const origin = returnLocationProperty("origin")

  return (
    <div className="App" css={layout}>
      <SEO {...props} href={href} title={title} origin={origin} />
      <div>
        <Header />
        <Container {...props}>{children}</Container>
      </div>
      <Footer />
    </div>
  )
}

export default Wrapper

Wrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Wrapper.defaultProps = {
  title: "",
}
