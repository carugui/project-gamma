import Nav from './Nav'
import Button from '../components/button/Button'
import Topbar from '../components/topbar/Topbar'
import './style.scss'

export default function Styleguide () {
    return <>
        <Topbar/>
        <h1>Hola, soy el styleguide</h1>

        <div className='section'>
            <Nav />
        </div>

        <div className='section' id='headers'>
            <h1>Esto es un h1</h1>
            <h2>Esto es un h2</h2>
            <h3>Esto es un h3</h3>
            <h4>Esto es un h4</h4>
            <h5>Esto es un h5</h5>
            <h6>Esto es un h6</h6>
        </div>

        <div className='section'>
            <Button />
        </div>

        <div className='section'>
        <h2 className="titular-seccion">Colores</h2>
            
            <h3>Colores Principales</h3>
            <div className="seccion-color bg-color-yellow"></div>
            <div className="seccion-color bg-color-smoke"></div>
            <div className="seccion-color bg-color-grey-dark"></div>
            <div className="seccion-color bg-color-grey-smoot" ></div>

            <h3>Colores Secundarios</h3>
            <div className="seccion-color bg-color-yellow-smoot"></div>
            <div className="seccion-color bg-color-grey-light" ></div>
            <div className="seccion-color bg-color-white"></div>
            <p className="parrafos">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, eveniet, asperiores nostrum ea dolorum, repellendus voluptatem commodi ipsam tempora delectus quia dignissimos? Nostrum corporis placeat perspiciatis quis consectetur fugit minus?
            </p >
        </div>
        
    </>
}