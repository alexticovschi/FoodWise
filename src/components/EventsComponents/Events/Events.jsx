import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import EventList from "../EventList/EventList"
import "./Events.scss"

const getImage = graphql`
  query evtRight {
    evtRight: file(relativePath: { eq: "events/evt-right.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Events = () => {
  const { evtRight } = useStaticQuery(getImage)

  return (
    <>
      <section className="events">
        <div className="events__info">
          <h1 className="events__title">FoodWise Catering London, UK</h1>

          <div className="events__text">
            <p>
              The FoodWise Catering Company provide unique catering services for
              any event. The events we cater for are weddings, corporate events
              and functions, parties, celebrations and funerals. However, we are
              more than happy to provide catering for any event of your choice
              that hasn’t been listed on our website as we are adaptable and
              flexible in our approach. We are passionate about providing
              memorable food & brilliant service, tailored exactly to the
              wishes, expectations & ideas of our customers & their guests. Our
              menus are imaginative and delicious & we believe strongly in using
              fresh, seasonal & locally-sourced ingredients. Our catering is
              based upon classical roots with the ingredients taking
              centre-stage. Our chefs are constantly evolving the menus. That
              said, we know the food is only half of the deal; we take great
              pride in delivering a great & personal service, a warm & friendly
              smile & a flexible approach. We pride ourselves on giving the best
              possible customer service from the moment you enquire with us. Our
              dedicated event coordinator Harriet will be your point of contact
              throughout the planning stages of your special event. Our team of
              experienced banqueting chefs will be able to provide you with a
              personalised service and advice on your menu selections.
            </p>
            <h2 className="events__subtitle"> The Special Ingredient</h2>
            <p>
              We are the keepers of The Special Ingredient. What is it? It’s a
              rare, precious combination of elements that when brought forth for
              an event, create an experience like none other. One that, beyond
              exceeding expectations, is beyond imagination.
            </p>
          </div>
          <Image
            fluid={evtRight.childImageSharp.fluid}
            className="events__img"
            alt="evt info"
          />
        </div>
      </section>

      <EventList />
    </>
  )
}

export default Events
