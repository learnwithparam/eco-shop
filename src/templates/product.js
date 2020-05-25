import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Box } from "@chakra-ui/core";
import { HeroContainer } from "../components/shared";

const Product = ({ pageContext }) => {
  const { product } = pageContext;

  return (
    <Layout>
      <SEO title="Products" />
      <HeroContainer>
        <Box>Name: {product.name}</Box>
        <Box>Price: {product.price}</Box>
      </HeroContainer>
    </Layout>
  );
};

export default Product;
