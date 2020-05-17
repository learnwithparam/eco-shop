import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Products from "../components/products";

const IndexPage = ({ data }) => {
  const products = data.allProductsJson.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <Products products={products} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query HomePageQuery {
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
`;
