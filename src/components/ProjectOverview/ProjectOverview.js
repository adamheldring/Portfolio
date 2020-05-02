import React from "react"
import Img from "gatsby-image"
import "./ProjectOverview.css"

const ProjectOverview = ({ projectTitle, projectSubtitle, projectImage, color }) => {
  const projectColor = {
    borderTop: `4px solid ${color}`
  }
  return (
    <div className="projectOverview">
      <h3 style={projectColor}>{projectSubtitle}</h3>
      <Img fluid={projectImage.childImageSharp.fluid} alt={projectTitle} />
    </div>
  )
}

export default ProjectOverview
