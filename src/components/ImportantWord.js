export default ({ children, url }) => {
  const css = {
    borderBottom: "2px solid #4CAF50",
    padding: "2px 0",
    textDecoration: "none",
    color: "black",
    fontWeight: "500",
    transition: "all 0.2s ease",
    ":hover": {
      backgroundColor: "#4CAF50",
      color: "white",
      borderRadius: "2px"
    }
  };
    return (
      <a href={url} target="_blank" css={css}>
        {children}
      </a>
    );
}
