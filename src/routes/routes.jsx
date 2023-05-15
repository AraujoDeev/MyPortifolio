import { Route, Routes as Switch } from 'react-router-dom'

import Home from '../components/Pages/Home'
import About from '../components/Pages/About'
import Projects from '../components/Pages/Projects'
import Contacts from '../components/Pages/Contacts'

import '../Styles/styles.css'

const Rotas = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contacts" element={<Contacts />} />
    </Switch>
  )
}

export default Rotas
