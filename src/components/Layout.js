import React from "react";
import PropTypes from "prop-types";
import { css } from 'glamor';

import Header from "../components/Header";
import Footer from "../components/Footer";

css.global('html, body', { 
  margin: 0,
  fontFamily: `-apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif`,
})
css.global('*::selection', {
  color: 'black',
  backgroundColor: '#C8E6C9'
 })

const Layout = ({ children, location }) => {
  return (
    <div>
      <Header hash={location.hash} />
      <div css={{ maxWidth: "900px", margin: "47px auto 0" }}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
