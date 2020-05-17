import React from "react";
import { Box, Flex, Text } from "@chakra-ui/core";
import styled from "@emotion/styled";

import { StyledLink } from "./shared";

const FooterLink = styled(StyledLink)`
  text-decoration: none;
  margin-left: 16px;
`;

const Footer = () => {
  return (
    <Box as="header" borderTop="1px solid" borderColor="gray.700" py="4">
      <Flex width="100%" maxW="720px" m="0 auto" alignItems="center">
        <Box>
          <Text as="span">© {new Date().getFullYear()} </Text>
          <Text as="span" color="red.400">
            learnwithparam.com
          </Text>
        </Box>
        <Box as="nav" ml="auto">
          <FooterLink to="/support/terms-and-conditions">
            Terms and Conditions
          </FooterLink>
          <FooterLink to="/support/privacy-policy">Privacy policy</FooterLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
