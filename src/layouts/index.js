import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Header from '../components/Header'

import './index.css'

const Layout = ({ children, location}) => {
  return (
    <div>
      <Header hash={location.hash} />
      <div css={{ marginTop: '47px' }}>
        {children()}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
