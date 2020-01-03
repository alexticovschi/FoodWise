import React from "react"
import "./Menu.scss"

import starter from "../../images/home-menu/starter.jpg"
import duck from "../../images/home-menu/duck.jpg"
import salad from "../../images/home-menu/salad.jpg"
import drinks from "../../images/home-menu/drinks.jpg"
import burger from "../../images/home-menu/burger.jpg"
import bites from "../../images/home-menu/bites.jpg"
import pizza from "../../images/home-menu/pizza.jpg"
import sweets from "../../images/home-menu/sweets.jpg"

const Menu = () => {
  return (
    <section className="menu">
      <h1 className="menu__title">
        We choose everyday from a large variety of food
      </h1>

      <div className="menu__list">
        <figure>
          <img className="menu__img" src={starter} alt="" />
          <h2 className="menu__name">Starters</h2>
        </figure>
        <figure>
          <img className="menu__img" src={duck} alt="" />
          <h2 className="menu__name">Main Course</h2>
        </figure>
        <figure>
          <img className="menu__img" src={salad} alt="" />
          <h2 className="menu__name">Salads</h2>
        </figure>
        <figure>
          <img className="menu__img" src={drinks} alt="" />
          <h2 className="menu__name">Drinks</h2>
        </figure>

        <figure>
          <img className="menu__img" src={burger} alt="" />
          <h2 className="menu__name">Burgers</h2>
        </figure>
        <figure>
          <img className="menu__img" src={bites} alt="" />
          <h2 className="menu__name">One bites</h2>
        </figure>
        <figure>
          <img className="menu__img" src={pizza} alt="" />
          <h2 className="menu__name">Pizza</h2>
        </figure>
        <figure>
          <img className="menu__img" src={sweets} alt="" />
          <h2 className="menu__name">Sweets</h2>
        </figure>
      </div>
    </section>
  )
}

export default Menu
