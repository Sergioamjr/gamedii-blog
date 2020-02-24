/* eslint-disable quotes */
/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import Header from "../Header"
import Footer from "../Footer"
import { Container, pageTitle } from "../../design"

const Wrapper = ({ title, children, ...props }) => {
  return (
    <div className="App">
      <Header />
      <Container {...props}>
        {!!title && <h2 css={pageTitle}>{title}</h2>}
        {children}
      </Container>
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
