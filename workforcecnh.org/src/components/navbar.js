import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavNav = styled.div`
text-decoration: none;
`



const NavTop = styled.div`
list-style: none;
display: flex;
justify-content: space-evenly;
`
const NavLink = styled(Link)`
    color: 	#3d8389;
    text-decoration: none;
`
export default function navbar() {
  return (
    <NavNav>
      <NavTop>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/news">News</NavLink>
      </NavTop>
    </NavNav>
  )
}
