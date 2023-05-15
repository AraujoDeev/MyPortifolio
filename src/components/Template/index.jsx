import React from 'react'
import './mainTemplate.css'
import Header from '../Header'
import Footer from '../Footer'

const MainTemplate = ({ children }) => {
  return (
    <div className="main">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainTemplate
