import React from "react"
import Layout from "../components/Layout/Layout"
import Menu from "../components/Menu/Menu"
import HeroBanner from "../components/HeroBanner/HeroBanner"
import Banner from "../components/Banner/Banner"
import Events from "../components/Events/Events"
import Hero from "../components/Hero/Hero"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    homeHeroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <main className="home-container">
    <Layout>
      <Hero
        home="true"
        opacity="true"
        img={data.homeHeroImage.childImageSharp.fluid}
      >
        <HeroBanner
          className="hero-banner"
          title="Take your daily food everywhere!"
          subtitle="Creative Ideas * Professional Staff * Sensational Food."
        >
          <button className="hero-btn">Call Us Now</button>
        </HeroBanner>
      </Hero>
      <Menu />
      <Banner />
      <Events />
    </Layout>
  </main>
)

export default IndexPage
