import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout/Layout"
import HeroBanner from "../../components/HeroBanner/HeroBanner"
import Hero from "../../components/Hero/Hero"
import Intro from "../../components/EventsComponents/Corporate/Intro/Intro"
import SmallGallery from "../../components/EventsComponents/Corporate/SmallGallery/SmallGallery"
import TrustedPartner from "../../components/EventsComponents/Corporate/TrustedPartner/TrustedPartner"
import Stories from "../../components/EventsComponents/Corporate/Stories/Stories"

export const query = graphql`
  query {
    eventsHeroImage: file(
      relativePath: { eq: "events/corporate/corporate.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const CorporateEvents = ({ data }) => {
  return (
    <main className="corporate-events-container">
      <Layout>
        <Hero opacity="true" img={data.eventsHeroImage.childImageSharp.fluid}>
          <HeroBanner
            className="hero-banner"
            title="Corporate Events"
            subtitle="Looking for a corporate caterer in London, UK? FoodWise is the go-to choice for London’s top businesses and organizations."
          />
        </Hero>
        <Intro />
        <SmallGallery />
        <TrustedPartner />
        <Stories />
      </Layout>
    </main>
  )
}

export default CorporateEvents
