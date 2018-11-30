import React, { Component } from 'react'
import { Link } from 'gatsby'
import Comp from '../images/cdp.jpg'


export default class jobs extends Component {
  render() {
    return (
      <div>
      <h1><Link to ='/'>Are we free?</Link></h1>
        <img src={Comp} alt="discussion"/>
      </div>
    )
  }
}
