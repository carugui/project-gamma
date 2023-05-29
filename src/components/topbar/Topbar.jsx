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

        <nav>
          <button onClick={()=>{setOpen(!open)}}>Menú</button>
          <ul className={`nav__ul ${open ? 'nav__ul--show' : ''}`}>
            <li>
              <a href="" >Proyectos</a>
            </li>
            <li>
              <a href="" >Sobre mí</a>
            </li>
            <li>
              <a href="">Correo</a>
            </li>
          </ul>
        </nav>

        <Link to ="/">Carugui</Link>

        <div>Lun 23:12</div>

      </header>
    </>
  )
}

export default Topbar