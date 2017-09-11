export default ({ children, htmlID, customStyle }) => {
  return (
    <section
      css={{ padding: '35px 15px', ...customStyle }}>
      <span
        id={htmlID}
        css={{
          marginTop: '-85px',
          paddingTop: '85px',
          display: 'block',
          visibility: 'hidden'
        }}
      />
      <div>
        {children}
      </div>
    </section>
  )
}
