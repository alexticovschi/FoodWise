import React from "react"
import { Link } from "gatsby"

import "./TrustedPartner.scss"

const TrustedPartner = () => {
  return (
    <section className="trusted">
      <h1 className="trusted__title">Your Trusted Partner</h1>
      <p className="trusted__text">
        Our clients expect the best, and we deliver the best. FoodWise’ star
        culinary talent and service make us a corporate event catering company
        you can always count on.
      </p>
      <Link className="btn" to="/events/corporate">
        Let's Talk About Your Idea
      </Link>
    </section>
  )
}

export default TrustedPartner
