import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header'

import './index.css'

const Layout = ({ children, location}) => {
  return (
    <div>
      <Helmet
        title="Damien Soulard"
        meta={[
          { name: 'description', content: 'Portfolio of Damien Soulard' },
          { name: 'keywords', content: 'portolio, damien, soulard, frontend, development, react, js' },
        ]}
      />
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
