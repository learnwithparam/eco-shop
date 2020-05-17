import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/core";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { StyledLink } from "../components/shared";

const CancelPage = () => (
  <Layout>
    <SEO title="Order Cancelled" />
    <Flex
      as="section"
      maxW="720px"
      minH="calc(100vh - 190px)"
      mx="auto"
      my="3"
      p="3"
      alignItems="center"
    >
      <Box textAlign="center" maxW="600px" my="60px" mx="auto">
        <Heading as="h2" fontSize="2xl" textTransform="uppercase" mb="3">
          You can check out our other products
        </Heading>
        <StyledLink to="/">Explore products</StyledLink>
      </Box>
    </Flex>
  </Layout>
);

export default CancelPage;
