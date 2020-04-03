import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/layout"
import SEO from "../components/seo"

const Support = () => (
  <Layout>
    <SEO title="Support" />
    <h1>Support</h1>
    <p>Welcome to Support</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Support
