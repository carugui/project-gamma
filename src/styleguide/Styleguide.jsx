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

        <section className='section section__buttons'>
            <h2 className="section__header">Botones</h2>

            <div>
                <code>size='x-big'</code>
                <Button text='Primario' size='x-big'/>
                <Button text='Secundario' type='secondary' size='x-big'/>
                <Button text='Desabilitado' status='disabled' size='x-big'/>
            </div>

            <div>
                <code className='code__button'>size='big'</code>
                <Button text='Primario' size='big'/>
                <Button text='Secundario' type='secondary' size='big'/>
                <Button text='Desabilitado' status='disabled' size='big'/>
            </div>

            <div>
                <code>size=''</code>
                <Button text='Primario'/>
                <Button text='Secundario' type='secondary'/>
                <Button text='Desabilitado' status='disabled'/>
            </div>

            <div>
                <code>size='small'</code>
                <Button text='Primario' size='small'/>
                <Button text='Secundario' type='secondary' size='small'/>
                <Button text='Desabilitado' status='disabled' size='small'/>
            </div>
        </section>

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