import { Link, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Topbar from  './components/topbar/Topbar'
import FileDesktop from './components/desktopItems/FileDesktop'
import FolderDesktop from './components/desktopItems/FolderDesktop'
import MailDesktop from './components/desktopItems/MailDesktop'


import './scss/global.scss'

import Home from './views/Home'
import Contact from './views/Contact'
import Styleguide from './styleguide/Styleguide'
import Draggable from 'react-draggable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar />
      
      <header>
        <Link to ="/contact">Contacto</Link>
        <Link to ="/">Home</Link>
        <Link to ="/styleguide">Styleguide</Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/styleguide" element={<Styleguide />} />
        </Routes>
        
        <section>
          <FolderDesktop text="Proyectos"/>
          <FileDesktop text="Sobre mí"/>
          <MailDesktop text="Correo" />
          <FolderDesktop text="Redes Sociales"/>
        </section>

      </main>
    </>
    
  )
}

export default App
