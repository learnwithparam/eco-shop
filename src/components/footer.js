import React from "react";
import { Link } from "gatsby";
import { Box, Flex, Text } from "@chakra-ui/core";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 10px;
`;

const Footer = () => {
  return (
    <Box as="header" borderTop="1px solid" borderColor="gray.700" py="4">
      <Flex width="100%" maxW="720px" m="0 auto" alignItems="center">
        <Box>
          <Text as="span">© {new Date().getFullYear()} </Text>
          <Text as="span" color="yellow.400">
            learnwithparam.com
          </Text>
        </Box>
        <Box as="nav" ml="auto">
          <StyledLink to="/support/terms-and-conditions">
            Terms and Conditions
          </StyledLink>
          <StyledLink to="/support/privacy-policy">Privacy policy</StyledLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
