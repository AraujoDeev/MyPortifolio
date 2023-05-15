import React from 'react'
import './about.css'
import MainTemplate from '../../Template'
import imgAbout from '../../../../public/assets/img/imagem.png'

const About = () => {
  return (
    <MainTemplate>
      <div className="aboutPage">
        <div className="left"></div>
        <div className="center">
          <div className="desc-about">
            <h1>About me</h1>
            <img src={imgAbout} />
            <p>
              Hey guys, my name is Matheus. I'm a student front end developer,
              I've been studying this area for over 1 year. In my free time I
              like to play online games with my friends, play soccer, and I
              really like to develop new projects.I'm currently playing a lot of
              Valorant, I'm not that good, but I have fun with my friends.
            </p>
          </div>
        </div>

        <div className="right"></div>
      </div>
    </MainTemplate>
  )
}

export default About
