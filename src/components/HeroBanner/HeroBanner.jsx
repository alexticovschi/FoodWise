import React from "react"

import "./HeroBanner.scss"

const HeroBanner = ({ title, subtitle, children }) => {
  return (
    <div className="hero-banner">
      <h1 className="hero-banner__title">{title}</h1>
      <p className="hero-banner__subtitle">{subtitle}</p>
      {children}
    </div>
  )
}

export default HeroBanner
