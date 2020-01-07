import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import "./EventList.scss"

const getEventImages = graphql`
  query eventImages {
    corporate: file(relativePath: { eq: "events/corporate.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    weddings: file(relativePath: { eq: "events/weddings.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    special: file(relativePath: { eq: "events/special.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const EventList = () => {
  const { corporate, weddings, special } = useStaticQuery(getEventImages)

  return (
    <section className="event-list">
      <div className="event-corporate">
        <div className="event-corporate__info">
          <div className="event-corporate__text">
            <h2 className="event-corporate__title">Corporate Events</h2>
            <p>
              We bring a sense of style and logistical know-how to a wide range
              of corporate events, whether client receptions, dinners, press
              days or fashion events. The team is adept at working with your
              brand identity and creating an event that is a clear reflection of
              your goals and target audience.
            </p>
            <Link to="/events/corporate">
              <button className="event-btn">Read More</button>
            </Link>
          </div>
          <figure className="event-corporate__img-wrapper">
            <Image
              fluid={corporate.childImageSharp.fluid}
              className="event-corporate__img"
              alt="event corporate"
            />
          </figure>
        </div>
      </div>

      <div className="event-weddings">
        <div className="event-weddings__info">
          <figure className="event-weddings__img-wrapper">
            <Image
              fluid={weddings.childImageSharp.fluid}
              className="event-weddings__img"
              alt="event weddings & festive dinners"
            />
          </figure>
          <div className="event-weddings__text">
            <h2 className="event-weddings__title">Weddings, Festive Dinners</h2>
            <p>
              Whether you want an elegant Champagne reception with chic canapés,
              a refined three course sit down dinner, a welcoming buffet with
              all the trimmings, friendly bowl food, or a combination of all of
              the above, we will work with you to create your perfect menu.
            </p>
            <Link to="/events/weddings">
              <button className="event-btn">Read More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="event-special">
        <div className="event-special__info">
          <div className="event-special__text">
            <h2 className="event-special__title">Special Events</h2>
            <p>
              We have been lucky enough to contribute to countless special
              celebrations, whether birthdays, anniversaries or just gatherings
              of friends. Each event is special to us and we bring the same
              sense of fun, creativity and imagination to everything we do.
            </p>
            <Link to="/events/special">
              <button className="event-btn">Read More</button>
            </Link>
          </div>
          <figure className="event-special__img-wrapper">
            <Image
              fluid={special.childImageSharp.fluid}
              className="event-special__img"
              alt="event special"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default EventList
