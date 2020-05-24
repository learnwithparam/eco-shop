/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

require("dotenv").config();

import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CartProvider from "./src/context/cart";

const stripePromise = loadStripe(`${process.env.GATSBY_STRIPE_KEY}`);

export const wrapRootElement = ({ element }) => (
  <Elements stripe={stripePromise}>
    <CartProvider>{element}</CartProvider>
  </Elements>
);
