/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

import breakpoints from "../common/breakpoints"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const _Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          minHeight: "500px",
        }}
      >
        <main>{children}</main>
      </div>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

_Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export const Layout = _Layout

export const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: ${breakpoints.mobile}px;

  @media (min-width: ${breakpoints.mobile}px) {
    max-width: ${breakpoints.tablet}px;
  }
  @media (min-width: ${breakpoints.tablet}px) {
    max-width: ${breakpoints.medium}px;
  }
  @media (min-width: ${breakpoints.medium}px) {
    max-width: ${breakpoints.large}px;
  }
  @media (min-width: ${breakpoints.large}px) {
    max-width: ${breakpoints.xl}px;
  }
  @media (min-width: ${breakpoints.xl}px) {
    max-width: ${breakpoints.xxl}px;
  }
`
