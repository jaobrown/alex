// const path = require(`path`)

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage, createRedirect } = actions
//   const result = await graphql(`
//     query {
//       pages: allSanityPage {
//         nodes {
//           title
//           slug {
//             current
//           }
//           _id
//         }
//       }
//       redirects: allSanityRedirect {
//         nodes {
//           toPath
//           fromPath
//           statusCode
//         }
//       }
//     }
//   `)

//   // create pages
//   result.data.pages.nodes.forEach((page) => {
//     const slug = page.slug ? page.slug.current : `/`
//     createPage({
//       path: slug,
//       component: path.resolve(`./src/templates/page.js`),
//       context: {
//         _id: page._id,
//       },
//     })
//   })

//   // create redirects
//   result.data.redirects.nodes.forEach((redirect) => {
//     createRedirect({
//       fromPath: redirect.fromPath,
//       toPath: redirect.toPath,
//       statusCode: redirect.statusCode,
//     })
//   })
// }
