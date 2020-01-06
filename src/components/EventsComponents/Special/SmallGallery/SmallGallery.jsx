import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "./SmallGallery.scss"

const getSpecialGalleryImages = graphql`
  query specialGalleryImages {
    img1: file(relativePath: { eq: "events/special/smallgallery/img1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "events/special/smallgallery/img2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "events/special/smallgallery/img3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "events/special/smallgallery/img4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const SmallGallery = () => {
  const { img1, img2, img3, img4 } = useStaticQuery(getSpecialGalleryImages)

  return (
    <section className="special-gallery">
      <div className="special-gallery__wrapper">
        <figure className="special-gallery__img1">
          <Image
            fluid={img1.childImageSharp.fluid}
            className="special-gallery__img"
            alt="special"
          />
        </figure>
        <figure className="special-gallery__img2">
          <Image
            fluid={img2.childImageSharp.fluid}
            className="special-gallery__img"
            alt="special"
          />
        </figure>
        <figure className="special-gallery__img3">
          <Image
            fluid={img3.childImageSharp.fluid}
            className="special-gallery__img"
            alt="special"
          />
        </figure>
        <figure className="special-gallery__img4">
          <Image
            fluid={img4.childImageSharp.fluid}
            className="special-gallery__img"
            alt="special"
          />
        </figure>
      </div>
    </section>
  )
}

export default SmallGallery
