import React from "react"

import "./Banner.scss"

const Banner = ({ title, subtitle, children }) => {
  return (
    <div className="banner">
      <h1 className="banner__title">{title}</h1>
      <p className="banner__subtitle">{subtitle}</p>
      {children}
    </div>
  )
}

export default Banner
