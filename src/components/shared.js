import { Link } from "gatsby";
import styled from "@emotion/styled";

export const StyledLink = styled(Link)`
  color: ${props => `${props.theme.colors.yellow[400]}`};
  text-decoration: underline;
  &:hover {
    color: ${props => `${props.theme.colors.yellow[600]}`};
  }
`;
