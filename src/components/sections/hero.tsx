import React, { useEffect } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import bgImage1 from '../../assets/img/bg1.jpg'
import bgImage2 from '../../assets/img/bg2.jpg'
import bgImage3 from '../../assets/img/bg3.jpg'
import icon1 from '../../assets/icons/icons8-facebook.svg'
import icon2 from '../../assets/icons/icons8-instagram.svg'
import icon3 from '../../assets/icons/icons8-twitterx.svg'

const Hero: React.FC = () => {
  useEffect(() => {
    Swiper.use([Navigation, Pagination])

    const swiper = new Swiper('.swiper', {
      speed: 1800,
      loop: true,
      pagination: {
        el: '.swiper-progressbar',
        type: 'progressbar',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      on: {
        init: function (this: Swiper) {
          const activeSlide = this.realIndex
          const totalSlide = this.slides.length
          const activeSlideElement =
            document.getElementsByClassName('active-slide')[0]
          const totalSlideElement =
            document.getElementsByClassName('total-slide')[0]
          if (activeSlideElement) {
            activeSlideElement.innerHTML = (activeSlide + 1).toString()
          }
          if (totalSlideElement) {
            totalSlideElement.innerHTML = totalSlide.toString()
          }
        },
        slideChange: function (this: Swiper) {
          const activeSlide = this.realIndex
          const totalSlide = this.slides.length
          const activeSlideElement =
            document.getElementsByClassName('active-slide')[0]
          const totalSlideElement =
            document.getElementsByClassName('total-slide')[0]
          if (activeSlideElement) {
            activeSlideElement.innerHTML = (activeSlide + 1).toString()
          }
          if (totalSlideElement) {
            totalSlideElement.innerHTML = totalSlide.toString()
          }
        }
      }
    })

    return () => {
      swiper.destroy()
    }
  }, [])

  return (
    <section className="hero h-[91.5vh] overflow-hidden relative text-white">
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="slider-content"
              style={{ backgroundImage: `url(${bgImage1})` }}
            >
              <div className="slider-heading">
                <h2 className="hero-title">
                  <span>Discover the best</span>
                </h2>
                <h2 className="hero-title">
                  <span>we are the lights</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div
              className="slider-content"
              style={{ backgroundImage: `url(${bgImage3})` }}
            >
              <div className="slider-heading">
                <h2 className="hero-title">
                  <span>Discover the best</span>
                </h2>
                <h2 className="hero-title">
                  <span>we are the lights</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div
              className="slider-content"
              style={{ backgroundImage: `url(${bgImage2})` }}
            >
              <div className="slider-heading">
                <h2 className="hero-title">
                  <span>Discover the best</span>
                </h2>
                <h2 className="hero-title">
                  <span>we are the lights</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-btn">
        <a href="#">
          <span></span>
        </a>
      </div>

      <div className="social-icons-wrap">
        <ul>
          <li>
            <a href="">
              <img src={icon1} alt="facebook" />
              <span>facebook</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={icon2} alt="instagram" />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Twitter</span>
              <img src={icon3} alt="twitter" />
            </a>
          </li>
        </ul>
        <div className="h-line-before"></div>
        <div className="h-line-after"></div>
      </div>
      {/* <div className="copyright-text">
        Copyright &#169; 2024 all rights reserved.
      </div> */}
      <div className="swiper-progressbar-wrap">
        <div className="active-slide"></div>
        <div className="swiper-progressbar"></div>
        <div className="total-slide"></div>
      </div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </section>
  )
}

export default Hero
