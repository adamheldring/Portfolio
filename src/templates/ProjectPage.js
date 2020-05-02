import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!){
    projectsJson(slug: {eq: $slug}) {
      title
      subtitle
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      link
      repo
      description
      tech {
        code
        toolbox
        more
      }
    }
  }
`

const ProjectPage = ({ data }) => {
  const project = data.projectsJson
  console.log("FROM PROJECT DETAIL: ", project)
  return (
    <Layout>
      <SEO title={`Portfolio – Project: ${project.title}`} />
      <h1>{project.title}</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <h2>{project.subtitle}</h2>
        <p>{project.description}</p>
      </div>
      <Img fluid={project.image.childImageSharp.fluid} alt={project.title} />
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default ProjectPage