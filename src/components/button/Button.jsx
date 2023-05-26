import './Button.scss';

function Button() {
    return (
        <>
          <button>Soy un botón</button>
          <button className='btn--secondary'>Soy un botón</button>
          <a href="xxx" className='btn'>Soy un link</a>
          <a href="xxx" className='btn btn--secondary'>Soy un link</a>
        </>
    )
}

export default Button