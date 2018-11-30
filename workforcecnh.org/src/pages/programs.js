import React, { Component } from 'react'
import styled from 'styled-components'
import blakBizwomen from '../images/blakbizwomen.jpg'
import Layout from '../components/layout';



const proTitle = styled.div`
h1 {
  font-weight: bold;
}


`

















export default class programs extends Component {
  render() {
    return (
      <Layout>
      <div>
      <img src={blakBizwomen} alt=""/>
        <proTitle>Transitional Jobs</proTitle>
        <p>We folks get jobs</p>
        </div>
        </Layout>
    )
  }
}
