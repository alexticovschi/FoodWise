import React from "react"
import { Link } from "gatsby"
import "./Brand.scss"

const Brand = () => {
  return (
    <section className="brand">
      <h1 className="brand__title">We Understand Your Brand</h1>
      <p className="brand__text">
        Yes, designing enterprise catered events is one of our defining areas of
        expertise. But FoodWise Catering provides so much more than food and
        beverage. Our best-in-class work elevates our clients’ sophisticated
        branding and hospitality goals.
      </p>
      <Link className="btn" to="/events/special">
        Let's Discuss Your Event
      </Link>
    </section>
  )
}

export default Brand
