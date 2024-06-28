import React, { useEffect, useState } from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'

const links = [
  {
    id: 1,
    title: 'homeeee',
    link: '/',
  },
  {
    id: 2,
    title: 'about',
    link: '/about',
  },
  {
    id: 3,
    title: 'projects',
    link: '/projects',
  },
  {
    id: 4,
    title: 'contacts',
    link: '/contacts',
  },
]

const Header = () => {
  let initialActive =
    window.location.pathname == '/'
      ? 'home'
      : window.location.pathname.substring(1)

  const [isActive, setIsActive] = useState(initialActive)

  const navigate = useNavigate()

  return (
    <div className="header">
      {links.map((link) => (
        <ul key={link.id}>
          <li
            style={{
              color: 'white',
              backgroundColor:
                isActive == link.title ? '#006483' : 'transparent',
            }}
            onClick={(e) => {
              navigate(link.link)
              setIsActive(link.title)
            }}
          >
            <a>{link.title}</a>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default Header
