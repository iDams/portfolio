export default ({ children, htmlID }) => {
  return (
    <section
      id={htmlID}
      css={{ padding: '35px 15px' }}>
      <div>
        {children}
      </div>
    </section>
  )
}
