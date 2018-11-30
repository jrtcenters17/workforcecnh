import React from 'react'
import Layout from '../components/layout'
import weDream from '../images/wedream.jpg'
import styled from 'styled-components'

const HeroImage = styled.div`
height: 200px;
width: 75%;
`



const IndexPage = () => (
  <Layout>
    <HeroImage>
     <h1>Full Employment</h1>
        <p>Now go build something great.</p>
        <img src={weDream} alt=""/>
    </HeroImage>
        </Layout>
)

export default IndexPage
