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

        <section className='section__guide section'>
            <h2 className="section__header">Encabezados</h2>

            <h1>Este es un encabezado h1</h1>
            <h2>Este es un encabezado h2</h2>
            <h3>Este es un encabezado h3</h3>
            <h4>Este es un encabezado h4</h4>
            <h5>Este es un encabezado h5</h5>
            <h6>Este es un encabezado h6.</h6>
        </section>

        <div className='section'>
            <Button />
        </div>

        <div className='section'>
        <h2 className="titular-seccion">Colores</h2>
            
            <h3>Colores Principales</h3>
            <div className="seccion-color color-bg-blue_dark_2" data-color="#4C956C"></div>
            <div className="seccion-color color-bg-blue_dark_1" data-color="#2C6E49"></div>
            <div className="seccion-color color-bg-blue_neutral_3" data-color="#F4A261"></div>
            <div className="seccion-color color-bg-blue_neutral_2" data-color="#E76F51"></div>
            <div className="seccion-color color-bg-blue_neutral_1" data-color="#E76F51"></div>
            <div className="seccion-color color-bg-blue_light_3" data-color="#E76F51"></div>
            <div className="seccion-color color-bg-blue_light_2" data-color="#E76F51"></div>
            <div className="seccion-color color-bg-blue_light_1" data-color="#E76F51"></div>
            <div className="seccion-color color-bg-white_eggshell" data-color="#E76F51"></div>

            <h3>Colores Secundarios</h3>
            <div className="seccion-color color-bg-yellow" data-color="#E9C46A"></div>
            <div className="seccion-color color-bg-blue" data-color="#37A3BB"></div>
        </div>
        
    </>
}