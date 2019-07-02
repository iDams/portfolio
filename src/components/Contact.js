import React from "react";
import SVGInline from "react-svg-inline";

import phoneSvg from "!raw-loader!../assets/phone.svg";
import emailSvg from "!raw-loader!../assets/email.svg";

export default () => {
  const cssLink = {
    color: "black",
    textDecoration: "none"
  };
  const cssText = {
    marginLeft: "5px",
    verticalAlign: "top"
  };
  return (
    <div>
      <a href="mailto:damien.soulard@gmail.com" css={cssLink}>
        <SVGInline svg={emailSvg} height="24px" width="24px" />
        <span css={cssText}>damien.soulard@gmail.com</span>
      </a>
    </div>
  );
};
