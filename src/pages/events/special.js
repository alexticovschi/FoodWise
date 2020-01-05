import React from "react"
import Layout from "../../components/Layout/Layout"
import HeroBanner from "../../components/HeroBanner/HeroBanner"
import Hero from "../../components/Hero/Hero"
import { graphql } from "gatsby"

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
      </Layout>
    </main>
  )
}

export default SpecialEvents
