import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { isIdentifier } from 'postcss-selector-parser';
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>That's the<br/>closest WAY to<br/>your new bro</h1>
        <p>Welcome to satudora digital SNS page,WAY. Who Are You? What's your skill? 
          To begin with, why don't you tell me about yourself?</p>
        <Link to="/page-2/">Register</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50"/>
          <img src={require('../images/logo-figma.png')} width="50"/>
          <img src={require('../images/logo-studio.png')} width="50"/>
          <img src={require('../images/logo-framer.png')} width="50"/>
          <img src={require('../images/logo-react.png')} width="50"/>
          <img src={require('../images/logo-swift.png')} width="50"/>
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11projects, more coming</h2>
      <div className="CardGroup">
        <Card title="Satudora Digital"
              text="6 members"
              image={require('../images/wallpaper.jpg')} />
        <Card title="Satudora Digital"
              text="16 members"
              image={require('../images/wallpaper2.jpg')} />
        <Card title="Satudora Digital"
              text="62 members"
              image={require('../images/wallpaper3.jpg')} />
        <Card title="Satudora Digital"
              text="4 members"
              image={require('../images/wallpaper4.jpg')} />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
  </Layout>
)

export default IndexPage