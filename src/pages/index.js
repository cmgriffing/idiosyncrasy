import React from "react"

import { Layout } from "../components/layout"
import SEO from "../components/seo"
import GettingStartedComponent from "../components/getting-started"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <GettingStartedComponent />
    </div>
  </Layout>
)

export default IndexPage
