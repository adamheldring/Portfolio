import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NoMatchPage from "../components/404/404"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NoMatchPage />
  </Layout>
)

export default NotFoundPage
