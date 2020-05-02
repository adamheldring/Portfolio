import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"


const IndexPage = ({ data }) => {
  const { ahlogo, portrait } = data
  const projects = data.allProjectsJson.edges.map(edge => edge.node)
  console.log(projects)
  return (
    <Layout>
      <SEO title="Portfolio – Resume" />
      <h1>Landing</h1>
      {projects.map(project => {
        console.log("PROJECT: ", project.image)
        return (
          <div>
            <h2 key={project.id}>{project.title}</h2>
            <Img fluid={project.image.childImageSharp.fluid} alt={project.title} />
          </div>
        )
      })}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Img fluid={ahlogo.childImageSharp.fluid} />
        <Img fluid={portrait.childImageSharp.fluid} />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout >
  )
}

export default IndexPage

export const imageQuery = graphql`
  query {
    ahlogo: file(relativePath: { eq: "ah_logo_black.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    portrait: file(
      relativePath: {
        eq: "ah_portrait.jpg"
      }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allProjectsJson {
      edges {
        node {
          id
          title
          subtitle
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`