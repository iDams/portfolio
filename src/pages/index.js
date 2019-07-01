import React from 'react';

import Hello from '../components/Hello'
import Layout from '../components/Layout'
import Work from '../components/Work'
import HireMe from '../components/HireMe'

export default (props) =>
  <Layout location={props.location}>
    <Hello />
    <Work />
    <HireMe />
  </Layout>
