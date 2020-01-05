import React from "react"
import Layout from "../../components/Layout/Layout"
import HeroBanner from "../../components/HeroBanner/HeroBanner"
import Hero from "../../components/Hero/Hero"
import BigDay from "../../components/EventsComponents/Weddings/BigDay/BigDay"
import SmallGallery from "../../components/EventsComponents/Weddings/SmallGallery/SmallGallery"
import MuchMore from "../../components/EventsComponents/Weddings/MuchMore/MuchMore"
import Stories from "../../components/EventsComponents/Weddings/Stories/Stories"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    eventsHeroImage: file(relativePath: { eq: "events/weddings/wedding.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const WeddingEvents = ({ data }) => {
  return (
    <main className="wedding-events-container">
      <Layout>
        <Hero opacity="true" img={data.eventsHeroImage.childImageSharp.fluid}>
          <HeroBanner
            className="hero-banner"
            title="Wedding Events"
            subtitle="When the big day is finally in view, we’ll design a stunning celebration that reflects your best wedding dreams."
          ></HeroBanner>
        </Hero>
        <BigDay />
        <SmallGallery />
        <MuchMore />
        <Stories />
      </Layout>
    </main>
  )
}

export default WeddingEvents
