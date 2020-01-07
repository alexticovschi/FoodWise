import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import "./About.scss"

const getImage = graphql`
  query aboutLeft {
    aboutLeft: file(relativePath: { eq: "about/about-left.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const { aboutLeft } = useStaticQuery(getImage)

  return (
    <section className="about">
      <div className="about__info">
        <figure className="about__img-wrapper">
          <Image
            fluid={aboutLeft.childImageSharp.fluid}
            className="about__img"
            alt="about left chef"
          />
        </figure>
        <div className="about__text">
          <h1 className="about__title">Our Story</h1>

          <p>
            An unerring focus on three elements has driven our success:
            Brilliant food. Flawless service. Stunning venues. Thousands of our
            guests across UK have experienced this alchemy since our humble
            beginning in 1979. They’ve made us the region’s best-loved catering
            and event design company. We’ve come a rather long way from our
            beginnings, when founder Frank Vogel set out with just a toaster
            oven and a glimmer in her eye.
          </p>
          <p>
            Today, with 300 employees and a 15,000-square foot headquarters, our
            focus is unchanged. And all of us, from our Executive Chef and his
            culinary team to our design team and wait staff, look forward to
            conjuring with that Special Ingredient every day.
          </p>
          <p>
            Delivering sensational food to corporate events, weddings and
            private parties in London and the UK. With an eye for detail and
            love for fabulous food, FoodWise has created a reputation over the
            last ten years for delivering phenomenal events and impeccable
            service with an added personal touch.
          </p>
          <p>
            FoodWise strive to achieve excellence, aiming to always use seasonal
            ingredients locally sourced from independent suppliers.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
