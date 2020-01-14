import React from "react"
import Image from "gatsby-image"
import "./VenueCard.scss"
import flower from "../../../images/venues/svg/flower.svg"
import dinner from "../../../images/venues/svg/dinner.svg"
import reception from "../../../images/venues/svg/reception.svg"

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
          <h3 className="venue-card__name">{name}</h3>
          <div className="venue-card__features">
            <figure className="venue-card__icon-wrapper">
              <img className="venue-card__icon" src={flower} alt="venue icon" />
              <p className="venue-card__text">Garden</p>
            </figure>
            <figure className="venue-card__icon-wrapper">
              <img className="venue-card__icon" src={dinner} alt="venue icon" />
              <p className="venue-card__text">Seated</p>
            </figure>
            <figure className="venue-card__icon-wrapper">
              <img
                className="venue-card__icon"
                src={reception}
                alt="venue icon"
              />
              <p className="venue-card__text">Reception</p>
            </figure>
          </div>
        </div>
      </figure>
    </div>
  )
}

export default VenueCard
