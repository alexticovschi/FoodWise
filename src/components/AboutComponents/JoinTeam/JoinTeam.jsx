import React from "react"
import { Link } from "gatsby"

import "./JoinTeam.scss"

const JoinTeam = () => {
  return (
    <section className="join-team">
      <h1 className="join-team__title">Join the Team</h1>
      <p className="join-team__text">
        If you have a passion for catering and events, you could be just the
        right person to join our team. Explore our available opportunities.
      </p>
      <Link to="/about">
        <button className="event-btn">Learn More</button>
      </Link>
    </section>
  )
}

export default JoinTeam
