import { Link, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import Topbar from  './components/topbar/Topbar'
import FileDesktop from './components/desktopItems/FileDesktop'
import FolderDesktop from './components/desktopItems/FolderDesktop'
import MailDesktop from './components/desktopItems/MailDesktop'
import StickyNote from './components/stickyNote/StickyNote'
import IconFolder from './components/svg/IconFolder'

import './scss/global.scss'

import Home from './views/Home'
import Contact from './views/Contact'
import Styleguide from './styleguide/Styleguide'
import ProjectsList from './views/ProjectsList'
import ProjectSingle from './views/ProjectSingle'
import Draggable from 'react-draggable'

function App() {
  const [count, setCount] = useState(0)
  const nodeRef = React.useRef(null);

  return (
    <>
      <Topbar />
      
      {/* <header>
        <Link to ="/contact">Contacto</Link>
        <Link to ="/">Home</Link>
        <Link to ="/styleguide">Styleguide</Link>
      </header> */}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/styleguide" element={<Styleguide />} />
          <Route path="/proyectos" element={<ProjectsList />} />
          <Route path="/proyectos/:projectId" element={<ProjectSingle />} />
        </Routes>
        
        <section className='section__desktopItems'>
          <FolderDesktop text="Proyectos"/>
          <FileDesktop text="Sobre mí" goTo='/proyectos'/>
          <MailDesktop text="Correo" />
          <FolderDesktop text="Redes Sociales"/>
        </section>
        <StickyNote text="¡Hola! Soy Carla, bienvenid@ a mi página web. Soy una diseñadora y progamadora web en Valencia" />
      </main>
    </>
    
  )
}

export default App
