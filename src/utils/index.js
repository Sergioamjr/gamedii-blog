const replaceWpPrefix = path => path.replace("/wp", "/blog")

const returnLocationProperty = property => {
  return typeof window !== "undefined" ? window.location[property] : ""
}

const orderByDate = posts => {
  return posts.sort((a, b) => {
    if (a.node.date > b.node.date) {
      return -1
    }

    if (a.node.date < b.node.date) {
      return 1
    }

    return 0
  })
}

module.exports = {
  replaceWpPrefix,
  returnLocationProperty,
  orderByDate,
}
