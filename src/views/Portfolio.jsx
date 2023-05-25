import { Route } from "react-router-dom";




export default function Portfolio() {
    return (
      <>
        <h1>soy el portafolio</h1>
        
      </>
    );
}






/* 

            <div> no sirve
            <Route path='/topbar/' element={<Topbar/>} />
            <Route path='/portrait' element={<Portrait/>} />
            </div>





import React,  {useState, useEffect} from 'react';

const portrait = () => {
    const [currentImage, setCurrentImage] = useState(0);
  
    const images = [
      '../public/imagesSVG/retrato.svg',
      '../public/imagesSVG/dressyellow.svg'
    ];
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
  
        // Calcular el porcentaje de desplazamiento
        const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
  
        // Determinar qué imagen mostrar según el porcentaje de desplazamiento
        const imageIndex = Math.floor(scrollPercentage / 50) % 2;
        setCurrentImage(imageIndex);
      };
      window.addEventListener('scroll', handleScroll);

      // Eliminar el listener de evento cuando se desmonta el componente
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className="#">
          <img className="#" src={images[currentImage]} alt="SVG Image" />
      </div>
    );
  };
  
  export default portrait;  */



