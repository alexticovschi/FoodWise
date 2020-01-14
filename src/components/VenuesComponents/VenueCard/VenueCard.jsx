import React from "react"
import Image from "gatsby-image"
import "./VenueCard.scss"

const VenueCard = ({ imgSrc, name }) => {
  return (
    <div className="venue-card">
      <figure className="venue-card__img-wrapper">
        <Image
          fluid={imgSrc.childImageSharp.fluid}
          className="venue-card__img"
          alt="venue card"
        />
        <div className="venue-card__overlay">
          <span className="venue-card__name">{name}</span>
          <div className="venue-card__content">
            <div className="venue-card__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae numquam impedit fugit provident ullam magni, molestiae
              perspiciatis quo eligendi aliquam.
            </div>
          </div>
        </div>
      </figure>
    </div>
  )
}

export default VenueCard
