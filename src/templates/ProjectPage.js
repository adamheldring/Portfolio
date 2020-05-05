import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectDetail from "../components/ProjectDetail/ProjectDetail"

export const query = graphql`
  query($slug: String!){
    projectsJson(slug: {eq: $slug}) {
      title
      subtitle
      image {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      link
      repo
      description
      color
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
  return (
    <Layout>
      <SEO title={`${project.title}`} />
      <ProjectDetail project={project} />
    </Layout>
  )
}

export default ProjectPage