import React from "react"
import VenueCard from "../VenueCard/VenueCard"
import { useStaticQuery, graphql } from "gatsby"

import "./Venues.scss"

const getGalleryImages = graphql`
  query venueImages {
    blenheim: file(relativePath: { eq: "venues/blenheim-palace.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kensington: file(relativePath: { eq: "venues/kensington-palace.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lancaster: file(relativePath: { eq: "venues/lancaster-house.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mvjewel: file(relativePath: { eq: "venues/mv-jewel.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    eventNorthumbria: file(
      relativePath: { eq: "venues/event-northumbria.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heythropParkResort: file(
      relativePath: { eq: "venues/heythrop-park-resort.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    castleGroveMasonicHall: file(
      relativePath: { eq: "venues/castle-grove-masonic-hall.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    naturalHistoryMuseum: file(
      relativePath: { eq: "venues/natural-history-museum.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    westministerAbbey: file(
      relativePath: { eq: "venues/westminister-abbey.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nationalGallery: file(relativePath: { eq: "venues/national-gallery.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    scienceMuseum: file(relativePath: { eq: "venues/science-museum.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    skyGarden: file(relativePath: { eq: "venues/sky-garden.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Venues = () => {
  const {
    blenheim,
    kensington,
    nationalGallery,
    lancaster,
    mvjewel,
    eventNorthumbria,
    heythropParkResort,
    castleGroveMasonicHall,
    naturalHistoryMuseum,
    westministerAbbey,
    scienceMuseum,
    skyGarden,
  } = useStaticQuery(getGalleryImages)

  return (
    <section className="venues">
      <VenueCard imgSrc={blenheim} name="Blenheim Palace" />
      <VenueCard imgSrc={kensington} name="Kensington Palace" />
      <VenueCard imgSrc={nationalGallery} name="The National Gallery" />
      <VenueCard imgSrc={lancaster} name="Lancaster House" />
      <VenueCard imgSrc={mvjewel} name="M.V Jewel of London" />
      <VenueCard imgSrc={eventNorthumbria} name="Event Northumbria" />
      <VenueCard imgSrc={heythropParkResort} name="Heythrop Park Resort" />
      <VenueCard
        imgSrc={castleGroveMasonicHall}
        name="Castle Grove Masonic Hall"
      />
      <VenueCard imgSrc={naturalHistoryMuseum} name="Natural History Museum" />
      <VenueCard imgSrc={westministerAbbey} name="Westminster Abbey" />
      <VenueCard imgSrc={scienceMuseum} name="Science Museum" />
      <VenueCard imgSrc={skyGarden} name="Sky Garden" />
    </section>
  )
}

export default Venues
