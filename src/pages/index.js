import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { projects } from "../data/projects"


const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Portfolio – Resume" />
      <h1>Landing</h1>
      {projects.map(project => <h2 key={project.id}>{project.title}</h2>)}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
