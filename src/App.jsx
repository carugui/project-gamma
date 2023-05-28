import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import './scss/global.scss';

import Home from './views/Home';
import Contact from './views/Contact';
import Styleguide from './styleguide/Styleguide';
import Topbar from './components/topbar/Topbar';
import Portfolio from './views/Portfolio';
import Cards from './components/cards/Cards';
import Portrait from './components/portrait/Portrait';
import Artshop from './components/artshop/Artshop';





function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      


      <header>
        <h1>Bienvenido</h1>

        {/* no poner los Links con elementos <a/> porque la pagina se vuelve a cargar, n su lugar usar <Link to="#"></Link> */}
        <Link to='/'>Home</Link>
        <Link to='/topbar'>Topbar</Link>
        <Link to='/contact'>Contacto</Link>
        <Link to='/styleguide'>Styleguide</Link>
        <Link to='/portfolio'>Portfolio</Link>

        
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/topbar/' element={<Topbar/>} />
          <Route path='/portfolio' element={<Portfolio/>} />          
          <Route path='/contact' element={<Contact />} />
          <Route path='/styleguide' element={<Styleguide />} />
          <Route path='/cards' element={<Cards />} />
          <Route path='/artshop' element={<Artshop />} />
          
        </Routes>
      </main>
    </>
  );
}

export default App;
