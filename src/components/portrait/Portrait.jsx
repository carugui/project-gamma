import React, { useState, useEffect } from 'react';
import './../portrait/portrait.scss';







    const PortraitComponent = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScrollHorizontal = () => {
      if (scrollPosition > window.innerWidth * 0.6) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScrollHorizontal);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScrollHorizontal);
    };
  }, []);

  const containerClassName = 'portrait-container';
  const tituloClassName = 'portrait-title';
  const foto1ClassName = 'portrait-photo1';
  const foto2ClassName = 'portrait-photo2';
  const textContainerClassName = showText ? 'portrait-text-container show' : 'portrait-text-container';
  const textClassName = 'portrait-text';

  return (
    <div className={containerClassName}>
      <div className={tituloClassName}>Título</div>
      <img className={foto1ClassName} src={'/../../public/imagesSVG/dressyellow.svg'} alt="Foto 1" />
      <img className={foto2ClassName} src={image2} alt="Foto 2" />
      <div className={textContainerClassName}>
        <div className={textClassName}>Texto</div>
      </div>
    </div>
  );
};

export default PortraitComponent;

import image1 from '../../../public/imagesSVG/dressyellow.svg';
import image2 from '../../../public/imagesSVG/retrato.svg';

    


