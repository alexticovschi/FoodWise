import React from "react"
import Layout from "../../components/Layout/Layout"
import HeroBanner from "../../components/HeroBanner/HeroBanner"
import Hero from "../../components/Hero/Hero"
import { graphql } from "gatsby"

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
            subtitle="Looking for a corporate caterer in Washington, DC? FoodWise is the go-to choice for Londons’s top businesses and organizations."
          ></HeroBanner>
        </Hero>
      </Layout>
    </main>
  )
}

export default CorporateEvents
