import React from "react";
import { Heading } from "@chakra-ui/core";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { StyledLink, HeroContainer } from "../components/shared";

const CancelPage = () => (
  <Layout>
    <SEO title="Order Cancelled" />
    <HeroContainer textAlign="center">
      <Heading as="h2" fontSize="2xl" textTransform="uppercase" mb="3">
        You can check out our other products
      </Heading>
      <StyledLink to="/">Explore products</StyledLink>
    </HeroContainer>
  </Layout>
);

export default CancelPage;
