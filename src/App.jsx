import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Topbar from './components/topbar/Topbar';

import './scss/global.scss';

import Home from './views/Home';
import Contact from './views/Contact';
import Styleguide from './styleguide/Styleguide';
import Nav from './styleguide/Nav';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Topbar />

      <header>
        <h1>Bienvenido :P</h1>

        {/* no poner los Links con elementos <a/> porque la pagina se vuelve a cargar, n su lugar usar <Link to="#"></Link> */}
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contacto</Link>

        <Link to='/styleguide'>Styleguide</Link>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/styleguide' element={<Styleguide />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
