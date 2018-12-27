import React from 'react'
import { Link } from 'gatsby'
import NavBar from './navbar'
import styled from 'styled-components'

const Container = styled.div`
  background: #305d60;
  margin-bottom: 1.45rem;
`

const Inner = styled.div`
   margin: 0 auto;
   max-width: 960px;
   padding: 1.45rem 1.0875rem;
`

const Heading = styled.h1`
   margin: 0 auto;
`

const HeadingLink = styled(Link)`
   color: #3dc7d2;
   text-decoration: none;
`




const Header = ({ siteTitle }) => (
 <Container>
 <Inner>
      <Heading>
        <HeadingLink>
          {siteTitle}
        </HeadingLink>
        <NavBar/>
      </Heading>
      </Inner>
 </Container>
)


export default Header
