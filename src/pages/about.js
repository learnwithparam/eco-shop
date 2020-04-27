import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

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
      <h1>About</h1>
      <p>
        We are Eco Shop selling the merchandise for{" "}
        <a rel="noopener noreferrer" href={siteUrl} target="_blank">
          Learn with Param
        </a>
      </p>
      <p>
        You can reach me out in{" "}
        <a rel="noopener noreferrer" href={twitterUrl} target="_blank">
          twitter
        </a>
      </p>
      <p>Site created by {author}</p>
    </Layout>
  );
};

export default AboutPage;
