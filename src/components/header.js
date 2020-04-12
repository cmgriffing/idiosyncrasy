import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { InnerWrapper } from "./layout"

import colors from "../common/colors"
import fonts from "../common/fonts"

const StyledHeader = styled.header`
  background: ${colors.backgrounds.header};
`

const StyledNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  place-items: center;
`

const NavButton = styled.a`
  padding: 25px;
  color: #000;
  background-color: transparent;
  text-decoration: none;
`

const NavButtonWrapper = styled.div`
  & ${NavButton}:nth-child(2) {
    background-color: ${colors.actions.main};
    color: #fff;
  }
`

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin: 0 25px;
  font-family: ${fonts.headerFont};
`

const HeaderLogo = styled(HeaderLink)`
  font-size: 36px;
  font-weight: 500;
  line-height: 60px;
  font-family: ${fonts.headerFont};
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <InnerWrapper>
      <StyledNavContainer>
        <HeaderLogo to="/">{siteTitle}</HeaderLogo>

        <div>
          <HeaderLink to="features">Features</HeaderLink>
          <HeaderLink to="support">Support</HeaderLink>
          <HeaderLink to="pricing">Pricing</HeaderLink>
          <HeaderLink to="news">News</HeaderLink>
        </div>

        <NavButtonWrapper>
          <NavButton>Login</NavButton>
          <NavButton>Sign Up</NavButton>
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
