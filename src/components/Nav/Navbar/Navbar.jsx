import React from "react"
import ToggleButton from "../ToggleButton/ToggleButton"
import { Link } from "gatsby"
import "./navbar.scss"

const Navbar = ({ isOpen, drawerClickHandler }) => {
  return (
    <header>
      <Link to="/">
        <h1 className="logo">FoodWise</h1>
      </Link>
      <nav className="nav">
        <ul className="nav__links">
          <li>
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
          <li>
            <Link to="/events" className="nav__link">
              Events
            </Link>
            <div className="nav__content">
              <div className="nav__sub">
                <ul>
                  <li>
                    <Link to="/events/corporate">Corporate</Link>
                  </li>
                  <li>
                    <Link to="/events/weddings">Weddings</Link>
                  </li>
                  <li>
                    <Link to="/events/special">Special</Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <Link to="/venues" className="nav__link">
              Venues
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="nav__link">
              Gallery
            </Link>
          </li>

          <ToggleButton isOpen={isOpen} click={drawerClickHandler} />
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
