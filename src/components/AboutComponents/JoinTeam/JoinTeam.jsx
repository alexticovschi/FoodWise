import React from "react"
import { Link } from "gatsby"

import "./JoinTeam.scss"

const JoinTeam = () => {
  return (
    <section className="join-team">
      <h2 className="join-team__title">Join the Team</h2>
      <p className="join-team__text">
        If you have a passion for catering and events, you could be just the
        right person to join our team. Explore our available opportunities.
      </p>
      <Link className="btn" to="/about">
        Learn More
      </Link>
    </section>
  )
}

export default JoinTeam
