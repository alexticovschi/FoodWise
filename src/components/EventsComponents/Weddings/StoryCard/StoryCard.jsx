import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import "./StoryCard.scss"

const StoryCard = ({ imgSrc, name, text }) => {
  return (
    <div className="story-card">
      <figure>
        <Image
          fluid={imgSrc.childImageSharp.fluid}
          className="wedding-gallery__img"
          alt="wedding"
        />
      </figure>

      <div className="story-card__info">
        <h3 className="story-card__name">{name}</h3>
        <p className="story-card__text">{text}</p>
        <Link to="/events/weddings">
          <button className="story-card__btn">Read More</button>
        </Link>
      </div>
    </div>
  )
}

export default StoryCard
