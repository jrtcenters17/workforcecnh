import React from 'react'
import { Link } from 'gatsby'
import NavBar from './navbar'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#305d60',
      marginBottom: 'none',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#afeff4',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
          <NavBar/>
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
