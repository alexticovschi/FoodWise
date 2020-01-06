import React from "react"
import "./Options.scss"

import dish from "../../../../images/events/weddings/svg/dish.svg"
import chair from "../../../../images/events/weddings/svg/chair.svg"
import file from "../../../../images/events/weddings/svg/file.svg"
import plan from "../../../../images/events/weddings/svg/floor-plan.svg"
import flower from "../../../../images/events/weddings/svg/flower.svg"
import linen from "../../../../images/events/weddings/svg/linen.svg"
import star from "../../../../images/events/weddings/svg/star.svg"
import venue from "../../../../images/events/weddings/svg/venue.svg"
import table from "../../../../images/events/weddings/svg/table.svg"

const Options = () => {
  return (
    <section className="options">
      <h1 className="options__title">A Host Of Options</h1>
      <div className="options__wrapper">
        <figure className="option">
          <img className="option__icon" src={dish} alt="dish icon" />
          <p className="option__text">China and flatware to suit your style</p>
        </figure>
        <figure className="option">
          <img className="option__icon" src={table} alt="table icon" />
          <p className="option__text">Tables in numerous sizes</p>
        </figure>
        <figure className="option">
          <img className="option__icon" src={plan} alt="plan icon" />
          <p className="option__text">Endless floor plan capabilities</p>
        </figure>
        <figure className="option">
          <img className="option__icon" src={chair} alt="chair icon" />
          <p className="option__text">
            Unique seating styles to match your vision
          </p>
        </figure>
        <figure className="option">
          <img className="option__icon" src={linen} alt="linen icon" />
          <p className="option__text">Linens in endless colors and textures</p>
        </figure>
        <figure className="option">
          <img className="option__icon" src={star} alt="star icon" />
          <p className="option__text">State-of-the-art equipment</p>
        </figure>
        <figure className="option">
          <img className="option__icon" src={venue} alt="venue icon" />
          <p className="option__text">Total flexibility working in any venue</p>
        </figure>
        <figure className="option">
          <img className="option__icon" src={flower} alt="flower icon" />
          <p className="option__text">Inspired décor and floral arrangements</p>
        </figure>
      </div>
    </section>
  )
}

export default Options
