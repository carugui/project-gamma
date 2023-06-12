import './Topbar.scss';
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../../views/Home'
import React, { useEffect, useState, useRef } from "react";
import SocialMediaList from '../../views/SocialMediaList';
import Clock from '../clock/Clock';

function Topbar(props) {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current?.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const [isWindowVisible, setWindowVisible] = useState(false);

  const handleClick = () => {
    setWindowVisible(true);
  };

  const handleClose = () => {
    setWindowVisible(false);
  };
  return (
    <>
      <header className='topbar'>
        
        <div className='topbar__item topbar__item__1'>
          <nav className='nav' ref={menuRef}>
            <button className={`nav__button ${open ? 'nav__button--pressed' : ''}`}onClick={()=>{setOpen(!open)}}>Menú</button>
            <ul className={`nav__ul ${open ? 'nav__ul--show' : ''}`}>
              <li className='nav__item' >
                <Link to="/proyectos" onClick={handleCloseMenu}>Proyectos</Link>
              </li>
              <li className='nav__item'>
                <a onClick={() => { handleCloseMenu(); props.about(); }} >Sobre mí</a>
              </li>
              <li className='nav__item'>
                <a href="">Correo</a>
              </li>
              <li className='nav__item'>
                <a onClick={() => { handleCloseMenu(); props.socials(); }}>Redes Sociales</a>
              </li>
            </ul>
          </nav>
        </div>

        <Link className='topbar__item topbar__item__2' to="/" onClick="{handleRefresh}">Carugui</Link>
        
        <Clock />
        
      </header>
    </>
  )
}

export default Topbar