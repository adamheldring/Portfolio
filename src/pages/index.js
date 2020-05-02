import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { projects } from "../data/projects"


const IndexPage = ({ data }) => {
  const { ahlogo, portrait } = data
  return (
    <Layout>
      <SEO title="Portfolio – Resume" />
      <h1>Landing</h1>
      {projects.map(project => <h2 key={project.id}>{project.title}</h2>)}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
        <Img fluid={ahlogo.childImageSharp.fluid} />
        <Img fluid={portrait.childImageSharp.fluid} />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
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
  }
`