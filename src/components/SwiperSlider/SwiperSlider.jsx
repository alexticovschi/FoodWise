import React from "react"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import "./SwiperSlider.scss"
import Image from "gatsby-image"

const SwiperSlider = ({ images, title }) => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: false,
    effect: "fade",
    autoplay: {
      delay: 2000,
    },
    speed: 1500,
  }

  return (
    <div className="swiper-slide">
      <Swiper {...params}>
        {Object.values(images).map((img, i) => (
          <figure key={i} className="swiper-slide__img-wrapper">
            <Image
              fluid={img.childImageSharp.fluid}
              className="swiper-slide__img"
              alt="slider venue"
            />
            <h3 className="swiper-slide__title">{title}</h3>
            <div className="swiper-slide__after"></div>
          </figure>
        ))}
      </Swiper>
    </div>
  )
}

export default SwiperSlider
