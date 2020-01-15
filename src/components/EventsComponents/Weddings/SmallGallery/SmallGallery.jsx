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
  const images = useStaticQuery(getGalleryImages)

  return (
    <section className="wedding-gallery">
      <div className="wedding-gallery__wrapper">
        {Object.values(images).map((img, i) => (
          <figure className={`wedding-gallery__img${i + 1}`}>
            <Image
              fluid={img.childImageSharp.fluid}
              className="wedding-gallery__img"
              alt="special"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default SmallGallery
