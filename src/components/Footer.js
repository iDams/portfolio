import React from "react";

export default () => {
  const cssContainer = {
    backgroundColor: "#12130F",
    padding: "40px 0"
  };

  const cssContent = {
    maxWidth: "900px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#616161",
    fontSize: "12px",
    lineHeight: "18px"
  };

  return (
    <footer css={cssContainer}>
      <div css={cssContent}>
        <div>
          Made with{" "}
          <span role="img" aria-label="monkey-emoji">
            🐒
          </span>{" "}
          by Damien Soulard
        </div>
        <div>
          Code available on{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/amsdamsgram/portfolio"
            css={{
              textDecoration: "none",
              color: "#616161",
              ":hover": { textDecoration: "underline" }
            }}
          >
            github
          </a>
        </div>
        <div>Copyright © 2019 Damien Soulard. All rights reserved.</div>
      </div>
    </footer>
  );
};
