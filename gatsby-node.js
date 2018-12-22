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
        allCoachesJson {
          edges {
            node {
              id
            }
          }
        }
      }
    `).then(result => {
      result.data.allCoachesJson.edges.map(({ node }) => {
        createPage({
          path: `/coaches/${node.id}`,
          component: slash(coachTemplate),
          context: {
            id: node.id,
            image: `${node.id}-coach`,
          },
        })

        resolve()
      })
    })
  })
}
