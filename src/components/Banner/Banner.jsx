import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import "./Banner.scss"

const getImage = graphql`
  query banner {
    banner: file(relativePath: { eq: "tasty-deserts.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Banner = () => {
  const { banner } = useStaticQuery(getImage)
  return (
    <div className="banner">
      <Image
        fluid={banner.childImageSharp.fluid}
        className="banner__img"
        alt="banner"
      />
      <h2 className="banner__title">Take A Taste & Come Join Us</h2>
    </div>
  )
}

export default Banner
