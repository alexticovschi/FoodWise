import React from "react"

import "./Hero.scss"
import hero from "../../images/hero.jpg"

const Hero = () => {
  return (
    <div className="bg">
      <img className="hero-img" src={hero} alt="" />
      <section className="hero" id="home">
        <div className="hero__content">
          <h1 className="hero__name">Take your daily food everywhere!</h1>
          <p className="hero__subtitle">
            Creative Ideas * Professional Staff * Sensational Food.
          </p>

          <button className="hero__btn">Call Us Now</button>
        </div>
      </section>
    </div>
  )
}

export default Hero
