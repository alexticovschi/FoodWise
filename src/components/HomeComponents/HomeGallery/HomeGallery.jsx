import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "./HomeGallery.scss"

const getHomeGalleryImages = graphql`
  query homeGalleryImages {
    img1: file(relativePath: { eq: "home/gallery/1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "home/gallery/2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "home/gallery/3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "home/gallery/4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "home/gallery/5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img6: file(relativePath: { eq: "home/gallery/6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img7: file(relativePath: { eq: "home/gallery/7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img8: file(relativePath: { eq: "home/gallery/8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const HomeGallery = () => {
  const images = useStaticQuery(getHomeGalleryImages)

  return (
    <>
      <div className="background"></div>
      <div className="home-gallery">
        {Object.values(images).map((img, i) => (
          <figure key={i} className={`home-gallery__img${i + 1}`}>
            <Image
              fluid={img.childImageSharp.fluid}
              className="home-gallery__img"
              alt="food gallery"
            />
          </figure>
        ))}
      </div>
    </>
  )
}

export default HomeGallery
