const { slash } = require(`gatsby-core-utils`)
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulVendor {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }
    const vendorTemplate = path.resolve(`./src/templates/vendor.js`)
    result.data.allContentfulVendor.edges.forEach(edge => {
      createPage({
        path: `/vendors/${edge.node.slug}`,
        component: slash(vendorTemplate),
        context: {
          slug: edge.node.slug,
        },
      })
    })
  })
}
