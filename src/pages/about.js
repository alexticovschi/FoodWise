import React from "react"
import Layout from "../components/Layout/Layout"
import HeroBanner from "../components/HeroBanner/HeroBanner"
import Hero from "../components/Hero/Hero"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    aboutHeroImage: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = ({ data }) => (
  <main className="events-container">
    <Layout>
      <Hero opacity="true" img={data.aboutHeroImage.childImageSharp.fluid}>
        <HeroBanner
          className="hero-banner"
          title="About"
          subtitle="Catering and Event Planning Company."
        ></HeroBanner>
      </Hero>
    </Layout>
  </main>
)

export default About
