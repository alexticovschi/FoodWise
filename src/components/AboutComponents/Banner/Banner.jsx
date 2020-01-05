import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import "./Banner.scss"

const Banner = () => {
  const getImage = graphql`
    query aboutBanner {
      banner: file(relativePath: { eq: "about/about-banner.jpg" }) {
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
    <div className="about-banner">
      <Image
        fluid={banner.childImageSharp.fluid}
        className="about-banner__img"
        alt="about banner"
      />
      <h2 className="about-banner__title">Passion for celebration.</h2>
      <p className="about-banner__text">
        Every single event we create is an expression of the love we have for
        our work. From intimate gatherings to epic galas, we strive to craft the
        most outstanding cuisine and the most elegant, high-end presentations in
        the London area.
      </p>
    </div>
  )
}

export default Banner
