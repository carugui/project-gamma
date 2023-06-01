import Topbar from "../../src/components/topbar/Topbar";
import Portrait from "../../src/components/portrait/Portrait";
import Cards from "../../src/components/cards/Cards";
import Artshop from "../../src/components/artshop/Artshop";
import Form from "../../src/components/form/Form";

//import Artshop from "../components/artshop/Artshop";
//import Artshop from "../../src/components/artshop/Artshop.jsx";

//import Artshop from "/Users/andreacasanova/Documents/ESAT CURSO/FRONT-END/About me/2about-me/styleguide2/src/components/artshop/Artshop.jsx";



import React, { useState, useEffect } from 'react';


export default function Portfolio() {
    return (
      <>
        <h1>soy el portafolio</h1>
        < Topbar/>
        < Portrait/>
        
        
        
        
        
        < Cards />
        < Artshop />
        < Form/>

      
        
        
        
      
        
       

      </>
    );
}







/* 

   
         
 < Artshop />
 < Form/> 

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



