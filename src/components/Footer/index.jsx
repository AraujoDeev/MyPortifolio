import React from 'react'
import './footer.css'

const Footer = () => {
  const year = new Date()
  year.getFullYear()

  return (
    <div className="footer">
      <h1>&copy; {year.getFullYear()} Matheus Araujo - My portfolio</h1>
    </div>
  )
}

export default Footer
