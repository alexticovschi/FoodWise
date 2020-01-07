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
  const { img1, img2, img3, img4, img5, img6, img7, img8 } = useStaticQuery(
    getHomeGalleryImages
  )

  return (
    <>
      <div className="background"></div>
      <div className="home-gallery">
        <figure className="home-gallery__img1">
          <Image
            fluid={img1.childImageSharp.fluid}
            className="home-gallery__img"
            alt="food gallery"
          />
        </figure>
        <figure className="home-gallery__img2">
          <Image
            fluid={img2.childImageSharp.fluid}
            className="home-gallery__img"
            alt="food gallery"
          />
        </figure>
        <figure className="home-gallery__img3">
          <Image
            fluid={img3.childImageSharp.fluid}
            className="home-gallery__img"
            alt="food gallery"
          />
        </figure>
        <figure className="home-gallery__img4">
          <Image
            fluid={img4.childImageSharp.fluid}
            className="home-gallery__img"
            alt="food gallery"
          />
        </figure>
        <figure className="home-gallery__img5">
          <Image
            fluid={img5.childImageSharp.fluid}
            className="home-gallery__img"
            alt="food gallery"
          />
        </figure>
        <figure className="home-gallery__img6">
          <Image
            fluid={img6.childImageSharp.fluid}
            className="home-gallery__img"
            alt="food gallery"
          />
        </figure>
        <figure className="home-gallery__img7">
          <Image
            fluid={img7.childImageSharp.fluid}
            className="home-gallery__img"
            alt="food gallery"
          />
        </figure>
        <figure className="home-gallery__img8">
          <Image
            fluid={img8.childImageSharp.fluid}
            className="home-gallery__img"
            alt="food gallery"
          />
        </figure>
      </div>
    </>
  )
}

export default HomeGallery
