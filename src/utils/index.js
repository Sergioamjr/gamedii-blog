const replaceWpPrefix = path => path.replace("/wp", "/blog")

const returnLocationProperty = property => {
  return typeof window !== "undefined" ? window.location[property] : ""
}

module.exports = {
  replaceWpPrefix,
  returnLocationProperty,
}
