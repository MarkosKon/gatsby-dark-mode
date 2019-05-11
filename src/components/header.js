// src/components/header.js

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import Toggle from "./Toggle"

import sun from "../images/sun.png"
import moon from "../images/moon.png"
import { useTheme } from "../context/theme-context"

const Container = styled.header`
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bgDark};
  margin-bottom: 1.45rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color};
  }
`

const Header = ({ siteTitle }) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <Container>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <Toggle
          defaultChecked={theme === "dark" ? true : false}
          onChange={toggleTheme}
          icons={{
            checked: (
              <img
                style={{ pointerEvents: "none" }}
                width="16"
                height="16"
                alt="moon"
                aria-hidden
                src={moon}
              />
            ),
            unchecked: (
              <img
                style={{ pointerEvents: "none" }}
                width="16"
                height="16"
                alt="sun"
                aria-hidden
                src={sun}
              />
            ),
          }}
        />
      </div>
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
