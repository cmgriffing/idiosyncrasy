import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { InnerWrapper } from "./layout"

import colors from "../common/colors"

const navLinks = [
  {
    title: "Features",
    route: "/features",
  },
  {
    title: "Support",
    route: "/support",
  },
  {
    title: "Pricing",
    route: "/pricing",
  },
  {
    title: "News",
    route: "/news",
  },
]

const navButtons = [
  {
    title: "Login",
  },
  {
    title: "Sign Up",
  },
]

const StyledHeader = styled.header`
  background: ${colors.backgrounds.header};
`

const StyledNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  place-items: center;
`

const NavButtonWrapper = styled.div`
  & ${NavButton}:nth-child(2) {
    background-color: ${colors.actions.main};
    color: #fff;
  }
`

const NavButton = styled.a`
  padding: 25px;
  color: #000;
  background-color: transparent;
  text-decoration: none;
`

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin: 0 25px;
`

const HeaderLogo = styled(HeaderLink)`
  font-size: 36px;
  font-weight: 500;
  line-height: 54px;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <InnerWrapper>
      <StyledNavContainer>
        <HeaderLogo to="/">{siteTitle}</HeaderLogo>

        <div>
          {navLinks.map(link => (
            <HeaderLink to={link.route}>{link.title}</HeaderLink>
          ))}
        </div>

        <NavButtonWrapper>
          {navButtons.map(link => (
            <NavButton>{link.title}</NavButton>
          ))}
        </NavButtonWrapper>
      </StyledNavContainer>
    </InnerWrapper>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
