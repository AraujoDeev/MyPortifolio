import { Link } from 'react-router-dom'

import MainTemplate from '../../Template'
import Footer from '../../Footer'
import Header from '../../Header'
import './contacts.css'

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
                  <img src="../../public/assets/img/lk.png" alt="" />
                </Link>
              </li>
              <li>
                <Link target="_blank" to={'https://github.com/AraujoDeev'}>
                  <img src="../../public/assets/img/gh.png" alt="" />
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to={'https://www.instagram.com/theu.araujo/'}
                >
                  <img src="../../public/assets/img/ig.png" alt="ig" />
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
