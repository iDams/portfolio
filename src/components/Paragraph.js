import React from 'react';

export default ({ children, customCss, customCssForMobile }) => {
  return (
    <p
      css={{
        lineHeight: "24px",
        width: "450px",
        margin: "1em auto",
        textAlign: "center",
        "@media(max-width: 768px)": {
          width: "100%",
          lineHeight: "26px",
          textAlign: "left",
          ...customCssForMobile
        },
        ...customCss
      }}
    >{children}
  </p>
  )
}
