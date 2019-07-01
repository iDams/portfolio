import React from 'react';

export default ({ children, anchor }) => {
  return (
    <a
      href={`#${anchor}`}
      css={{
        display: 'inline-block',
        fontSize: '35px',
        fontWeight: '200',
        color: 'black',
        textDecoration: 'none',
        marginBottom: '20px',
        borderBottom: '1px solid transparent',
        ':hover': {
          borderColor: 'black'
        }
      }}>
      {children}
    </a>
  )
}
