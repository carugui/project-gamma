import './Topbar.scss';
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../../views/Home'


function Topbar() {
 
  return (
    <>
      <header className='topbar'>

        <nav>
          Menú
          <ul>
            <li>
              <a href="">Proyectos</a>
            </li>
            <li>
              <a href="">Sobre mí</a>
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