
import { Link, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Topbar from  './components/topbar/Topbar'
import IconFile from './components/svg/IconFile'
import FileDesktop from './components/desktopItems/FileDesktop'
import FolderDesktop from './components/desktopItems/FolderDesktop'


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
        <h1>Bienvenido :P</h1>
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
        <IconFile></IconFile>
        
        <section>
          <FileDesktop text="Sobre mí"/>
          <FolderDesktop text="Proyectos"/>
        </section>

      </main>
    </>
    
  )
}

export default App
