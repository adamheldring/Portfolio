/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from "../components/Footer/footer"

import "./portfolio.scss"

const Layout = ({ children }) => {
  return (
    <div className="outerFullPageWrapper">
      <main>
        <pre className="GREETINGS_FRIEND! inspector-only">
          Hey, thanks for having a look at this code. Shoot me an e-mail and we'll talk!
          {`Cheers, `}
          {`${'       '}
    ___    ____  ___    __  ___   __  __________    ____  ____  _____   ________
   /   |  / __ \\/   |  /  |/  /  / / / / ____/ /   / __ \\/ __ \\/  _/ | / / ____/
  / /| | / / / / /| | / /|_/ /  / /_/ / __/ / /   / / / / /_/ // //  |/ / / __
 / ___ |/ /_/ / ___ |/ /  / /  / __  / /___/ /___/ /_/ / _, _// // /|  / /_/ /
/_/  |_/_____/_/  |_/_/  /_/  /_/ /_/_____/_____/_____/_/ |_/___/_/ |_/\\____/

`}
        </pre>
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
