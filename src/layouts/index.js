import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.css'

const Layout = ({ children, location}) => {
  return (
    <div>
      <Header hash={location.hash} />
      <div css={{ maxWidth: '900px', margin: '47px auto 0' }}>
        {children()}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
