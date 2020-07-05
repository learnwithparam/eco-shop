import React from "react";
import Product from "./product";
import { Grid, Box, Heading, Text } from "@chakra-ui/core";

const Products = ({ products }) => {
  return (
    <Box as="section" maxW="720px" mx="auto" my="3" p="3">
      <Box textAlign="center" maxW="600px" my="60px" mx="auto">
        <Heading as="h2" fontSize="2xl" textTransform="uppercase" mb="3">
          Ecoshop products for you
        </Heading>
        <Text fontSize="lg">
          See our shop product lists. Explore and buy if you can. Also learn
          from our ecommerce site on how not to create an ecommerce product list
          <Text as="span" role="img" aria-label="smile">
            {" "}
            😁
          </Text>
        </Text>
      </Box>
      <Grid templateColumns={["repeat(1, 1fr)"]} gap={6}>
        {products.map(({ node: product }) => (
          <Product product={product} key={product.name} />
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
