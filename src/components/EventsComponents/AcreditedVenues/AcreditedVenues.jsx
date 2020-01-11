import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import "./AcreditedVenues.scss"

const getImage = graphql`
  query venue2 {
    venue2: file(relativePath: { eq: "events/venue1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AcreditedVenues = () => {
  const { venue2 } = useStaticQuery(getImage)

  return (
    <section className="acredited-venues">
      <div className="acredited-venue">
        <div className="acredited-venue__info">
          <div className="acredited-venue__title-wrapper">
            <h1 className="acredited-venue__title">Accredited Venues</h1>
          </div>
          <p className="acredited-venue__text">
            FoodWise is incredibly proud to be an accredited caterer at over 60
            iconic venues including world-famous museums, contemporary galleries
            and Historic Royal Palaces. Click here to view our collection of
            venues within the U.K.
          </p>
          <Link className="btn acredited-venue__btn" to="/events">
            Venues
          </Link>
        </div>

        <figure className="acredited-venue__img-wrapper">
          <Image
            fluid={venue2.childImageSharp.fluid}
            className="acredited-venue__img"
            alt="acredited venue"
          />
        </figure>
      </div>
    </section>
  )
}

export default AcreditedVenues
