import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "./SmallGallery.scss"

const getGalleryImages = graphql`
  query weddingGalleryImages {
    img1: file(relativePath: { eq: "events/weddings/smallgallery/img1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "events/weddings/smallgallery/img2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "events/weddings/smallgallery/img3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const SmallGallery = () => {
  const { img1, img2, img3 } = useStaticQuery(getGalleryImages)

  return (
    <section className="wedding-gallery">
      <div className="wedding-gallery__wrapper">
        <figure className="wedding-gallery__img1">
          <Image
            fluid={img1.childImageSharp.fluid}
            className="wedding-gallery__img"
            alt="wedding"
          />
        </figure>
        <figure className="wedding-gallery__img2">
          <Image
            fluid={img2.childImageSharp.fluid}
            className="wedding-gallery__img"
            alt="wedding"
          />
        </figure>
        <figure className="wedding-gallery__img3">
          <Image
            fluid={img3.childImageSharp.fluid}
            className="wedding-gallery__img"
            alt="wedding"
          />
        </figure>
      </div>
    </section>
  )
}

export default SmallGallery
