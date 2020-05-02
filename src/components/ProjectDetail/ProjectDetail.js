import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "./ProjectDetail.css"

const ProjectPage = ({ project }) => {
  return (
    <div className="projectPage-container">
      <Link className="ppBacklink" to="/">
        <div className="ppBacklink-content-wrapper">
          <svg className="ppBackarrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 13h8V7h-8V2l-8 8 8 8v-5z" />
          </svg>
            Back
          </div>
      </Link>
      <Img fluid={project.image.childImageSharp.fluid} alt={project.subtitle} />
      <h1>{project.title.toUpperCase()}</h1>
      <h2>{project.subtitle.toUpperCase()}</h2>
      <p dangerouslySetInnerHTML={{ __html: project.description }} />
      <a href={project.link} target="_blank" rel="noopener noreferrer" tabIndex="-1"><button>SEE IT LIVE</button></a>
      <div className="ppTech-container">
        <h1>TECH SPECHS</h1>

        <div className="ppTechSection-container">
          <h3>CODE</h3>
          <ul>
            {project.tech.code.map((item, index) => <li key={`Tech-${index}`}>{item}</li>)}
          </ul>
        </div>

        <div className="ppTechSection-container">
          <h3>TOOLBOX</h3>
          <ul>
            {project.tech.toolbox.map((item, index) => <li key={`Tool-${index}`}>{item}</li>)}
          </ul>
        </div>

        <div className="ppTechSection-container">
          <h3>MORE</h3>
          <ul>
            {project.tech.more.map((item, index) => <li key={`More-${index}`}>{item}</li>)}
          </ul>
        </div>
      </div>
      <div className="ppCodeButton-container">
        <a href={project.repo} target="_blank" rel="noopener noreferrer" tabIndex="-1"><button>VIEW THE CODE</button></a>
      </div>
    </div>
  )
}

export default ProjectPage
