/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const slash = require('slash')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const coachTemplate = path.resolve(`src/templates/coach.js`)

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulCoach {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulCoach.edges.map(({ node }) => {
        createPage({
          path: `/coaches/${node.slug}`,
          component: slash(coachTemplate),
          context: {
            id: node.id,
          },
        })

        resolve()
      })
    })
  })
}
