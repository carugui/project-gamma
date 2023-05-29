import './artshop.scss';


const Artshop = () => {
    return (
      <>
       <h1>Hola soy tu cuarto componente</h1>
   
      <div className='padre'>
            <div className='vertical-text'>
                <h1> Art Shop</h1>
            </div>
            
            <div className='retrato'>
                <img src="../public/imagesSVG/frame1.svg" alt="Logo" />
                <p>
                Esta es mi tienda de arte, acá encontrarás mi trabajo artistico desde el año 2006.
 
            </p>
            </div>
        </div>

            

    </>
    );
  } 

  export default Artshop
