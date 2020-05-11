import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Badge,
  Divider,
  Button,
} from "@chakra-ui/core";

const Categories = ({ tags }) => {
  return (
    <Box ml="auto">
      {tags.map(tag => {
        return (
          <Badge
            key={tag}
            ml="1"
            py="1"
            px="2"
            variantColor="purple"
            textTransform="lowercase"
          >
            {tag}
          </Badge>
        );
      })}
    </Box>
  );
};

const Product = ({ product }) => {
  return (
    <Flex
      border="1px solid"
      borderColor="gray.700"
      borderRadius="4px"
      flexDirection="column"
    >
      <Box p="4">
        <Heading as="h3" fontSize="xl">
          {product.name}
        </Heading>
        <Text>{product.brand}</Text>
      </Box>
      <Divider m="0" />
      <Flex alignItems="center" px="4" py="2">
        <Box>
          <Text as="strong">${product.price}</Text>
        </Box>
        <Categories tags={product.categories} />
      </Flex>
      <Divider m="0" />
      <Box px="4" py="3">
        <Button variantColor="yellow" size="sm" mr="2">
          Add to cart
        </Button>
        <Button variant="outline" size="sm">
          Buy now
        </Button>
      </Box>
    </Flex>
  );
};

export default Product;
