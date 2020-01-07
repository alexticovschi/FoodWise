import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import "./Hero.scss"

const Hero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(Hero)`
  grid-column: full-start/ full-end;
  min-height: ${props => (props.home ? "calc(100vh - 6.5rem)" : "60vh")};
  background: ${props => (props.opacity ? "rgba(20, 20, 20, 0.5)" : "none")};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
