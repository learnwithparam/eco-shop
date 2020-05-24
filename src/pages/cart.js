import React from "react";
import { Flex, Box, Button, Heading } from "@chakra-ui/core";
import { useStripe } from "@stripe/react-stripe-js";

import Layout from "../components/layout";
import SEO from "../components/seo";
import EmptyCart from "../components/empty-cart";
import CartProduct from "../components/cart-product";

import { useCartStore } from "../context/cart";

const BuyAll = ({ cart }) => {
  const stripe = useStripe();

  const placeOrder = () => {
    const items = cart.map(product => {
      return {
        sku: product.id,
        quantity: product.quantity,
      };
    });
    stripe.redirectToCheckout({
      items,
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/cancel",
    });
  };

  return (
    <Box py="4">
      <Button variantColor="yellow" size="sm" mr="2" onClick={placeOrder}>
        Buy all
      </Button>
    </Box>
  );
};

const CartPage = () => {
  const { cart } = useCartStore();

  return (
    <Layout>
      <SEO title="Cart" />
      <Flex
        as="section"
        maxW="720px"
        minH="calc(100vh - 190px)"
        mx="auto"
        my="3"
        alignItems={cart.length === 0 ? "center" : "flex-start"}
      >
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <Flex flexWrap="wrap">
            <Heading
              as="h2"
              fontSize="28px"
              my="30px"
              textAlign="center"
              width="100%"
            >
              Cart products
            </Heading>
            <BuyAll cart={cart} />
            {cart.map(product => {
              return <CartProduct key={product.name} product={product} />;
            })}
          </Flex>
        )}
      </Flex>
    </Layout>
  );
};

export default CartPage;
