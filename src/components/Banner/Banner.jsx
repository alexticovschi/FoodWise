import React from "react"
import banner from "../../images/banner.jpg"

import "./Banner.scss"

const Banner = () => {
  return (
    <div className="banner">
      <img className="banner__img" src={banner} alt="" />
      <h2 className="banner__title">Take A Taste & Come Join Us</h2>
    </div>
  )
}

export default Banner
