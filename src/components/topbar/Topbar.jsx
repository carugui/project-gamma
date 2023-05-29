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

        <div className='topbar__item'>
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
            </ul>
          </nav>
        </div>

        <Link className='topbar__item'to ="/">Carugui</Link>

        <div className='topbar__item'>Lun 23:12</div>

      </header>
    </>
  )
}

export default Topbar