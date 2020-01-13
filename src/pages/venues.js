import React from "react"
import Layout from "../components/Layout/Layout"
import HeroBanner from "../components/HeroBanner/HeroBanner"
import Hero from "../components/Hero/Hero"
import Venues from "../components/VenuesComponents/Venues/Venues"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    venuesHeroImage: file(relativePath: { eq: "venues/banner-venue.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const VenuesPage = ({ data }) => (
  <main className="venues-container">
    <Layout>
      <Hero opacity="true" img={data.venuesHeroImage.childImageSharp.fluid}>
        <HeroBanner className="hero-banner" title="Accredited Event Venues">
          <button className="hero-btn">Begin Planning</button>
        </HeroBanner>
      </Hero>
      <Venues />
    </Layout>
  </main>
)

export default VenuesPage
