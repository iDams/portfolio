import React from "react";

export default ({ imgSrc, description, url, height }) => {
  return (
    <div
      css={{
        width: "50%",
        "@media(max-width: 768px)": {
          width: "100%"
        }
      }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        css={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          height: "100px",
          margin: "5px",
          padding: "10px",
          border: "1px solid #eaeaea",
          ":hover": {
            borderColor: "#4CAF50"
          }
        }}
      >
        <img
          alt={description}
          src={imgSrc}
          css={{
            maxWidth: "250px",
            maxHeight: "80px",
            height: height ? `${height}px` : "80px",
            width: "auto"
          }}
        />
      </a>
    </div>
  );
};
