/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(`{
    allProjectsJson {
      edges {
        node {
          slug
        }
      }
    }
  }`)

  if (data.errors) {
    console.log("Error retrieving data", data.errors)
    return
  }

  const projectTemplate = require.resolve("./src/templates/ProjectPage.js")

  data.data.allProjectsJson.edges.forEach(edge => {
    createPage({
      path: `/projects/${edge.node.slug}/`,
      component: projectTemplate,
      context: {
        slug: edge.node.slug
      }
    })
  })
}