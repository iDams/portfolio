export default ({ children }) => {
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
          textAlign: "left"
        }
      }}
    >{children}
  </p>
  )
}
