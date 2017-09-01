export default ({ imgSrc, description }) => {
  return (
    <div
      css={{
        width: '50%',
        '@media(max-width: 768px)': {
          width: '100%'
        }
      }}>
      <div
        css={{
          margin: '5px',
          padding: '10px',
          border: '1px solid #eaeaea',
          ':hover': {
            borderColor: '#4CAF50'
          }
      }}>
        <img
          src="http://img.phonandroid.com/2016/07/molotov-tv.jpg"
          css={{ width: '100%' }}
        />
        <p css={{ margin: '10px 0 0' }}>{description}</p>
      </div>
    </div>
  )
}
