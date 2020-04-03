import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { InnerWrapper } from "./layout"

const Footer = ({ siteTitle }) => (
  <footer>
    <InnerWrapper>
      <div>
        <h4>
          <Link to="/">{siteTitle}</Link>
        </h4>
      </div>
    </InnerWrapper>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
