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
  const images = useStaticQuery(getCorporateGalleryImages)

  return (
    <section className="corporate-gallery">
      <div className="corporate-gallery__wrapper">
        {Object.values(images).map((img, i) => (
          <figure key={i} className={`corporate-gallery__img${i + 1}`}>
            <Image
              fluid={img.childImageSharp.fluid}
              className="corporate-gallery__img"
              alt="corporate"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default SmallGallery
