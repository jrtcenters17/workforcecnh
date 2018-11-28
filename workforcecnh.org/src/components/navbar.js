import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tricnh from '../images/tricnh.png'



/* Position the navbar container inside the image */


/* The navbar */
const topNav = styled.div` 
  overflow: hidden;
  background-color: #333;
`

/* Navbar links */
const menuList = styled.ul` 
  float: right;
  text-align: right;
  padding: 14px 16px;
  list-style: none;
  font-size: 17px;
  position: relative;
`
export default class NavBar extends Component {
  render() {
    return (
  <div>
    <topNav>
    <img src={tricnh} alt="cnh"/>
        <menuList>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/about">About</Link></li>
          <li><Link to ="/programs">Programs</Link></li>
          <li> <Link to ="/education">Education</Link></li>
       </menuList>
      
    </topNav>
  </div>
    )
  }
}
