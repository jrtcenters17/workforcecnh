import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import chiSearvue from '../images/ChiSearvue.jpg'

const About = () => (
  <Layout>
  cn
    <h1 style ={{
      alignContent: 'center'
    }}> Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <img src={chiSearvue} alt=""/>
  </Layout>
)

export default About
