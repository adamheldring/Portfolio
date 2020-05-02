import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPage from "../components/LandingPage/LandingPage"

const IndexPage = ({ data }) => {
  const { ahlogo, portrait } = data
  const projects = data.allProjectsJson.edges.map(edge => edge.node)
  console.log(projects)
  return (
    <Layout>
      <SEO title="Resume" />
      <LandingPage projects={projects} logo={ahlogo} portrait={portrait} />
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
          color
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