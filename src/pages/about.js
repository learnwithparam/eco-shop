import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Heading, Text } from "@chakra-ui/core";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { StyledAnchor, HeroContainer } from "../components/shared";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query SiteAboutQuery {
      site {
        siteMetadata {
          author
          twitterUrl
          siteUrl
        }
      }
    }
  `);
  const { author, twitterUrl, siteUrl } = data.site.siteMetadata;

  return (
    <Layout>
      <SEO title="About" />
      <HeroContainer>
        <Heading as="h2" fontSize="2xl" textTransform="uppercase" mb="3">
          About
        </Heading>
        <Text>
          We are Eco Shop selling the merchandise for{" "}
          <StyledAnchor
            rel="noopener noreferrer"
            href={siteUrl}
            target="_blank"
          >
            Learn with Param
          </StyledAnchor>
        </Text>
        <Text>
          You can reach me out in{" "}
          <StyledAnchor
            rel="noopener noreferrer"
            href={twitterUrl}
            target="_blank"
          >
            twitter
          </StyledAnchor>
        </Text>
        <Text>
          Site created by
          {author}
        </Text>
      </HeroContainer>
    </Layout>
  );
};

export default AboutPage;
