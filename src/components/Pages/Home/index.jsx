import MainTemplate from '../../Template'
import './main.css'
import { useNavigate } from 'react-router-dom'
import bgHome from '../../../../public/assets/img/bgHome.png'

import React from 'react'

const Home = () => {
  const navigate = useNavigate()

  return (
    <MainTemplate>
      <div className="main-page">
        <div className="left"></div>
        <div className="center">
          <div className="description">
            <div
              data-aos="fade-right"
              data-aos-offset="-100"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
              className="about"
            >
              <h1>Hi, my name is Matheus </h1>
              <p>I am a web developer</p>
              <div className="button">
                <button onClick={() => navigate('about')}>ABOUT ME</button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="-100"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            className="image"
          >
            <img
              //
              src={bgHome}
              alt="imagem"
            />
          </div>
        </div>
        <div className="right"></div>
      </div>
    </MainTemplate>
  )
}

export default Home
