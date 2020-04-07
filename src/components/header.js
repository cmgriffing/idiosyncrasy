import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { InnerWrapper } from "./layout"
import { CTAButton } from "../common/buttons"

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
  {
    title: "Login",
    cta: true,
  },
  {
    title: "Sign Up",
    cta: true,
  },
]

const StyledHeader = styled.header`
  background: ${colors.backgrounds.header};
  h1 {
    margin: auto 0;
  }
`

const StyledNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  place-items: center;
`

const NavButtonWrapper = styled.div`
  & ${CTAButton}:nth-child(2) {
    background-color: ${colors.actions.main};
    color: #fff;
  }
`

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #000;
  margin: 0 50px;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <InnerWrapper>
      <StyledNavContainer>
        <h1>
          <HeaderLink to="/">{siteTitle}</HeaderLink>
        </h1>

        <div>
          {navLinks.map(link => {
            if (!link.cta) {
              return <HeaderLink to={link.route}>{link.title}</HeaderLink>
            }
          })}
        </div>

        <NavButtonWrapper>
          {navLinks.map(link => {
            if (link.cta) {
              return <CTAButton>{link.title}</CTAButton>
            }
          })}
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
