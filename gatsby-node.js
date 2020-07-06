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

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const products = path.resolve(`src/data/products.json`);
  products.forEach(({ image }) => {
    // 1. name, extension and absolute path are required to build a File node
    const { name, ext } = path.parse(image);
    const absolutePath = path.resolve(__dirname, "static", image);

    // 2. Build a data shape that corresponds to a File node that Sharp can process
    const data = {
      name,
      ext,
      absolutePath,
      extension: ext.substring(1), // remove the dot in `ext`
    };

    // 3. Build the image node using our data
    const imageNode = {
      ...data,
      id: createNodeId(`product-image-${name}`),
      internal: {
        type: "ProductImage",
        contentDigest: createContentDigest(data),
      },
    };

    // 4. Create the node. When imageNode is created, Sharp adds childImageSharp to the node
    actions.createNode(imageNode);

    const node = {
      // 5. Add the image node to our tree
      image: imageNode,
    };

    actions.createNode(node);
  });
};
