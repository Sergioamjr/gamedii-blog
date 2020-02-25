import React, { useEffect } from "react"
import PropTypes from "prop-types"

const disqusConfig = ({ url, id }) => {
  // eslint-disable-next-line no-unused-vars
  var disqus_config = function() {
    this.page.url = url // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = id // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  }

  ;(function() {
    var d = document,
      s = d.createElement("script")
    s.src = "https://blog-gamedii.disqus.com/embed.js"
    s.setAttribute("data-timestamp", +new Date())
    ;(d.head || d.body).appendChild(s)
  })()
}

const Disqus = ({ url, id }) => {
  useEffect(() => {
    disqusConfig({ url, id })
  }, [url, id])
  return <div id="disqus_thread"></div>
}

Disqus.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Disqus
