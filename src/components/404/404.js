import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import "./404.css"



const NoMatchPage = () => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      elvis: file(relativePath: { eq: "ElvisPresleyReturnToSender.png" }) {
        childImageSharp {
          fixed(height: 225) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div className="noMatchPage">
      <Link to="/">&#8592; Back</Link>
      <div>
        <h1>Sorry, no such page...</h1>
        <p><i>"Return to sender, address unknown,<br />  no such number, no such zone"</i></p>
        <h5>- Elvis Presley, 1962</h5>
      </div>
      <a href="https://en.wikipedia.org/wiki/Return_to_Sender_(song)" target="_blank" rel="noopener noreferrer">
        <Img fixed={data.elvis.childImageSharp.fixed} alt="Elvis Presley - Return to sender" />
      </a>
    </div>
  )
}

export default NoMatchPage
