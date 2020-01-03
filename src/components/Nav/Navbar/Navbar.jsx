import React from "react"
import ToggleButton from "../ToggleButton/ToggleButton"
import { Link } from "gatsby"
import "./navbar.scss"

const Navbar = ({ isOpen, drawerClickHandler }) => {
  return (
    <header>
      <h1 className="logo">FoodWise</h1>
      <nav className="nav">
        <ul className="nav__links">
          <li>
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" className="nav__link">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/reservation" className="nav__link">
              Reservation
            </Link>
          </li>

          <ToggleButton isOpen={isOpen} click={drawerClickHandler} />
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
