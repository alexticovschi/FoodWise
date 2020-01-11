import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import "./RealEvents.scss"

const getImage = graphql`
  query venue1 {
    venue1: file(relativePath: { eq: "events/venue2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const RealEvents = () => {
  const { venue1 } = useStaticQuery(getImage)

  return (
    <section className="real-events">
      <div className="real-event">
        <figure className="real-event__img-wrapper">
          <Image
            fluid={venue1.childImageSharp.fluid}
            className="real-event__img"
            alt="real event venue"
          />
        </figure>
        <div className="real-event__info">
          <div className="real-event__title-wrapper">
            <h1 className="real-event__title">Real Events</h1>
          </div>
          <div className="real-event__text">
            <p>
              People love to see behind the scenes and magic of FoodWise events.
              Click here, to take a step into our world and see how we bring a
              brief and idea to life.
            </p>
            <p>
              At FoodWise, we are more than a catering company. We know how to
              set an event apart and make it truly spectacular.
            </p>
          </div>
          <Link className="btn real-event__btn" to="/events">
            See More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RealEvents
