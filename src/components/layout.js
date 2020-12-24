/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

import breakpoints from "../common/breakpoints"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "./globals.css"

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
      <Helmet>
        {/* Poppins Font Logo Font*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        {/* IBM Plex Sans Font Normal Text*/}
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />

      <div
        style={{
          minHeight: "500px",
        }}
      >
        <main>{children}</main>
      </div>
      <Footer
        siteTitle={data.site.siteMetadata.title}
        pages={["Features", "Support", "News", "Login", "Sign Up"]}
      />
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
