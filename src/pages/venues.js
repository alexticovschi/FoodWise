import React from "react"
import Layout from "../components/Layout/Layout"
import Venues from "../components/VenuesComponents/Venues/Venues"
import { useStaticQuery, graphql } from "gatsby"
import SwiperSlider from "../components/SwiperSlider/SwiperSlider"
import { Link } from "gatsby"

const getSliderImages = graphql`
  query sliderImages {
    img1: file(
      relativePath: { eq: "venues/slider/natural-history-museum.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "venues/slider/westminister-abbey.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "venues/slider/kensington-palace.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "venues/slider/lancaster-house.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "venues/slider/sky-garden.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const VenuesPage = () => {
  const images = useStaticQuery(getSliderImages)

  return (
    <main className="venues-container">
      <Layout>
        <SwiperSlider images={images} title="Accredited Venues" />
        <Venues />
      </Layout>
    </main>
  )
}
export default VenuesPage
