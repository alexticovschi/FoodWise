import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "./SmallGallery.scss"

const getCorporateGalleryImages = graphql`
  query corporateGalleryImages {
    img1: file(relativePath: { eq: "events/corporate/smallgallery/img1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "events/corporate/smallgallery/img2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "events/corporate/smallgallery/img3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "events/corporate/smallgallery/img4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const SmallGallery = () => {
  const { img1, img2, img3, img4 } = useStaticQuery(getCorporateGalleryImages)

  return (
    <section className="sm-gallery">
      <div className="sm-gallery__wrapper">
        <figure className="sm-gallery__img1">
          <Image
            fluid={img1.childImageSharp.fluid}
            className="sm-gallery__img"
            alt="corporate"
          />
        </figure>
        <figure className="sm-gallery__img2">
          <Image
            fluid={img2.childImageSharp.fluid}
            className="sm-gallery__img"
            alt="corporate"
          />
        </figure>
        <figure className="sm-gallery__img3">
          <Image
            fluid={img3.childImageSharp.fluid}
            className="sm-gallery__img"
            alt="corporate"
          />
        </figure>
        <figure className="sm-gallery__img4">
          <Image
            fluid={img4.childImageSharp.fluid}
            className="sm-gallery__img"
            alt="corporate"
          />
        </figure>
      </div>
    </section>
  )
}

export default SmallGallery
