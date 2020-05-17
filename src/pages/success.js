import React from "react";
import { Heading } from "@chakra-ui/core";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { StyledLink, HeroContainer } from "../components/shared";

const SuccessPage = () => (
  <Layout>
    <SEO title="Order Successful" />
    <HeroContainer textAlign="center">
      <Heading as="h2" fontSize="2xl" textTransform="uppercase" mb="3">
        Order has been placed Successfully
      </Heading>
      <StyledLink to="/">Explore products</StyledLink>
    </HeroContainer>
  </Layout>
);

export default SuccessPage;
