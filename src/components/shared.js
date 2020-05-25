import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { Flex, Box } from "@chakra-ui/core";

export const StyledLink = styled(Link)`
  color: ${props => `${props.theme.colors.yellow[400]}`};
  text-decoration: ${props =>
    `${props.textDecoration ? props.textDecoration : "underline"}`};
  &:hover {
    color: ${props => `${props.theme.colors.yellow[600]}`};
  }
`;

export const StyledAnchor = styled.a`
  color: ${props => `${props.theme.colors.yellow[400]}`};
  text-decoration: underline;
  &:hover {
    color: ${props => `${props.theme.colors.yellow[600]}`};
  }
`;

export const HeroContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="section"
      maxW="720px"
      minH="calc(100vh - 190px)"
      mx="auto"
      my="3"
      p="3"
      alignItems="center"
    >
      <Box {...props} maxW="600px" my="60px" mx="auto">
        {children}
      </Box>
    </Flex>
  );
};
