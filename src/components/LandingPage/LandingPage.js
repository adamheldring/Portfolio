import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import "./LandingPage.css"
import ProjectOverview from "../ProjectOverview/ProjectOverview"

const LandingPage = ({ projects, logo, portrait }) => {
  console.log(projects)
  return (
    <div className="landingPage-container">
      <header className="lpHeader">
        <div className="lpHeader-contact-container">
          <div className="lpHeader-image-container">
            <Img fluid={portrait.childImageSharp.fluid} alt="Adam Heldring portrait" className="lpHeader-image-container-image" alt="Adam Heldring" />
          </div>
          <p>hello@adamheldring.com<br /> +46 708-841828</p>
        </div>
        <div className="lpHeader-info-container" style={{ position: "relative" }}>
          <h1 className="sr-only">Adam Heldring</h1>
          <Img fluid={logo.childImageSharp.fluid} alt="Adam Heldring logo" className="lpheader__namelogo" alt="Adam Heldring" />
          <h2 className="lpheader__title">FRONT-END WEB DEVELOPER</h2>
          <h3 className="lpheader__subtitle">With 10+ years as music industry and communications consultant.</h3>
          <p>
            <br />
              I’m a front-end developer and a world class learner. I’m also a
              music producer and sound designer. I have more than ten years of
              experience as a freelance consultant with roles like
              editor and copywriter so I know content but I love logical analysis
              and creative problem solving. I have a life-long love affair with
              music and my favorite thing in the world is getting a group of people
              in a room to create something out of nothing. I also have a previous
              IT-education and a bachelor in business economics. The red thread is a
              creative personality driven by technology and a constant need to
              know how things work.<br /><br />

              I have found a home for all of those
              things in web development and I now spend every day doing what I enjoy
              most – making things.
            </p>
          <div className="github-button-container">
            <a href="https://github.com/adamheldring" target="_blank" rel="noopener noreferrer" tabIndex="-1"><button>SEE MY GITHUB</button></a>
          </div>
        </div>
      </header>
      <section className="section-container lpTech-section">
        <h2 className="section-title">PROFESSIONAL WORK</h2>
        <div className="lpTechList-container">
          <div style={{ margin: "18px 0", fontSize: "16px" }}>
            💼 Currently agency work, previously freelance. Full time web developer since 2018. Agile sprint-based cross functional team projects building medium to large scale performance sensitive web apps with authentication and security awareness. Often working on simultaneous projects spanning from over a year down to two week prototypes. <br /><br />
            💻 Later projects include a large scale video streaming service, a human resources administration tool and a financial invoicing system. I can’t show proprietary code but I’m happy to discuss my role and contribution if you ask me directly.
          </div>
        </div>
        <h2 className="section-title">PERSONAL PROJECTS</h2>
        <div className="lpProjectOverview-container">
          {projects
            .map(project => (
              <Link key={project.id} to={`/projects/${project.slug}`}>
                <ProjectOverview
                  projectTitle={project.title}
                  projectSubtitle={project.subtitle}
                  projectImage={project.image}
                  color={project.color} />
              </Link>)
            )
          }
        </div>
      </section>
      <section className="section-container lpSkills-section">
        <h2 className="section-title">SKILLS</h2>
        <div className="section-content-division">
          <h3 className="division-title">CODE</h3>
          <ul>
            <li>JavaScript ES6</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Next.js</li>
            <li>Gatsby</li>
            <li>Bootstrap</li>
            <li>TailwindCSS</li>
            <li>React Spring</li>
            <li>SASS</li>
            <li>Git</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Redux</li>
            <li>MobX</li>
            <li>Tone.js</li>
            <li>Web Audio API</li>
            <li>HTML Canvas</li>
            <li>BEM methodology</li>
          </ul>
        </div>
        <div className="section-content-division">
          <h3 className="division-title">TOOLBOX</h3>
          <ul>
            <li>VSCode</li>
            <li>iTerm2</li>
            <li>GitHub</li>
            <li>Logic Pro X</li>
            <li>Pro Tools HD</li>
            <li>FMOD Studio</li>
            <li>Adobe Photoshop</li>
            <li>Postman</li>
            <li>Notion</li>
            <li>Trello</li>
            <li>Pivotal Tracker</li>
            <li>Slack</li>
            <li>Keynote</li>
            <li>MyNewsdesk</li>
            <li>Microsoft Excel</li>
          </ul>
        </div>
        <div className="section-content-division section-content-division--stacked-wrapper">
          <div className="section-content-division--stacked">
            <h3 className="division-title">MORE</h3>
            <ul>
              <li>Copywriting</li>
              <li>Text editing</li>
              <li>Audio engineering</li>
              <li>Audio composition</li>
              <li>Music & podcast production</li>
              <li>Agile methodology</li>
            </ul>
          </div>
          <div className="section-content-division--stacked">
            <h3 className="division-title">UPCOMING</h3>
            <ul>
              <li>Digging deeper into testing</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section-container lpStudies-section">
        <h2 className="section-title">STUDIES</h2>
        <div className="section-content-division studies-division">
          <h3 className="division-title">FRONT-END DEVELOPER</h3>
          <p>
            Full-time 3 month boot camp and intensive program. Covering programming fundamentals to how to structure and
            build bigger web projects. JavaScript focus with 50+ individual tasks (in HTML5, CSS, JavaScript,
            JSX, React, Node.js) and 6 team projects with public demos together with
            companies like Volumental, Expressen, Comprend and Svenska Spel.
              <br />Stockholm Sep-Nov 2018
            </p>
        </div>
        <div className="section-content-division studies-division">
          <h3 className="division-title">TECHNICAL YEAR @ KTH</h3>
          <p>1 year at the Royal Institute of Technology (KTH).
          Mixed technical courses including Java programming, math and
          physics.
              <br />Stockholm 2002-2003
            </p>
        </div>
        <div className="section-content-division studies-division">
          <h3 className="division-title">IT-PROGRAM</h3>
          <p>
            3 year specially designed IT-program at Rekarne High School,
            Eskilstuna. Science program with distinct IT focus covering
            computer engineering, programming basics (mainly Visual Basic),
            SQL databases, computer networks, electronics, advanced high school math and physics.
              <br />Eskilstuna 1998-2001
            </p>
        </div>
        <div className="section-content-division studies-division">
          <h3 className="division-title">BACHELOR IN<br />BUSINESS ECONOMICS</h3>
          <p>
            3 years at Kalmar University covering the fundamentals of economics,
            project management, leadership, marketing and copyright law. Music
            business major with third year organization and leadership focus.
              <br />Kalmar 2003-2006
            </p>
        </div>
        <div className="section-content-division studies-division">
          <h3 className="division-title">INTERNATIONAL INTERNSHIP</h3>
          <p>1 year living in New York City with a paid internship at
          the music booking agency The Agency Group.
              <br />New York 2006
            </p>
        </div>
      </section>
      <section className="section-container experience-section">
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="lpExperience-container">
          <p>Web Developer @ Will & Skill • Head of Press @ Stockholm Culture Festival • Head of Press @ Kulturnatt Stockholm •
          Press Contact @ Musikhjälpen • Sound Designer @ Sergeant Tom • Sound Designer @ Make Your Mark •
          Sound Engineer @ Studiefrämjandet • Personal Press Planner @ Kofi Annan’s visit to Sweden •
          Columnist @ Eskilstuna Kuriren • Press Coordinator @ European Figure Skating Championships •
          Press Center Manager @ Inauguration of Tele2Arena • Backstage Manager @ Volkswagen launch of The New Beetle •
          Stage & Production Manager @ Peace&Love-Festival, Nalen, Södra Teatern.
            </p>
        </div>
        <div className="lpLinkedin-button-container studies-division">
          <a href="https://www.linkedin.com/in/adam-heldring-947062173/" target="_blank" rel="noopener noreferrer" tabIndex="-1"><button>SEE MY LINKEDIN</button></a>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
