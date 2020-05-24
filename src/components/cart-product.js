import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/core";

import { useCartStore } from "../context/cart";

const CartProduct = ({ product }) => {
  const { removeFromCart, updateCart } = useCartStore();
  const [quantity, setQuantity] = React.useState(product.quantity);
  const handleChange = value => {
    setQuantity(value);

    updateCart({
      product,
      quantity: value,
    });
  };

  return (
    <Flex
      width="100%"
      border="1px solid"
      borderColor="gray.700"
      borderRadius="4px"
      mb="3"
    >
      <Box p="4">
        <Heading as="h3" fontSize="xl">
          {product.name}
        </Heading>
        <Text>{product.brand}</Text>
        <Box>
          <Text as="strong">${product.price}</Text>
        </Box>
      </Box>
      <Box ml="auto" p="4">
        <NumberInput
          min={1}
          max={4}
          value={quantity}
          onChange={handleChange}
          precision={0}
          step={1}
          mb={3}
          size="sm"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            removeFromCart({
              id: product.id,
            })
          }
        >
          Remove from cart
        </Button>
      </Box>
    </Flex>
  );
};

export default CartProduct;
