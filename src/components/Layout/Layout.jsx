import React from "react"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default Layout
