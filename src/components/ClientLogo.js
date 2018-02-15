export default ({ imgSrc, description, url }) => {
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
        css={{
          display: "flex",
          justifyContent: "center",
          margin: "5px",
          padding: "10px",
          border: "1px solid #eaeaea",
          ":hover": {
            borderColor: "#4CAF50"
          }
        }}
      >
        <img alt={description} src={imgSrc} css={{ height: "100px" }} />
      </a>
    </div>
  );
};
