import React from "react"
import { Link } from "gatsby"
import "./Coordinate.scss"

const Coordinate = () => {
  return (
    <section className="coordinate">
      <h1 className="coordinate__title">We Can Coordinate Everything</h1>
      <p className="coordinate__text">
        You can rely on FoodWise for gourmet wedding catering services and
        vendor coordination. Our star culinary experts and highly trained
        servers have earned us a stellar reputation among London area event
        venues.
      </p>
      <Link className="btn" to="/events/weddings">
        Find Out More
      </Link>
    </section>
  )
}

export default Coordinate
