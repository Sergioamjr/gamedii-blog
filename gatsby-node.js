const path = require("path")
const slash = require("slash")
const { replaceWpPrefix } = require("./src/utils")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            id
            path
            status
            template
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allWordpressPost } = result.data

  const postTemplate = path.resolve("./src/templates/post.js")

  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: replaceWpPrefix(edge.node.path),
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}
