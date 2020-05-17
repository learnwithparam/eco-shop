import React from "react";
import { Heading, Text } from "@chakra-ui/core";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { HeroContainer } from "../../components/shared";

const PrivacyPage = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <HeroContainer>
      <Heading as="h2" fontSize="2xl" textTransform="uppercase" mb="3">
        Privacy policy
      </Heading>
      <Text>Privacy is a Myth!</Text>
    </HeroContainer>
  </Layout>
);

export default PrivacyPage;
