import React from "react"
import Layout from "../components/Layout/Layout"
import HeroBanner from "../components/HeroBanner/HeroBanner"
import Hero from "../components/Hero/Hero"
import Events from "../components/EventsComponents/Events/Events"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    eventsHeroImage: file(relativePath: { eq: "events.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const EventsPage = ({ data }) => (
  <main className="events-container">
    <Layout>
      <Hero opacity="true" img={data.eventsHeroImage.childImageSharp.fluid}>
        <HeroBanner
          className="hero-banner"
          title="Events"
          subtitle="Any Event. Any Industry. Any Location"
        ></HeroBanner>
      </Hero>
      <Events />
    </Layout>
  </main>
)

export default EventsPage
