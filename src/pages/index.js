import React from "react"

import { Layout } from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import GettingStartedComponent from "../components/getting-started"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "image 1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <Hero>
          {data.placeholderImage.childImageSharp.fluid.src}
          <h1>Take Your Broadcast To The Next Level</h1>
        </Hero>
        <GettingStartedComponent />
      </div>
    </Layout>
  )
}

export default IndexPage
