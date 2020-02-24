/* eslint-disable quotes */
/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import Header from "../Header"
import Footer from "../Footer"
import { Container } from "../../design"
import SEO from "../Seo/Seo"

export const returnLocationProperty = property => {
  return typeof window !== "undefined" ? window.location[property] : ""
}

const Wrapper = ({ title, children, ...props }) => {
  const href = returnLocationProperty("href")
  const origin = returnLocationProperty("origin")

  return (
    <div className="App">
      <SEO {...props} href={href} title={title} origin={origin} />
      <Header />
      <Container {...props}>{children}</Container>
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
