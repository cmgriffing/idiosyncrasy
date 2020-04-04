import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { InnerWrapper } from "./layout"
import { SlantedBorderElement } from "../common/slanted-borders-helpers"
import colors from "../common/colors"

const FooterElement = styled(SlantedBorderElement)`
  background: ${colors.backgrounds.footer};
`

const Footer = ({ siteTitle }) => (
  <FooterElement as="footer">
    <InnerWrapper>
      <div>
        <h4>
          <Link to="/">{siteTitle}</Link>
        </h4>
      </div>
    </InnerWrapper>
  </FooterElement>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
