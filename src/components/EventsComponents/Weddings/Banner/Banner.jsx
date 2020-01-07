import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import "./Banner.scss"

const Banner = () => {
  const getImage = graphql`
    query weddingBanner {
      banner: file(relativePath: { eq: "events/weddings/wedding-banner.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
  const { banner } = useStaticQuery(getImage)
  return (
    <div className="weddings-banner">
      <Image
        fluid={banner.childImageSharp.fluid}
        className="weddings-banner__img"
        alt="weddings banner"
      />
    </div>
  )
}

export default Banner
