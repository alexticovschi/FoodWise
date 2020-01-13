import React from "react"
import VenueCard from "../VenueCard/VenueCard"
import { useStaticQuery, graphql } from "gatsby"

import "./Venues.scss"

const getGalleryImages = graphql`
  query venueImages {
    img1: file(relativePath: { eq: "venues/blenheim-palace.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Venues = () => {
  const { img1 } = useStaticQuery(getGalleryImages)

  return (
    <section className="venues">
      <VenueCard imgSrc={img1} />
      <VenueCard imgSrc={img1} />
      <VenueCard imgSrc={img1} />
      <VenueCard imgSrc={img1} />
      <VenueCard imgSrc={img1} />
      <VenueCard imgSrc={img1} />
      <VenueCard imgSrc={img1} />
      <VenueCard imgSrc={img1} />
      <VenueCard imgSrc={img1} />
    </section>
  )
}

export default Venues
