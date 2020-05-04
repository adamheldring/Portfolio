/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, Fragment } from "react"
import PropTypes from "prop-types"
import Footer from "../components/Footer/footer"
import logAsciiArt from "../helpers/logAsciiArt"

import "./portfolio.scss"

const Layout = ({ children }) => {
  useEffect(() => {
    logAsciiArt()
  }, [])
  return (
    <Fragment>
      <div className="outerFullPageWrapper">
        <main>{children}</main>
        <Footer />
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
