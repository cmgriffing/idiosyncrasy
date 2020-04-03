import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Image />
    </div>
    <Link to="/features">Go to page 2</Link>
  </Layout>
)

export default IndexPage
