import React from "react"
import { Link } from "gatsby"
import "./SideDrawer.scss"

const SideDrawer = ({ show, click }) => {
  return (
    <nav className={show ? "side-drawer open" : "side-drawer"}>
      <ul className="side-drawer__links">
        <li>
          <Link to="/about" className="side-drawer__link">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className="side-drawer__link">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reservation" className="side-drawer__link">
            Reservation
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default SideDrawer
