import './artshop.scss';

const Artshop = () => {
    return (
      <>
       <h1>Hola soy tu cuarto componente</h1>
    <div className='background'></div>   


<div className='flowiz'>       
    <div className='vertical-text'>
        <h1>Art Shop</h1>
    </div>    
    <div className='img.services-1'>
        <img src="../public/imagesSVG/#.svg" alt="#" />
    </div>
    <div>   
        < link title="logo-boton" href='https://andreacasanova.art/tienda-de-arte/' ><img src="../public/images/#.svg" alt="#" /></link>
    </div>
     <div>
        <button className='services'>Ver más</button>
    </div>
          
</div>

    </>
    );
  };

  export default Artshop
