import Nav from './Nav'
import Button from '../components/button/Button'
import './style.scss'

export default function Styleguide () {
    return <>
        
        <h1>Hola, soy el styleguide</h1>

        <div className='section'>
            <h1>Esto es un h1</h1>
            <h2>Esto es un h2</h2>
            <h3>Esto es un h3</h3>
            <h4>Esto es un h4</h4>
            <h5>Esto es un h5</h5>
            <h6>Esto es un h6</h6>
        </div>

        <div className='section'>
            <Nav />
        </div>

        <div className='section'>
            <Button />
        </div>
        
    </>
}