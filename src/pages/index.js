import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import GettingStartedComponent from "../components/getting-started"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Image />
      <GettingStartedComponent />
    </div>
    <Link to="/getting-started">Go to page 3</Link>
  </Layout>
)

export default IndexPage
