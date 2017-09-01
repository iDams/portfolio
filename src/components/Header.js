import logo from '../assets/logo.svg'

const Link = ({ hash, currentHash, text }) => {
  const isActive = hash === currentHash

  const itemCss =  {
    position: 'relative',
    display: 'block',
    color: 'black',
    textDecoration: 'none',
    padding: '15px',
    cursor: 'pointer',
    fontSize: '14px',
    opacity: isActive ? '1' : '0.4',

    ':before': {
      content: ' ',
      position: 'absolute',
      zIndex: '-1',
      left: '12px',
      top: '20px',
      width:isActive ? '45%' : '0',
      height: '10px',
      backgroundColor: '#C8E6C9',
      transition: 'width 0.5s ease'
    },

    ':hover': {
      opacity: '1',
      ':before': {
        width: '45%'
      }
    }
  }

  return (
    <a href={hash.length === 0 ? '#' : hash} css={itemCss}>{text}</a>
  )
}

export default ({ hash }) => {
  const headerCss = {
    position: 'fixed',
    width: '100%',
    top: '0',
    left: '0',
    backgroundColor: 'rgba(255,255,255,0.8)'
  }

  return (
    <div css={headerCss}>
      <div
        css={{
          maxWidth: '728px',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <img src={logo} css={{ height: '35px' }}/>
        <ul css={{
          display: 'flex',
          listStyle: 'none',
          justifyContent: 'flex-end',
          padding: '0'
         }}>
          <li><Link hash={''} currentHash={hash} text={'hello'} /></li>
          <li><Link hash={'#work'} currentHash={hash} text={'work'} /></li>
          <li><Link hash={'#hireme'} currentHash={hash} text={'hire me'} /></li>
        </ul>
      </div>

    </div>
  )
}
