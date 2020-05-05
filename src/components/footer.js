import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}
      {` `}
      <Link to="/support/terms-and-conditions">Terms and Conditions</Link>
      {` `}
      <Link to="/support/privacy-policy">Privacy policy</Link>
    </footer>
  );
};

export default Footer;
