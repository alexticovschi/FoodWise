import React from "react"
import Layout from "../components/Layout/Layout"
import HeroBanner from "../components/HeroBanner/HeroBanner"
import Hero from "../components/Hero/Hero"
import About from "../components/AboutComponents/About/About"

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

const AboutPage = ({ data }) => (
  <main className="about-container">
    <Layout>
      <Hero opacity="true" img={data.aboutHeroImage.childImageSharp.fluid}>
        <HeroBanner
          className="hero-banner"
          title="About"
          subtitle="Catering and Event Planning Company."
        ></HeroBanner>
      </Hero>
      <About />
    </Layout>
  </main>
)

export default AboutPage
