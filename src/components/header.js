import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/core";
import styled from "@emotion/styled";

const LogoLink = styled(Link)`
  text-decoration: none;
  letter-spacing: 0.2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 20px 0;
  font-size: 20px;
  letter-spacing: 0.1rem;
  border-bottom: 5px solid transparent;
  &:hover {
    color: ${props => `${props.theme.colors.gray[400]}`};
    border-color: ${props => `${props.theme.colors.yellow[400]}`};
  }
`;

const Header = ({ siteTitle }) => (
  <Box as="header" borderBottom="1px solid" borderColor="gray.700" py="3">
    <Flex width="100%" maxW="720px" m="0 auto" alignItems="center">
      <Box>
        <Heading as="h1" m="0" fontSize="32px">
          <LogoLink to="/">
            <Text as="span" color="yellow.400">
              {siteTitle}
            </Text>
          </LogoLink>
        </Heading>
      </Box>
      <Box as="nav" ml="auto">
        <NavLink to="/about">about</NavLink>
      </Box>
    </Flex>
  </Box>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
