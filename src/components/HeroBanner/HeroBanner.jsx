import React from "react"

import "./HeroBanner.scss"

const HeroBanner = ({ title, subtitle, children }) => {
  return (
    <div className="banner">
      <h1 className="banner__title">{title}</h1>
      <p className="banner__subtitle">{subtitle}</p>
      {children}
    </div>
  )
}

export default HeroBanner
