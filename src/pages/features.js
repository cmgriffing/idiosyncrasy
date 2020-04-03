import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/layout"
import SEO from "../components/seo"

const Features = () => (
  <Layout>
    <SEO title="Features" />
    <h1>Features</h1>
    <p>Welcome to Features</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Features
