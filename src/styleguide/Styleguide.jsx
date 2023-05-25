import Nav from './Nav'
import Button from '../components/button/Button'
import './style.scss'
import IconChevron from '../components/svg/IconChevron'


export default function Styleguide ( ) {
    return <>
        
        <h1>Hola, soy el styleguide</h1>
        <div className='pink'>
            <IconChevron size="big" className="green svg--big"/>
        </div>
        

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
            <p>Esto es un párrafo</p>
        </div>

        <div className='section'>
            <Button />
        </div>

        <div className='section'>
        <h2 className="titular-seccion">Colores</h2>
            
            <h3>Colores Principales</h3>
            <div className="seccion-color bg-color-green" data-color="#4C956C"></div>
            <div className="seccion-color bg-color-green-dark" data-color="#2C6E49"></div>
            <div className="seccion-color bg-color-orange" data-color="#F4A261"></div>
            <div className="seccion-color bg-color-orange-dark" data-color="#E76F51"></div>

            <h3>Colores Secundarios</h3>
            <div className="seccion-color bg-color-yellow" data-color="#E9C46A"></div>
            <div className="seccion-color bg-color-blue" data-color="#37A3BB"></div>
        </div>
        
    </>
}