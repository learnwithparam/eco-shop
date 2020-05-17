import React from "react";
import { Heading, Text } from "@chakra-ui/core";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { HeroContainer } from "../../components/shared";

const TermsPage = () => (
  <Layout>
    <SEO title="Terms & Conditions" />
    <HeroContainer>
      <Heading as="h2" fontSize="2xl" textTransform="uppercase" mb="3">
        Terms & Conditions
      </Heading>
      <Text>IT jobs are subjected to market risk!</Text>
    </HeroContainer>
  </Layout>
);

export default TermsPage;
