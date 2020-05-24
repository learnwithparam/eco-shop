/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CartProvider from "./src/context/cart";

const stripePromise = loadStripe(
  `${
    process.env.GATSBY_STRIPE_KEY
      ? process.env.GATSBY_STRIPE_KEY
      : "pk_test_FqfOKoybWF1MEQNRNbk5GWuw00Qgtn3SLM"
  }`
);

export const wrapRootElement = ({ element }) => (
  <Elements stripe={stripePromise}>
    <CartProvider>{element}</CartProvider>
  </Elements>
);
