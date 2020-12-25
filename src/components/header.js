import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { InnerWrapper } from "./layout"

import colors from "../common/colors"
import fonts from "../common/fonts"
import breakpoints from "../common/breakpoints"

const StyledHeader = styled.header`
  background: ${colors.backgrounds.header};
`

const StyledNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  place-items: center;
  line-height: 60px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 16px;
    font-height: inherit;
    padding: 0 10px;
    justify-content: center;
    flex-wrap: wrap;
  }
`

const NavButton = styled.a`
  padding: 25px;
  color: ${colors.typography.dark};
  background-color: ${colors.backgrounds.header};
  text-decoration: none;
  padding: 0px 10px;

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 16px;
  }
`

const SignupButton = styled(NavButton)`
  display: inline-block;
  background-color: ${colors.actions.main};
  color: ${colors.typography.light};
  padding: 0px 10px;
  height: 100%;

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 16px;
  }
`

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: ${colors.typography.dark};
  padding: 0 10px;

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 16px;
  }
`

const HeaderLogo = styled(HeaderLink)`
  font-size: 36px;
  font-weight: 500;
  line-height: 60px;
  font-family: ${fonts.logoFont};

  @media (max-width: ${breakpoints.tablet}px) {
    display: none;
  }

`

const HeaderGroup = styled.div`
  display: flex;
  flex-wrap: no-wrap;
`
const Header = ({ siteTitle }) => (
  <StyledHeader>
    <InnerWrapper>
      <StyledNavContainer>
        <HeaderLogo to="/">{siteTitle}</HeaderLogo>

        <HeaderGroup>
          <HeaderLink to="features">Features</HeaderLink>
          <HeaderLink to="support">Support</HeaderLink>
          <HeaderLink to="pricing">Pricing</HeaderLink>
          <HeaderLink to="news">News</HeaderLink>
        </HeaderGroup>

        <HeaderGroup>
          <NavButton>Login</NavButton>
          <SignupButton>Sign Up</SignupButton>
        </HeaderGroup>
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
