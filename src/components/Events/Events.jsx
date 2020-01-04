import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "./Events.scss"

const getMenuImages = graphql`
  query menuImages {
    corporate: file(relativePath: { eq: "home-events/corporate.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wedding: file(relativePath: { eq: "home-events/wedding.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    special: file(relativePath: { eq: "home-events/special.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Events = () => {
  const { corporate, wedding, special } = useStaticQuery(getMenuImages)
  return (
    <section className="events">
      <h1 className="events__title">Events</h1>
      <p className="events__subtitle">
        Regardless of the event, whether catering for a corporate, private or
        wedding party, we embrace the opportunity to customize basic menus to
        meet the culinary preferences of customers and budget requirements.
      </p>

      <figure className="events__list">
        <figure className="event">
          <Image
            fluid={corporate.childImageSharp.fluid}
            className="event__img"
            alt="event"
          />
          <div className="event__content">
            <h2 className="event__name">Corporate Events</h2>
            <p className="event__text">
              From product launches and conference catering through to corporate
              staff parties and teaching. we understand that each brand is
              different, and that details are key.
            </p>
            <button className="event__btn">Find More</button>
          </div>
        </figure>
        <figure className="event">
          <Image
            fluid={wedding.childImageSharp.fluid}
            className="event__img"
            alt="event"
          />
          <div className="event__content">
            <h2 className="event__name">Weddings, Festive Dinners</h2>
            <p className="event__text">
              Our wedding service is fully loaded, from your initial brief,
              through to menu design, personal consultations, logistics and the
              all-important food tasting.
            </p>
            <button className="event__btn">Find More</button>
          </div>
        </figure>
        <figure className="event">
          <Image
            fluid={special.childImageSharp.fluid}
            className="event__img"
            alt="event"
          />
          <div className="event__content">
            <h2 className="event__name">Special Events</h2>
            <p className="event__text">
              We offer a range of special catering options, whether it’s a
              birthday party, retirement celebration, christening, or an
              intimate dinner with your closest friends.
            </p>
            <button className="event__btn">Find More</button>
          </div>
        </figure>
      </figure>
    </section>
  )
}
export default Events
