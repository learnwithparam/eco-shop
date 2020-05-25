/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      query productsQuery {
        allProductsJson {
          edges {
            node {
              brand
              id
              name
              categories
              price
              image
            }
          }
        }
      }
    `
  );
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const productTemplate = path.resolve(`src/templates/product.js`);

  result.data.allProductsJson.edges.forEach(({ node }) => {
    const path = `/products/${node.id}`;

    createPage({
      path,
      component: productTemplate,
      context: {
        pagePath: path,
        product: node,
      },
    });
  });
};
