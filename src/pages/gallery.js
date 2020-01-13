import React from "react"
import Layout from "../components/Layout/Layout"
import HeroBanner from "../components/HeroBanner/HeroBanner"
import Hero from "../components/Hero/Hero"
import WebsiteGallery from "../components/WebsiteGallery/WebsiteGallery"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    galleryHeroImage: file(relativePath: { eq: "gallery1.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const GalleryPage = ({ data }) => {
  return (
    <main className="gallery-container">
      <Layout>
        <Hero opacity="true" img={data.galleryHeroImage.childImageSharp.fluid}>
          <HeroBanner
            className="hero-banner"
            title="Gallery"
            subtitle="Delicious Food. Refreshing Drinks"
          />
        </Hero>
        <WebsiteGallery />
      </Layout>
    </main>
  )
}

export default GalleryPage
