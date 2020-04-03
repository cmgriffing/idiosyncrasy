import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { InnerWrapper } from "./layout"

import colors from "../common/colors"

const StyledHeader = styled.header`
  background: ${colors.backgrounds.header};
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <InnerWrapper>
      <div>
        <h1>
          <Link>{siteTitle}</Link>
        </h1>
      </div>
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
