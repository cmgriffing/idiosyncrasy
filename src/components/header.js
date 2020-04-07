import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { FlexWrapper } from "../common/wrappers"
import { InnerWrapper } from "./layout"
import { CTAButton } from "../common/buttons"

import colors from "../common/colors"

const StyledHeader = styled.header`
  background: ${colors.backgrounds.header};
  h1 {
    margin: auto 0;
  }
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

const Header = ({ siteTitle, navLinks }) => (
  <StyledHeader>
    <InnerWrapper>
      <FlexWrapper>
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
      </FlexWrapper>
    </InnerWrapper>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  navLinks: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  navLinks: [],
}

export default Header
