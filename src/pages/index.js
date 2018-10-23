import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>learn</h1>
    <p>Welcome to kitamura react site</p>
    <p>let's go</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
