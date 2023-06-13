import Nav from './Nav'
import Button from '../components/button/Button'
import Window from '../components/window/Window'
import StickyNote from '../components/stickyNote/StickyNote'
import './style.scss'


export default function Styleguide ( ) {
    return <>

        <div className='styleguide__content'>
        
            <h1>STYLEGUIDE DE PORTFOLIO</h1>
            

            

            
            <div className='section'>
            <h2 className="section__header">Colores</h2>
                
                <h3>Colores Principales</h3>
                
                <div className='colors__card'>
                    <div className="seccion-color color-bg-blue_dark_2" data-color="#4C956C"></div>
                    <h4>color_blue_dark_2</h4>
                    <h5><code>#003166</code></h5>
                </div>
                
                <div className='colors__card'>
                    <div className="seccion-color color-bg-blue_dark_1" data-color="#4C956C"></div>
                    <h4>color_blue_dark_1</h4>
                    <h5><code>#004999</code></h5>
                </div>

                <div className='colors__card'>
                    <div className="seccion-color color-bg-blue_neutral_3" data-color="#4C956C"></div>
                    <h4>blue_neutral_3</h4>
                    <h5><code>#006BDF</code></h5>
                </div>

                <div className='colors__card'>
                    <div className="seccion-color color-bg-blue_neutral_2" data-color="#4C956C"></div>
                    <h4>blue_neutral_2</h4>
                    <h5><code>#2990FF</code></h5>
                </div>

                <div className='colors__card'>
                    <div className="seccion-color color-bg-blue_neutral_1" data-color="#4C956C"></div>
                    <h4>blue_neutral_1</h4>
                    <h5><code>#61ADFF</code></h5>
                </div>

                <div className='colors__card'>
                    <div className="seccion-color color-bg-blue_light_3" data-color="#4C956C"></div>
                    <h4>blue_light_3</h4>
                    <h5><code>#99CAFF</code></h5>
                </div>

                <div className='colors__card'>
                    <div className="seccion-color color-bg-blue_light_2" data-color="#4C956C"></div>
                    <h4>blue_light_2</h4>
                    <h5><code>#CCE5FF</code></h5>
                </div>

                <div className='colors__card'>
                    <div className="seccion-color color-bg-blue_light_1" data-color="#4C956C"></div>
                    <h4>blue_light_1</h4>
                    <h5><code>#E8EFFD</code></h5>
                </div>

                <div className='colors__card'>
                    <div className="seccion-color color-bg-white_eggshell borders" data-color="#4C956C"></div>
                    <h4>white_eggshell</h4>
                    <h5><code>#FCF9F4</code></h5>
                </div>

                <h3>Escala de grises</h3>

                <div className='colors__card'>
                    <div className="seccion-color color-bg-black" data-color="#4C956C"></div>
                    <h4>black</h4>
                    <h5><code>#313131</code></h5>
                </div>

                <div className='colors__card'>
                    <div className="seccion-color color-bg-grey_darker" data-color="#4C956C"></div>
                    <h4>grey_darker</h4>
                    <h5><code>#5E5E5E</code></h5>
                </div>

                <div className='colors__card'>
                    <div className="seccion-color color-bg-grey_dark" data-color="#4C956C"></div>
                    <h4>grey_dark</h4>
                    <h5><code>#9D9D9D</code></h5>
                </div>

                <div className='colors__card'>
                    <div className="seccion-color color-bg-grey_light" data-color="#4C956C"></div>
                    <h4>grey_light</h4>
                    <h5><code>#D9D9D9</code></h5>
                </div>

                <div className='colors__card'>
                    <div className="seccion-color color-bg-grey_lighter" data-color="#4C956C"></div>
                    <h4>grey_lighter</h4>
                    <h5><code>#F0F0F0</code></h5>
                </div>

                <div className='colors__card'>
                    <div className="seccion-color color-bg-white borders" data-color="#4C956C"></div>
                    <h4>white</h4>
                    <h5><code>#FFFFFF</code></h5>
                </div>
                
            </div>

            <section className='section section__headers'>
                <h2 className="section__header">Encabezados</h2>

                <div>
                    <code className='code code__header'>{'<h1 />'}</code>
                    <h1>Este es un encabezado h1</h1>
                </div>
                
                <div>
                    <code className='code code__header'>{'<h2 />'}</code>
                    <h2>Este es un encabezado h2</h2>
                </div>

                <div>
                    <code className='code code__header'>{'<h3 />'}</code>
                    <h3>Este es un encabezado h3</h3>
                </div>

                <div>
                    <code className='code code__header'>{'<h4 />'}</code>
                    <h4>Este es un encabezado h4</h4>
                </div>

                <div>
                    <code className='code code__header'>{'<h5 />'}</code>
                    <h5>Este es un encabezado h5</h5>
                </div>

                <div>
                    <code className='code code__header'>{'<h6 />'}</code>
                    <h6>Este es un encabezado h6.</h6>
                </div>
            </section>

            <section className='section section__buttons'>
                <h2 className="section__header">Botones <code>{'<Button />'}</code></h2>

                <div>
                    <code className='code code__button'>size='x-big'</code>
                    <Button text='Primario' size='x-big'/>
                    <Button text='Secundario' type='secondary' size='x-big'/>
                    <Button text='Desabilitado' status='disabled' size='x-big'/>
                </div>

                <div>
                    <code className='code code__button'>size='big'</code>
                    <Button text='Primario' size='big'/>
                    <Button text='Secundario' type='secondary' size='big'/>
                    <Button text='Desabilitado' status='disabled' size='big'/>
                </div>

                <div>
                    <code className='code code__button'>size=''</code>
                    <Button text='Primario'/>
                    <Button text='Secundario' type='secondary'/>
                    <Button text='Desabilitado' status='disabled'/>
                </div>

                <div>
                    <code className='code code__button'>size='small'</code>
                    <Button text='Primario' size='small'/>
                    <Button text='Secundario' type='secondary' size='small'/>
                    <Button text='Desabilitado' status='disabled' size='small'/>
                </div>

                <div>
                    <p>Otros atributos: <code>text='' | type=''/'secondary' | status=''/'disabled' | link=''/'true'</code></p>
                </div>
            </section>

            <section className='section__guide section'>
                <h2 className="section__header">Ventana <code>{'<Window />'}</code></h2>

                <div>
                    <p>Atributos: <code>title='' | size=''/'medium' | position='center'/'bottom-left'/'top-right'</code></p>
                </div>

                <Window title='Este es el título' optionalClasses='window__styleguide' content={
                    <div>
                        <code className='code code__button'>size=''</code>
                        <p>La ventana se ajusta al contenido</p>
                    </div>
                }/>

                <Window title='Este es el título' optionalClasses='window__styleguide' size='medium' content={
                    
                    <div>
                        <code className='code code__button'>size='medium'</code>
                        <p>La ventana tiene un tamaño fijo de 650px x 400px, independientemente del contenido</p>
                    </div>
                }/>
                
            </section>

            <section className='section__guide section'>
                <h2 className="section__header">Sticky Note <code>{'<StickyNote />'}</code></h2>

                <div>
                    <p>Atributos: <code>text='' | optionalClasses=''/'medium'</code></p>
                </div>

                <StickyNote optionalClasses="stickynote__styleguide" text='Esto es el texto dentro de un StickyNote'/>
                
            </section>

        </div>
        
    </>
}