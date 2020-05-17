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
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Header from "./header";
import Footer from "./footer";
import "./layout.css";

const stripePromise = loadStripe("pk_test_FqfOKoybWF1MEQNRNbk5GWuw00Qgtn3SLM");

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
    <Elements stripe={stripePromise}>
      <Box color="white">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer />
      </Box>
    </Elements>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
