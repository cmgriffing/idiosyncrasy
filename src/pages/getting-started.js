import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Getting Started" />
    <div>
      <Image />
    </div>
    <h3>Getting Started</h3>
    <div className="row">
        <div className="column">Column One</div>
        <div className="column">Column Two</div>
    </div>
    <Link to="/features">Go to page 2</Link>
    <Link to="/getting-started">Go to page 3</Link>
  </Layout>
)

export default IndexPage
