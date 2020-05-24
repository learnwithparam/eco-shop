/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Box } from "@chakra-ui/core";

import Header from "./header";
import Footer from "./footer";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Box color="white">
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box p="2">
        <main>{children}</main>
      </Box>
      <Footer />
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
