import React from "react"
import {
  FaGithub,
  FaLinkedin,
  FaFreeCodeCamp,
  FaCodepen,
  FaInstagram,
} from "react-icons/fa"
import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <ul></ul>
      </div>
      <p className="footer__text">Built by Alex Ticovschi</p>
    </footer>
  )
}

export default Footer
