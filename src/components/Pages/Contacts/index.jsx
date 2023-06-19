import { Link } from 'react-router-dom'

import MainTemplate from '../../Template'
import './contacts.css'

import {
  logoInstagram,
  logoLinkedin,
  logoGitHub,
} from '../../../../public/assets/img'

const Contacts = () => {
  return (
    <MainTemplate>
      <div className="contacts">
        <div className="left"></div>
        <div className="center center-contacts">
          <h1>Contacts</h1>
          <div className="medias">
            <ul>
              <li>
                <Link
                  target="_blank"
                  to={'https://www.linkedin.com/in/matheusdeev/'}
                >
                  <img src={logoLinkedin} />
                </Link>
              </li>
              <li>
                <Link target="_blank" to={'https://github.com/AraujoDeev'}>
                  <img src={logoGitHub} />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to={'https://www.instagram.com/theu.araujo/'}
                >
                  <img src={logoInstagram} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </MainTemplate>
  )
}

export default Contacts
