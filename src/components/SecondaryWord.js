import React from 'react';

export default ({ children, url }) => {
  const css = {
    borderBottom: "2px solid transparent",
    padding: "2px 0",
    textDecoration: "none",
    color: "black",
    fontWeight: "500",
    transition: "all 0.2s ease",
    ":hover": {
      borderColor: "#4CAF50"
    }
  };
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" css={css}>
      {children}
    </a>
  );
};
