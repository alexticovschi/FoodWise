import React from "react"
import "./Events.scss"

import corporate from "../../images/home-events/corporate.jpg"
import wedding from "../../images/home-events/wedding.jpg"
import special from "../../images/home-events/special.jpg"

const Events = () => {
  return (
    <section className="events">
      <h1 className="events__title">Events</h1>
      <p className="events__subtitle">
        Regardless of the event, whether catering for a corporate, private or
        wedding party, we embrace the opportunity to customize basic menus to
        meet the culinary preferences of customers and budget requirements.
      </p>

      <figure className="events__list">
        <figure className="event">
          <img className="event__img" src={corporate} alt="" />
          <div className="event__content">
            <h2 className="event__name">Corporate Events</h2>
            <p className="event__text">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <button className="event__btn">Find More</button>
          </div>
        </figure>
        <figure className="event">
          <img className="event__img" src={wedding} alt="" />
          <div className="event__content">
            <h2 className="event__name">Weddings, Festive Dinners</h2>
            <p className="event__text">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <button className="event__btn">Find More</button>
          </div>
        </figure>
        <figure className="event">
          <img className="event__img" src={special} alt="" />
          <div className="event__content">
            <h2 className="event__name">Special Events</h2>
            <p className="event__text">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <button className="event__btn">Find More</button>
          </div>
        </figure>
      </figure>
    </section>
  )
}
export default Events
