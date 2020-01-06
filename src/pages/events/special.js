import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout/Layout"
import HeroBanner from "../../components/HeroBanner/HeroBanner"
import Hero from "../../components/Hero/Hero"
import Intro from "../../components/EventsComponents/Special/Intro/Intro"
import SmallGallery from "../../components/EventsComponents/Special/SmallGallery/SmallGallery"

export const query = graphql`
  query {
    eventsHeroImage: file(relativePath: { eq: "events/special/special.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const SpecialEvents = ({ data }) => {
  return (
    <main className="special-events-container">
      <Layout>
        <Hero opacity="true" img={data.eventsHeroImage.childImageSharp.fluid}>
          <HeroBanner
            className="hero-banner"
            title="Special Events"
            subtitle="An affair to
            remember."
          ></HeroBanner>
        </Hero>
        <Intro />
        <SmallGallery />
      </Layout>
    </main>
  )
}

export default SpecialEvents
