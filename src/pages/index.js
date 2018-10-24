import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>That's the closest WAY to your new bro</h1>
        <p>Welcome to satudora digital SNS page, WAY.</p>
        <p>Who Are You? What's your skill? 
          To begin with, why don't you tell me about yourself?</p>
        <Link to="/page-2/">Register</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
