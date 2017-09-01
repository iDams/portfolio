export default ({ children, htmlID }) => {
  const contnainerCss = {
    padding: '35px 0',
  }
  const contentCss = {
    maxWidth: '728px',
    margin: '0 auto'
  }

  return (
    <section id={htmlID} css={contnainerCss}>
      <div css={contentCss}>
        {children}
      </div>
    </section>
  )
}
