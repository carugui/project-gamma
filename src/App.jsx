import { Link, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import { Fragment } from "react";
import React, { useState } from 'react';

import './scss/global.scss'

import Topbar from  './components/topbar/Topbar'
import FileDesktop from './components/desktopItems/FileDesktop'
import FolderDesktop from './components/desktopItems/FolderDesktop'
import MailDesktop from './components/desktopItems/MailDesktop'
import GithubDesktop from './components/desktopItems/GithubDesktop'
import StickyNote from './components/stickyNote/StickyNote'
import IconFolder from './components/svg/IconFolder'
import Cloud from './components/svg/Cloud'
import Window from './components/window/Window'
import SocialMediaList from './views/SocialMediaList';
import IconPortrait from './components/svg/IconPortrait'

import Home from './views/Home'
import Contact from './views/Contact'
import Styleguide from './styleguide/Styleguide'
import ProjectsList from './views/ProjectsList'
import ProjectSingle from './views/ProjectSingle'
import About from './views/About';
import Draggable from 'react-draggable'

function App() {
  const [count, setCount] = useState(0)
  const divRef = React.useRef(null);

  const location = useLocation();
  const hideComponentsViews = ['/styleguide']; // Specify the views where the navigation should be hidden

  const isComponentsVisible = !hideComponentsViews.includes(location.pathname);

  const mainClassName = isComponentsVisible ? 'main' : 'main main__styleguide';


  /* FUNCIONAMIENTO VENTANA REDES SOCIALES */

  const [isSocialsWindowVisible, setSocialsWindowVisible] = useState(false);

  const socialsOpen = () => {
    setSocialsWindowVisible(true);
  };

  const socialsClose = () => {
    setSocialsWindowVisible(false);
  };


  /* FUNCIONAMIENTO VENTANA SOBRE MÍ */

  const [isAboutWindowVisible, setAboutWindowVisible] = useState(false);

  const aboutOpen = () => {
    setAboutWindowVisible(true);
  };

  const aboutClose = () => {
    setAboutWindowVisible(false);
  };

  return (
    <>
      {isComponentsVisible && 

        <Topbar socials={socialsOpen} about={aboutOpen}/>

      }
      
      {/* <header>
        <Link to ="/contact">Contacto</Link>
        <Link to ="/">Home</Link>
        <Link to ="/styleguide">Styleguide</Link>
      </header> */}

      <main className={mainClassName}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/styleguide" element={<Styleguide />} />
          <Route path="/proyectos" element={<ProjectsList />} />
          <Route path="/proyectos/:projectId" element={<ProjectSingle />} />
        </Routes>
        
        {isComponentsVisible && 

          <div className='main__content'>
            <section className='section__desktopItems'>
              <FolderDesktop text="Proyectos" goTo='/proyectos'/>
              <FileDesktop text="Sobre mí" clickTo={aboutOpen}/>
              <MailDesktop text="Correo" />
              <FolderDesktop text="Redes Sociales" clickTo={socialsOpen}/>
            </section>
            <StickyNote text="¡Hola! Soy Carla, bienvenid@ a mi página web. Soy una diseñadora y progamadora web en Valencia" />
            <Cloud />
          </div>

        }
        
        {isSocialsWindowVisible && <SocialMediaList onClose={socialsClose} />}
        {isAboutWindowVisible && <About onClose={aboutClose} />}
        
      </main>
    </>
    
  )
}

export default App
