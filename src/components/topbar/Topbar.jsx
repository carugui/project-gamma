import './Topbar.scss';
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../../views/Home'
import React, { useEffect, useState, useRef } from "react";

function Topbar() {

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
  return (
    <>
      <header className='topbar'>
        
        <div className='topbar__item topbar__item__1'>
          <nav className='nav' ref={menuRef}>
            <button className={`nav__button ${open ? 'nav__button--pressed' : ''}`}onClick={()=>{setOpen(!open)}}>Menú</button>
            <ul className={`nav__ul ${open ? 'nav__ul--show' : ''}`}>
              <li className='nav__item'>
                <a href="" >Proyectos</a>
              </li>
              <li className='nav__item'>
                <a href="" >Sobre mí</a>
              </li>
              <li className='nav__item'>
                <a href="">Correo</a>
              </li>
              <li className='nav__item'>
                <a href="">Redes Sociales</a>
              </li>
            </ul>
          </nav>
        </div>

        <Link className='topbar__item topbar__item__2'to ="/">Carugui</Link>
        
        <div className='topbar__item topbar__item__3'>Lun 23:12</div>
        
      </header>
    </>
  )
}

export default Topbar