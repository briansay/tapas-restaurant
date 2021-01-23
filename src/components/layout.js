/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
      <Footer />
    </>
  )
}

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
