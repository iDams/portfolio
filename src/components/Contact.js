import React from 'react';
import SVGInline from "react-svg-inline";

import phoneSvg from '!raw-loader!../assets/phone.svg'
import emailSvg from '!raw-loader!../assets/email.svg'

export default ({ phone, email }) => {
  const cssLink = {
    color: 'black',
    textDecoration: 'none'
  }
  const cssText = {
    marginLeft: '5px',
    verticalAlign: "top",
  }

  if (phone) {
    return (
      <div>
        <a href="tel:+33640711229" css={cssLink}>
          <SVGInline svg={phoneSvg} height="24px" width="24px" />
          <span css={cssText}>+33 6 40 71 12 29</span>
        </a>
      </div>

    )
  }

  if (email) {
    return (
      <div>
        <a href="mailto:damien.soulard@gmail.com" css={cssLink}>
          <SVGInline svg={emailSvg} height="24px" width="24px" />
          <span css={cssText}>damien.soulard@gmail.com</span>
        </a>
      </div>
    )

  // eslint-disable-next-line
  return null
  }
}
