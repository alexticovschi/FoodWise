import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "./Menu.scss"

const getImages = graphql`
  query images {
    starter: file(relativePath: { eq: "home-menu/starter.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    duck: file(relativePath: { eq: "home-menu/duck.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    salad: file(relativePath: { eq: "home-menu/salad.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    drinks: file(relativePath: { eq: "home-menu/drinks.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    burger: file(relativePath: { eq: "home-menu/burger.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    bites: file(relativePath: { eq: "home-menu/bites.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    pizza: file(relativePath: { eq: "home-menu/pizza.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sweets: file(relativePath: { eq: "home-menu/sweets.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Menu = () => {
  const images = useStaticQuery(getImages)
  const { starter, duck, salad, drinks, burger, bites, pizza, sweets } = images

  return (
    <section className="menu">
      <h1 className="menu__title">
        We choose everyday from a large variety of food
      </h1>

      <div className="menu__list">
        <figure>
          <Image
            fluid={starter.childImageSharp.fluid}
            className="menu__img"
            alt="menu"
          />
          <h2 className="menu__name">Starters</h2>
        </figure>
        <figure>
          <Image
            fluid={duck.childImageSharp.fluid}
            className="menu__img"
            alt="menu"
          />
          <h2 className="menu__name">Main Course</h2>
        </figure>
        <figure>
          <Image
            fluid={salad.childImageSharp.fluid}
            className="menu__img"
            alt="menu"
          />
          <h2 className="menu__name">Salads</h2>
        </figure>
        <figure>
          <Image
            fluid={drinks.childImageSharp.fluid}
            className="menu__img"
            alt="menu"
          />
          <h2 className="menu__name">Drinks</h2>
        </figure>

        <figure>
          <Image
            fluid={burger.childImageSharp.fluid}
            className="menu__img"
            alt="menu"
          />
          <h2 className="menu__name">Burgers</h2>
        </figure>
        <figure>
          <Image
            fluid={bites.childImageSharp.fluid}
            className="menu__img"
            alt="menu"
          />
          <h2 className="menu__name">One bites</h2>
        </figure>
        <figure>
          <Image
            fluid={pizza.childImageSharp.fluid}
            className="menu__img"
            alt="menu"
          />
          <h2 className="menu__name">Pizza</h2>
        </figure>
        <figure>
          <Image
            fluid={sweets.childImageSharp.fluid}
            className="menu__img"
            alt="menu"
          />
          <h2 className="menu__name">Sweets</h2>
        </figure>
      </div>
    </section>
  )
}

export default Menu
