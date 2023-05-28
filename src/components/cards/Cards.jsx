import './cards.scss';

const Cards = () => {
    return (
      <>
       <h1>Hola soy tu tercer componente</h1>
       
       
    <div className='vertical-text'>
        <h1>Diseño y desarrollo web</h1>
    </div>
     
    <div className='padre-services-color-grey'>
          
        <div className='img.services-1'>
            <img src="../public/imagesSVG/#.svg" alt="#" />
        </div>
        <div>   
            <p>
              He desarrollado sitios web y portafolios con e-commerce de varios artistas, entre ellos Javiera del Campo, Alfonso Fernández. Puedes consultar su trabajo en el enlace del menú.
            </p>
        </div>
        <div>
            <button className='services'>Ver más</button>
        </div>
          
    </div>

    <div className='vertical-text'>
        <h1>Ux/Ui Design</h1>
    </div>
     
    <div className='padre-services-color-grey'>
          
        <div className='img.services-2'>
            <img src="../public/imagesSVG/#.svg" alt="#" />
        </div>
        <div>   
            <p>
            El objetivo de la experiencia de usuario es optimizar la interaccion de los seres humanos con los sistemas tecnologicos mediante el diseño de interfaces eficientes e intuitivas. Mi objetivo es diseñar sitios web, aplicaciones y otros productos que no solo sean efectivos sino también agradables de usar.
            </p>
        </div>
        <div>
            <button className='services'>Ver más</button>
        </div>
          
    </div>
    <div className='vertical-text'>
        <h1>DIGITAL MARKETING</h1>
    </div>
     
    <div className='padre-services-color-grey'>
          
        <div className='img.services-3'>
            <img src="../public/imagesSVG/#.svg" alt="#" />
        </div>
        <div>   
            <p>
            Una estrategia de marketing digital efectiva es esencial para cualquier empresa que desee prosperar en la era digital. Sin embargo, el marketing digital no es una disciplina magica. Hay que planificar y ejecutar una estrategia de marketing digital bien diseñada para lograr resultados.
            </p>
        </div>
        <div>
            <button className='services'>Ver más</button>
        </div>
          
    </div>
      
      </>
    );
  };

  export default Cards