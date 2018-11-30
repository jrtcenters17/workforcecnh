import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavNav = styled.div`
text-decoration: none;
`



const NavTop = styled.ul`
list-style: none;
display: flex;
justify-content: space-evenly;
text-decoration: none;
`

export default function navbar() {
  return (
    <NavNav>
      <NavTop>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/about">About</Link></li>
          <li><Link to ="/programs">Programs</Link></li>
          <li><Link to ="/jobs">Jobs</Link></li>
          <li><Link to ="/news">News</Link></li>
      </NavTop>
    </NavNav>
  )
}
