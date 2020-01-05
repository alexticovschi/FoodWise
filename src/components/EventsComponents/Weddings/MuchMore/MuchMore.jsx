import React from "react"
import { Link } from "gatsby"

import "./MuchMore.scss"

const MuchMore = () => {
  return (
    <section className="muchmore">
      <h1 className="muchmore__title">Weddings & Much More</h1>
      <p className="muchmore__text">
        From wedding catering menus and room design to additional services like
        flowers and photography, FoodWise Catering values the small details to
        make sure your wedding will be unforgettable.
      </p>
      <Link to="/about">
        <button className="muchmore__btn">Contact an Event Designer</button>
      </Link>
    </section>
  )
}

export default MuchMore
